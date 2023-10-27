import {useQuery} from '@tanstack/react-query';

import {API_KEY, BASE_URL} from '../constants';

interface Params {
  fixed?: boolean;
  currencySymbol: string;
}

interface Options {
  enabled: boolean;
}

export const useGetPairsForCurrency = (
  {fixed = true, currencySymbol}: Params,
  options?: Options,
) => {
  const query = useQuery({
    queryKey: ['getPairsForCurrency', currencySymbol],
    queryFn: async () => {
      const response = await fetch(
        `${BASE_URL}/get_pairs?api_key=${API_KEY}&fixed=${fixed}&symbol=${currencySymbol}`,
      );

      return response.json() as Promise<Array<string>>;
    },
    ...options,
  });

  return query;
};
