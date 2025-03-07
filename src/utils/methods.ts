import { dictionaries } from '@/intl/constants';
import { LanguagesKeys } from '@/intl/types';

export async function getTranslation(params: Promise<{ lang: string }>) {
  let language = '';

  const dictionary = await params.then(({ lang }) => {
    language = lang;
    return dictionaries[lang as LanguagesKeys]();
  });

  return {
    language,
    dictionary,
  };
}

export function translateText<T extends string = LanguagesKeys>(
  key: T,
  data: string[]
) {
  switch (key) {
    case 'en':
      return data[1];

    default:
      return data[0];
  }
}
