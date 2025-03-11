import { PropsWithChildren } from 'react';

import { PageWithLanguageProps } from '@/intl/types';
import { getTranslation } from '@/utils/methods';

import { Header } from '../Header';

export default async function Layout({
  children,
  params,
}: PropsWithChildren<PageWithLanguageProps>) {
  const { language } = await getTranslation(params);

  return (
    <div className="position-relative">
      <Header language={language} />

      <div className="flex flex-col items-center w-full">
        <section className="px-1 sm:px-2 md:px-8 lg:px-12 xl:px-16 py-4 max-w-[1920px]">
          {children}
        </section>
      </div>

      {/* <Footer language={language} /> */}
    </div>
  );
}
