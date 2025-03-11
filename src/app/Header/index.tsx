import React from 'react';

import { LanguagesKeys } from '@/intl/types';

import { LanguageSelector } from './LanguageSwitcher';
import Links from './Links';
import { MobileMenu } from './MobileMenu';
import { ThemeSwitcher } from './ThemeSwitcher';

export interface HeaderProps {
  language: LanguagesKeys;
}

// eslint-disable-next-line sort-exports/sort-exports
export async function Header(props: HeaderProps) {
  return (
    <div className="top-0 z-30 sticky flex justify-center bg-gray-100 dark:bg-gray-900 shadow-md w-full">
      <header className="flex justify-end md:justify-between w-full max-w-[1920px]">
        <nav className="hidden md:block px-14 py-4">
          <ul className="flex gap-8 font-bold text-subtitle">
            <li className="hover:text-violet-500 transition-colors">
              <Links.Home language={props.language} />
            </li>

            <li className="hover:text-violet-500 transition-colors">
              <Links.Portfolio language={props.language} />
            </li>

            <li className="hover:text-violet-500 transition-colors">
              <Links.Comments language={props.language} />
            </li>

            <li className="hover:text-violet-500 transition-colors">
              <Links.Github language={props.language} />
            </li>
          </ul>
        </nav>

        <nav className="hidden md:block px-14 py-4">
          <ul className="flex gap-8">
            <li>
              <LanguageSelector />
            </li>

            <li>
              <ThemeSwitcher />
            </li>

            <li>USER</li>
          </ul>
        </nav>

        <nav className="md:hidden flex items-center gap-8 px-8 py-4">
          <LanguageSelector />

          <ThemeSwitcher />

          <section className="ml-8">
            <MobileMenu {...props} />
          </section>
        </nav>
      </header>
    </div>
  );
}
