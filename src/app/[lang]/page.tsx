import Link from 'next/link';

import { PageWithLanguageProps } from '@/intl/types';
import { getTranslation } from '@/utils/methods';

async function Home({ params }: PageWithLanguageProps) {
  const { dictionary } = await getTranslation(params);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl">{dictionary.text.hello}</h1>
      <ul className="flex gap-4">
        <li>
          <Link href="/en">English</Link>
        </li>
        <li>
          <Link href="/pt">Portuguese</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
