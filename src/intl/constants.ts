import { LanguagesKeys } from './types';

export type Languages = keyof typeof dictionaries;

export const dictionaries = {
  en: () => import('./english').then((d) => d.default),
  pt: () => import('./portuguese').then((d) => d.default),
} as const;

export function getDictionary(lang: LanguagesKeys) {
  const isValid = lang && lang in dictionaries;

  if (!isValid) {
    return null;
  }

  return dictionaries[lang]();
}
