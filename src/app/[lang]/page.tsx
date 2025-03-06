import { dictionaries } from '@/intl/constants';
import { LanguagesKeys } from '@/intl/types';

async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const test = await dictionaries[lang as LanguagesKeys]();

  return (
    <div className="flex flex-col gap-4">
      <h1>{test.text.hello}</h1>
      <h2>I&apos;ts is the current lang: {lang}</h2>
    </div>
  );
}

export default Home;
