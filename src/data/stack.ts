export type TechItem = { name: string; logo?: string };
export type TechGroup = { key: string; items: TechItem[] };

const LOGO = (file: string) => `/images/tech_stack/${file}`;

export const STACK: TechGroup[] = [
  {
    key: 'mobile',
    items: [
      { name: 'Flutter', logo: LOGO('flutter.png') },
      { name: 'Dart' },
      { name: 'FlutterFlow', logo: LOGO('ff.png') },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: 'Firebase', logo: LOGO('fir.png') },
      { name: 'Supabase', logo: LOGO('supabase.png') },
      { name: 'Node.js', logo: LOGO('node.png') },
      { name: 'SQLite', logo: LOGO('sqflite.png') },
      { name: 'Hive' },
      { name: 'Cloudflare R2' },
    ],
  },
  {
    key: 'monetization',
    items: [
      { name: 'RevenueCat', logo: LOGO('rc.png') },
      { name: 'AdMob', logo: LOGO('admob.png') },
      { name: 'Unity Ads', logo: LOGO('unity.png') },
      { name: 'PayPal', logo: LOGO('paypal.png') },
    ],
  },
  {
    key: 'engagement',
    items: [
      { name: 'OneSignal', logo: LOGO('one.png') },
      { name: 'OpenAI', logo: LOGO('openai.png') },
      { name: 'Firebase Analytics' },
      { name: 'Crashlytics' },
    ],
  },
  {
    key: 'devices',
    items: [
      { name: 'NFC' },
      { name: 'Bluetooth' },
      { name: 'Google Cast' },
      { name: 'Home-screen widgets' },
      { name: 'Git', logo: LOGO('git.png') },
    ],
  },
];