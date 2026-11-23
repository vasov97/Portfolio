import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createPhone } from './phone';
import { placeholderTexture, loadScreen, type ScreenData } from './screenTexture';

export function mountScene(host: HTMLElement, screens: ScreenData[]) {
  const canvas = host.querySelector<HTMLCanvasElement>('canvas');
  if (!canvas || screens.length === 0) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isSmall = window.innerWidth < 700;

  // ---------- Renderer / scene / camera ----------
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isSmall ? 1.5 : 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 7.5, 12.5); // back phones fade into the dark

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
  camera.position.set(0, 0.6, 9.5);
  camera.lookAt(0, 0, 0);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  // ---------- Phone carousel ----------
  const carousel = new THREE.Group();
  scene.add(carousel);

  const radius = screens.length > 3 ? 2.4 : 1.8;
  const maxAniso = renderer.capabilities.getMaxAnisotropy();

  const phones = screens.map((data, i) => {
    const placeholder = placeholderTexture(data);
    placeholder.anisotropy = maxAniso;
    const phone = createPhone(placeholder);

    const angle = (i / screens.length) * Math.PI * 2;
    phone.group.position.set(Math.sin(angle) * radius, 0, Math.cos(angle) * radius);
    phone.group.rotation.y = angle; // faces outward
    carousel.add(phone.group);

    loadScreen(data, (texture) => {
      texture.anisotropy = maxAniso;
      phone.screenMat.map = texture;
      phone.screenMat.needsUpdate = true;
      placeholder.dispose();
      if (reducedMotion) render();
    });

    return phone;
  });

  // ---------- Lights ----------
  const key = new THREE.DirectionalLight(0xffffff, 1.2);
  key.position.set(2, 3, 5);
  const blue = new THREE.PointLight(0x2b8cff, 30, 20);
  blue.position.set(-3, 1, 3);
  scene.add(key, blue, new THREE.AmbientLight(0xffffff, 0.3));

  // ---------- Pointer tilt ----------
  const pointer = { x: 0, y: 0 };
  let tiltY = 0;
  window.addEventListener(
    'pointermove',
    (e) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
    },
    { passive: true },
  );

  // ---------- Render ----------
  const clock = new THREE.Clock();

  function render() {
    const t = clock.getElapsedTime();

    tiltY += (pointer.x * 0.4 - tiltY) * 0.05;
    carousel.rotation.y = -t * 0.18 + tiltY;
    carousel.rotation.x += (pointer.y * 0.1 - carousel.rotation.x) * 0.05;

    phones.forEach((p, i) => {
      p.group.position.y = Math.sin(t * 0.9 + i * 1.3) * 0.08;
    });

    renderer.render(scene, camera);
  }

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = host;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (reducedMotion) render();
  };
  new ResizeObserver(resize).observe(host);
  resize();

  // ---------- Loop: pauses off-screen and in hidden tabs ----------
  let rafId = 0;
  let onScreen = true;

  const loop = () => {
    render();
    rafId = requestAnimationFrame(loop);
  };
  const start = () => {
    if (!rafId && onScreen && !document.hidden) loop();
  };
  const stop = () => {
    cancelAnimationFrame(rafId);
    rafId = 0;
  };

  if (reducedMotion) {
    render();
  } else {
    new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      onScreen ? start() : stop();
    }).observe(host);
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
    start();
  }

  host.dataset.ready = 'true';
}