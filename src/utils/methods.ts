import { dictionaries } from '@/intl/constants';
import { LanguagesKeys } from '@/intl/types';

export async function getTranslation(params: Promise<{ lang: LanguagesKeys }>) {
  let language: LanguagesKeys = 'pt';

  const dictionary = await params.then(({ lang }) => {
    language = lang;
    return dictionaries[lang]();
  });

  return { language, dictionary };
}

export function translateText<T extends string = LanguagesKeys>(
  key: T,
  data?: string | string[] | Record<T, string>
): string {
  // prevents data with string or undefined type
  if (!data || typeof data === 'string') {
    return data || '';
  }

  // prevents data with object type
  if (!Array.isArray(data)) {
    return data?.[key] || '';
  }

  switch (key) {
    case 'en':
      return data?.[1] || '';

    default:
      return data?.[0] || '';
  }
}
