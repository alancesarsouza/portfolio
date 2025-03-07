import Image from 'next/image';

import { fetchListData } from '@/api';
import { getTranslation, translateText } from '@/utils/methods';

async function PortfolioPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { language } = await getTranslation(params);
  const { data } = await fetchListData();

  return (
    <div className="flex flex-col p-8 w-screen">
      <ul className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {(data || []).map(({ id, title, image, description }: ProjectType) => (
          <li key={id} className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">{title}</h3>

            <div className="flex justify-center h-[200] align-center">
              <Image alt={title} height={200} src={image} width={200} />
            </div>

            <p className="text-base line-clamp-3">
              {translateText(language, description)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioPage;
