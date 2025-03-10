'use client';

import { themeKey } from '@/utils/keys';

import { setTheme } from '../action/theme';

const html =
  typeof document !== 'undefined' ? document?.querySelector('html') : null;

export function ThemeSwitcher() {
  const toggleTheme = () => {
    const current = html?.getAttribute(themeKey);
    const theme = current !== 'dark' ? 'dark' : 'light';

    setTheme(theme);

    html?.setAttribute(themeKey, theme);
  };

  return (
    <button
      aria-label="change color theme mode"
      className="cursor-pointer"
      onClick={toggleTheme}
    >
      <span className="hidden dark:block text-amber-200">Light</span>
      <span className="dark:hidden text-blue-600">Dark</span>
    </button>
  );
}
