import { fetchDetailData } from '@/api';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageWithLanguageProps } from '@/intl/types';
import { getTranslation, translateText } from '@/utils/methods';

async function DetailPage({ params }: PageWithLanguageProps<{ slug: string }>) {
  const { language, dictionary } = await getTranslation(params);
  const { data } = await params.then((param) => {
    const id = (param.slug || '').split('-')[0];
    return fetchDetailData(Number(id));
  });

  return (
    <div className="flex flex-col gap-4 sm:p-8 xl:px-16">
      <h1 className="font-bold text-3xl">{data?.title}</h1>
      <p>{data?.description}</p>

      <div className="flex md:flex-row sm:flex-col-reverse gap-4">
        <ul className="flex-1">
          <li>
            <h3>Frontend</h3>
            <p>
              O desenvolvimento foi feito com React, garantindo uma interface
              dinâmica e performática
            </p>
          </li>
        </ul>

        <Tabs className="sm:flex-1 xl:flex-2" defaultValue="challenges">
          <TabsList className="w-full">
            <TabsTrigger className="cursor-pointer" value="challenges">
              {dictionary.cta.challenges}
            </TabsTrigger>

            <TabsTrigger className="cursor-pointer" value="technologies">
              {dictionary.cta.technologies}
            </TabsTrigger>

            <TabsTrigger className="cursor-pointer" value="libraries">
              {dictionary.cta.libraries}
            </TabsTrigger>

            <TabsTrigger className="cursor-pointer" value="integration">
              {dictionary.cta.integration}
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
