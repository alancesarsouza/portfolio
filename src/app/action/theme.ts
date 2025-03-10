'use server';
import { cookies } from 'next/headers';

import { themeKey } from '@/utils/keys';

export async function setTheme(theme: 'dark' | 'light') {
  (await cookies()).set(themeKey, theme);
  return theme;
}
