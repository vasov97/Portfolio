import { getRelativeLocaleUrl } from 'astro:i18n';

export const LOCALES = ['en', 'sr'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const HTML_LANG: Record<Locale, string> = { en: 'en', sr: 'sr-Latn' };
export const OG_LOCALE: Record<Locale, string> = { en: 'en_US', sr: 'sr_RS' };

type Dict = Record<string, unknown>;

// Auto-loads every locales/<lang>/<section>.json
const modules = import.meta.glob<{ default: Dict }>('./locales/*/*.json', { eager: true });

const dictionaries = {} as Record<Locale, Dict>;
for (const [path, mod] of Object.entries(modules)) {
  const [, locale, section] = path.match(/\.\/locales\/(\w+)\/([\w-]+)\.json$/) ?? [];
  if (!locale || !section) continue;
  (dictionaries[locale as Locale] ??= {})[section] = mod.default;
}

function lookup(dict: Dict | undefined, key: string): unknown {
  return key
    .split('.')
    .reduce<unknown>(
      (obj, part) => (obj && typeof obj === 'object' ? (obj as Dict)[part] : undefined),
      dict,
    );
}

function resolve(locale: Locale, key: string): unknown {
  return lookup(dictionaries[locale], key) ?? lookup(dictionaries[DEFAULT_LOCALE], key);
}

/** Current locale from Astro.currentLocale, falls back to EN. */
export function getLocale(current: string | undefined): Locale {
  return LOCALES.includes(current as Locale) ? (current as Locale) : DEFAULT_LOCALE;
}

/** t('nav.apps') → "Apps" / "Aplikacije". Falls back to EN, then to the key. */
export function useTranslations(locale: Locale) {
  return (key: string): string => {
    const value = resolve(locale, key);
    return typeof value === 'string' ? value : key;
  };
}

/** For lists/objects (e.g. testimonials, process steps). */
export function tRaw<T>(locale: Locale, key: string): T {
  return resolve(locale, key) as T;
}

/** localizePath('apps/fitprogress', 'sr') → "/sr/apps/fitprogress" */
export function localizePath(path: string, locale: Locale): string {
  return getRelativeLocaleUrl(locale, path);
}

/** "/sr/apps/fitprogress" → "apps/fitprogress" */
export function stripLocale(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (LOCALES.includes(parts[0] as Locale)) parts.shift();
  return parts.join('/');
}

/** Same page in another language: used by the switcher and hreflang tags. */
export function switchLocalePath(pathname: string, target: Locale): string {
  return localizePath(stripLocale(pathname), target);
}