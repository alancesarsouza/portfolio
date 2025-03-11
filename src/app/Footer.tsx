import React from 'react';

import Link from 'next/link';

import { getDictionary } from '@/intl/constants';
import { LanguagesKeys } from '@/intl/types';

export interface FooterProps {
  language: LanguagesKeys;
}

// eslint-disable-next-line sort-exports/sort-exports
export async function Footer({ language }: FooterProps) {
  const dictionary = await getDictionary(language);

  return (
    <div className="top-0 z-30 sticky flex justify-center bg-indigo-100 dark:bg-indigo-950 w-full">
      <footer className="flex lg:flex-row flex-col-reverse justify-end gap-8 px-14 py-8 w-full max-w-[1920px] min-h-screen lg:min-h-full text-lg">
        <section className="flex flex-col gap-2 min-w-fit lg:min-w-md">
          <h4 className="font-bold">{dictionary?.cta.contact}</h4>

          <nav>
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href="https://www.figma.com/design/ZA4HUjsZBGEj8ma6Qz4z3e/Showcase?node-id=103-1047&t=AW6cjNpd7wC43iqJ-1"
                  target="_blank"
                >
                  Figma
                </Link>
              </li>

              <li>
                <Link href="https://wa.me/+55985439204">+55 9 8543 9204</Link>
              </li>

              <li>
                <Link href="mailto:alansouza.devbr@gmail.com">
                  alansouza.devbr@gmail.com
                </Link>
              </li>

              <Link href="https://www.linkedin.com/in/alancesarsouza/">
                linkedin.com/in/alancesarsouza
              </Link>
            </ul>
          </nav>
        </section>

        <section className="flex flex-col gap-2 w-full">
          <h4 className="font-bold">{dictionary?.cta.explorer}</h4>

          <nav>
            <ul className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3">
              <Link href={`/${language}/`}>Projecto mais comentado</Link>
            </ul>
          </nav>
        </section>
      </footer>
    </div>
  );
}
