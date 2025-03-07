import React from 'react';

import Image from 'next/image';

export function Card({
  children,
  title,
  image,
}: React.PropsWithChildren<Pick<ProjectType, 'title' | 'image'>>) {
  return (
    <div className="flex flex-col gap-2 lg:hover:shadow-xl p-4 lg:hover:scale-101 lg:transition-all">
      <h3 className="font-bold text-2xl">{title}</h3>

      <div className="flex justify-center">
        <Image alt={title} height={200} src={image} width={200} />
      </div>

      <p className="text-base line-clamp-4">{children}</p>
    </div>
  );
}
