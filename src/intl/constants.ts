export type Languages = keyof typeof dictionaries;

export const dictionaries = {
  en: () => import('./english').then((d) => d.default),
  pt: () => import('./portuguese').then((d) => d.default),
} as const;
