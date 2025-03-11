import React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Menu } from 'lucide-react';

import { HeaderProps } from '.';
import Links from './Links';

export async function MobileMenu({ language }: HeaderProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ml-8 cursor-pointer">
        <Menu size={32} />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>
          <Links.Home language={language} />
        </DropdownMenuLabel>

        <DropdownMenuLabel>
          <Links.Portfolio language={language} />
        </DropdownMenuLabel>

        <DropdownMenuLabel>
          <Links.Comments language={language} />
        </DropdownMenuLabel>

        <DropdownMenuLabel>
          <Links.Github language={language} />
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>USER</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
