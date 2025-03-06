import { match } from '@formatjs/intl-localematcher';

import { LanguagesKeys } from '@/intl/types';

import Negotiator from 'negotiator';

const defaultLocale: LanguagesKeys = 'pt-BR';
const locales: LanguagesKeys[] = ['pt-BR', 'en-US', 'es'];
const headers = { 'accept-language': `${locales.join(',')};q=0.5` };
const languages = new Negotiator({ headers }).languages();

function getMatchLocale(locale: LanguagesKeys | never = defaultLocale) {
  return match(languages, locales, locale);
}

export { defaultLocale, getMatchLocale, languages, locales };
