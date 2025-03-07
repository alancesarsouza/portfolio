import { LanguagesKeys } from '@/intl/types';

type RouteParams<T = Record<string, string> | never> = {
  lang: LanguagesKeys;
  query?: string;
} & T;

export const routes = {
  home: (r: RouteParams) => `/${r.lang}${r.query ? `?${r.query}` : ''}`,

  portfolio: (r: RouteParams) =>
    `/${r.lang}/portfolio${r.query ? `?${r.query}` : ''}`,

  detail: (r: RouteParams<{ slug: string }>) =>
    `/${r.lang}/portfolio/${r.slug}${r.query ? `?${r.query}` : ''}`,
};
