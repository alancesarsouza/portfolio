import { Languages } from './constants';
import portuguese from './portuguese';

export type DictionaryShape<T = typeof portuguese> = {
  [K in keyof T]: Record<keyof T[K], string>;
};

export type LanguagesKeys = Languages;

export type PageWithLanguageProps<T extends Record<string, unknown> = never> = {
  params: Promise<{ lang: LanguagesKeys } & T>;
};
