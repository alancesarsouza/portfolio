import { fetchDetailData } from '@/api';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageWithLanguageProps } from '@/intl/types';
import { getTranslation, translateText } from '@/utils/methods';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project detail | Portfolio',
  description: 'This page details a specific project and its information',
};

async function DetailPage({ params }: PageWithLanguageProps<{ slug: string }>) {
  const { language, dictionary } = await getTranslation(params);

  const { data } = await params.then((param) => {
    const id = (param.slug || '').split('-')[0];
    return fetchDetailData(Number(id));
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-3xl">{data?.title}</h1>

      <p className="text-lg">{translateText(language, data?.description)}</p>

      <div className="flex md:flex-row flex-col-reverse gap-8 py-4">
        <ul className="flex flex-col flex-1 gap-2 max-h-screen lg:max-h-96 overflow-y-auto">
          {data?.skills.map(({ id, label, description }) => (
            <li
              key={id}
              className="flex flex-col gap-2 bg-indigo-50 dark:bg-indigo-800 px-3 py-2 rounded-sm"
            >
              <h3 className="font-extrabold text-sm">{label}</h3>

              <p className="text-black dark:text-white text-sm">
                {translateText(language, description)}
              </p>
            </li>
          ))}
        </ul>

        <Tabs className="flex-1 md:flex-2" defaultValue="challenges">
          <TabsList className="w-full">
            <TabsTrigger
              className="transition-all cursor-pointer"
              value="challenges"
            >
              {dictionary?.cta.challenges}
            </TabsTrigger>

            <TabsTrigger
              className="transition-all cursor-pointer"
              value="technologies"
            >
              {dictionary?.cta.technologies}
            </TabsTrigger>

            <TabsTrigger
              className="transition-all cursor-pointer"
              value="libraries"
            >
              {dictionary?.cta.libraries}
            </TabsTrigger>

            <TabsTrigger
              className="transition-all cursor-pointer"
              value="integration"
            >
              {dictionary?.cta.integration}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="challenges">
            {translateText(language, data?.challenges)}
          </TabsContent>

          <TabsContent value="technologies">
            {translateText(language, data?.technologies)}
          </TabsContent>

          <TabsContent value="libraries">
            {translateText(language, data?.libraries)}
          </TabsContent>

          <TabsContent value="integration">
            {translateText(language, data?.integration)}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default DetailPage;
