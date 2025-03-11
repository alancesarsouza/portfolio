type RouteParams<T = Record<string, string> | never> = {
  lang?: string;
  query?: string;
} & T;

export const routes = {
  home: (r: RouteParams) => `/${r.lang || 'pt'}${r.query ? `?${r.query}` : ''}`,

  portfolio: (r: RouteParams) =>
    `/${r.lang || 'pt'}/portfolio${r.query ? `?${r.query}` : ''}`,

  detail: (r: RouteParams<{ slug: string }>) =>
    `/${r.lang || 'pt'}/portfolio/${r.slug}${r.query ? `?${r.query}` : ''}`,

  comments: () => '/comments',

  github: () => 'https://github.com/alancesarsouza/portfolio',
};
