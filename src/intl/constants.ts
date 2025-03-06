export type Languages = keyof typeof dictionaries;

export const dictionaries = {
  es: () => import('./spanish').then((d) => d.default),
  'en-US': () => import('./english').then((d) => d.default),
  'pt-BR': () => import('./portuguese').then((d) => d.default),
} as const;
