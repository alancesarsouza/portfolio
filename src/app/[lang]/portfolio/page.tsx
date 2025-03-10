import Link from 'next/link';

import { fetchListData } from '@/api';
import { PageWithLanguageProps } from '@/intl/types';
import { getTranslation, translateText } from '@/utils/methods';
import { routes } from '@/utils/routes';

import { Card } from './Card';

async function PortfolioPage({ params }: PageWithLanguageProps) {
  const { language } = await getTranslation(params);
  const { data } = await fetchListData();

  if (!data) {
    return null;
  }

  return (
    <ul className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
      {(data || []).map(({ id, description, title, image }: ProjectType) => (
        <li key={id}>
          <Link
            href={routes.detail({
              slug: `${id}-${title.replaceAll(' ', '-').toLowerCase()}`,
              lang: language,
            })}
          >
            <Card image={image} title={title}>
              {translateText(language, description)}
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PortfolioPage;
