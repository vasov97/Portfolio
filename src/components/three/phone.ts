import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export const PHONE = { width: 1, height: 2.06, depth: 0.1, radius: 0.14, bezel: 0.045 };

function roundedRect(w: number, h: number, r: number): THREE.Shape {
  const x = -w / 2;
  const y = -h / 2;
  const s = new THREE.Shape();
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

/** Flat rounded rectangle with UVs mapped 0..1, so a screenshot fills it exactly. */
function roundedPlane(w: number, h: number, r: number): THREE.ShapeGeometry {
  const geo = new THREE.ShapeGeometry(roundedRect(w, h, r), 16);
  const pos = geo.attributes.position;
  const uv = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    uv.setXY(i, pos.getX(i) / w + 0.5, pos.getY(i) / h + 0.5);
  }
  uv.needsUpdate = true;
  return geo;
}

// Shared between all phones: built once
let shared: {
  body: THREE.BufferGeometry;
  screen: THREE.BufferGeometry;
  island: THREE.BufferGeometry;
  bodyMat: THREE.Material;
  islandMat: THREE.Material;
} | null = null;

function getShared() {
  if (!shared) {
    const { width: w, height: h, depth: d, radius: r, bezel: b } = PHONE;
    shared = {
      body: new RoundedBoxGeometry(w, h, d, 6, r),
      screen: roundedPlane(w - b * 2, h - b * 2, r - b * 0.8),
      island: roundedPlane(0.3, 0.085, 0.0425),
      bodyMat: new THREE.MeshPhysicalMaterial({
        color: 0x16181c,
        metalness: 0.9,
        roughness: 0.28,
        clearcoat: 0.6,
      }),
      islandMat: new THREE.MeshBasicMaterial({ color: 0x000000 }),
    };
  }
  return shared;
}

export function createPhone(texture: THREE.Texture) {
  const s = getShared();
  const { height: h, depth: d, bezel: b } = PHONE;

  const group = new THREE.Group();
  const screenMat = new THREE.MeshBasicMaterial({ map: texture, toneMapped: false });

  const body = new THREE.Mesh(s.body, s.bodyMat);
  const screen = new THREE.Mesh(s.screen, screenMat);
  screen.position.z = d / 2 + 0.002;

  const island = new THREE.Mesh(s.island, s.islandMat);
  island.position.set(0, (h - b * 2) / 2 - 0.1, d / 2 + 0.004);

  group.add(body, screen, island);
  return { group, screenMat };
}