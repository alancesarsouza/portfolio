import Link from 'next/link';

import { getDictionary } from '@/intl/constants';
import { routes } from '@/utils/routes';

import { HeaderProps } from '.';

async function Home({ language }: HeaderProps) {
  const dictionary = await getDictionary(language);
  return (
    <Link href={routes.home({ lang: language })}>{dictionary?.cta.home}</Link>
  );
}

async function Portfolio({ language }: HeaderProps) {
  const dictionary = await getDictionary(language);
  return (
    <Link href={routes.portfolio({ lang: language })}>
      {dictionary?.cta.portfolio}
    </Link>
  );
}
async function Comments({ language }: HeaderProps) {
  const dictionary = await getDictionary(language);
  return <Link href={routes.comments()}>{dictionary?.cta.comments}</Link>;
}

async function Github({ language }: HeaderProps) {
  const dictionary = await getDictionary(language);
  return (
    <Link href={routes.github()} target="_blank">
      {dictionary?.cta.github}
    </Link>
  );
}

export default {
  Home,
  Portfolio,
  Comments,
  Github,
};
