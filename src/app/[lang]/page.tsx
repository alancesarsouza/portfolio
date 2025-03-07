import Link from 'next/link';

import { getTranslation } from '@/utils/methods';

async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { dictionary } = await getTranslation(params);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl">{dictionary.text.hello}</h1>
      <ul className="flex gap-4">
        <li>
          <Link href="/en-US">English</Link>
        </li>
        <li>
          <Link href="/es">Spanish</Link>
        </li>
        <li>
          <Link href="/pt-BR">Portuguese</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
