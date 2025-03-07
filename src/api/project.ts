const apiUrl = process.env.API_URL ?? 'http://localhost:3333/api/v1';
const baseUrl = `${apiUrl}/projects`;

type ResponseType<T> = Promise<{ data: null | T }>;

export async function fetchDetailData(
  id: ProjectType['id']
): ResponseType<ProjectType> {
  return await fetch(`${baseUrl}/${id}`, {
    // cache: 'force-cache',
  }).then((res) => res.json());
}

export async function fetchListData(): ResponseType<ProjectType[]> {
  return await fetch(baseUrl, {
    // cache: 'force-cache',
  }).then((res) => res.json());
}
