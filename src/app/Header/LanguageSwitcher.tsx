'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

export function LanguageSelector() {
  const { lang } = useParams();
  const pathname = usePathname();

  return (
    <div>
      <div>
        <div>
          <ul>
            <li className={`${lang === 'pt' ? 'text-amber-400' : ''}`}>
              <Link
                href={pathname.replace(String(lang || ''), 'pt')}
                locale="pt-BR"
              >
                Português
              </Link>
            </li>

            <li className={`${lang === 'en' ? 'text-amber-400' : ''}`}>
              <Link
                href={pathname.replace(String(lang || ''), 'en')}
                locale="en-US"
              >
                English
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
