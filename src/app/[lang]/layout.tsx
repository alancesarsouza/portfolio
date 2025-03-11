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

      {children}

      {/* <Footer language={language} /> */}
    </div>
  );
}
