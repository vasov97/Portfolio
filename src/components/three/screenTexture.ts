import * as THREE from 'three';

export type ScreenData = { name: string; color: string; src?: string };

const W = 540;
const H = 1170;

/** Fake app UI in the app's brand color, used until a real screenshot loads. */
export function placeholderTexture(data: ScreenData): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, data.color);
  bg.addColorStop(1, '#050608');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  const white = (a: number) => `rgba(255, 255, 255, ${a})`;
  const box = (x: number, y: number, w: number, h: number, r: number, fill: string) => {
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, r);
    ctx.fill();
  };

  // status bar
  ctx.fillStyle = white(0.85);
  ctx.font = '600 26px system-ui, sans-serif';
  ctx.fillText('9:41', 56, 80);

  // title
  ctx.font = '600 62px system-ui, sans-serif';
  ctx.fillText(data.name, 48, 210, W - 96);
  box(48, 245, 250, 20, 10, white(0.25));

  // cards
  for (let i = 0; i < 4; i++) {
    const y = 320 + i * 185;
    box(48, y, W - 96, 155, 28, white(0.1));
    box(76, y + 32, 90, 90, 22, white(0.18));
    box(190, y + 45, 220, 20, 10, white(0.35));
    box(190, y + 85, 150, 16, 8, white(0.18));
  }

  // tab bar
  box(48, H - 150, W - 96, 96, 48, white(0.12));
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = white(i === 0 ? 0.9 : 0.35);
    ctx.beginPath();
    ctx.arc(130 + i * 95, H - 102, 12, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/** Loads the real screenshot if it exists; silently keeps the placeholder if not. */
export function loadScreen(data: ScreenData, onLoad: (t: THREE.Texture) => void) {
  if (!data.src) return;
  new THREE.TextureLoader().load(
    data.src,
    (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      onLoad(texture);
    },
    undefined,
    () => {},
  );
}