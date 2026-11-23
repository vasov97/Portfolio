import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/utils';

export type App = CollectionEntry<'apps'>;
type Localized<T> = { en: T; sr: T };

/** Picks the right language; plain strings pass through unchanged. */
export function loc<T>(value: T | Localized<T>, locale: Locale): T {
  if (value && typeof value === 'object' && 'en' in value && 'sr' in value) {
    return (value as Localized<T>)[locale] ?? (value as Localized<T>).en;
  }
  return value as T;
}

export async function getApps(): Promise<App[]> {
  const apps = await getCollection('apps');
  return apps.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedApps(): Promise<App[]> {
  return (await getApps()).filter((a) => a.data.featured);
}

export async function getMoreApps(): Promise<App[]> {
  return (await getApps()).filter((a) => !a.data.featured);
}