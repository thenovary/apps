import ko from './ko.json';
import en from './en.json';

export type Lang = 'ko' | 'en';

const translations = { ko, en };

export function getLang(lang: string | undefined): Lang {
  if (lang === 'en') return 'en';
  return 'ko';
}

export function t(lang: Lang, key: string): string {
  const keys = key.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = translations[lang];
  for (const k of keys) {
    result = result?.[k];
  }
  return result ?? key;
}

export function getLocalizedName(
  names: Record<string, string>,
  lang: Lang
): string {
  return names[lang] ?? names['default'] ?? names['en'] ?? '';
}
