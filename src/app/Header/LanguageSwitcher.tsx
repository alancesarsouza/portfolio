'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Languages } from 'lucide-react';

export function LanguageSelector() {
  const { lang } = useParams();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-gray-700 hover:text-violet-500 dark:text-gray-300 transition-colors cursor-pointer">
        <Languages size={24} />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel
          className={`hover:opacity-75 ${lang === 'pt' ? 'text-violet-500' : ''}`}
        >
          <Link
            href={pathname.replace(String(lang || ''), 'pt')}
            locale="pt-BR"
          >
            Português
          </Link>
        </DropdownMenuLabel>

        <DropdownMenuLabel
          className={`hover:opacity-75 ${lang === 'en' ? 'text-violet-500' : ''}`}
        >
          <Link
            href={pathname.replace(String(lang || ''), 'en')}
            locale="en-US"
          >
            English
          </Link>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
