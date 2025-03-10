import React from 'react';

import { LanguageSelector } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Header() {
  return (
    <header className="flex justify-end sm:justify-between px-14 py-4">
      <nav className="hidden sm:block">
        <ul className="flex gap-3 font-extrabold text-subtitle">
          <li>Inicio</li>

          <li>Projetos</li>

          <li>Comentarios</li>

          <li>Github</li>
        </ul>
      </nav>

      <nav className="hidden sm:block">
        <ul className="flex gap-3 font-extrabold text-subtitle">
          <li>
            <LanguageSelector />
          </li>

          <li>
            <ThemeSwitcher />
          </li>

          <li>USER</li>
        </ul>
      </nav>

      <nav className="sm:hidden block">MENU</nav>
    </header>
  );
}
