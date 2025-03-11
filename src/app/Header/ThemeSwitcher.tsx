'use client';

import { themeKey } from '@/utils/keys';

import { Moon, SunDim } from 'lucide-react';

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
    <span
      aria-label="change color theme mode"
      className="cursor-pointer"
      role="button"
      onClick={toggleTheme}
    >
      <span className="hidden dark:block text-yellow-100 hover:text-yellow-400 transition-colors">
        <SunDim size={24} />
      </span>

      <span className="dark:hidden text-blue-900 hover:text-blue-600 transition-colors">
        <Moon size={24} />
      </span>
    </span>
  );
}
