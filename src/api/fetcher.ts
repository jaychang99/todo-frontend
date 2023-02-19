import { clientAxios } from 'api/commonAxios';

export async function fetcher(url: string, query?: { [key: string]: number }) {
  return (
    await clientAxios.get(url, {
      params: query,
    })
  ).data;
}

export async function authFetcher(
  url: string,
  query?: { [key: string]: number },
) {
  const config = {
    params: query,
    headers: {},
  };
  return (await clientAxios.get(url, config)).data;
}
