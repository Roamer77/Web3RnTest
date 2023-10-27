import {useQuery} from '@tanstack/react-query';
import {API_KEY, BASE_URL} from '../constants';
import {Currency} from './GetAllCurrenciesQuery.types';

export const useGetAllCurrenciesQuery = () => {
  const query = useQuery({
    queryKey: ['getAllCurrencies'],
    queryFn: async () => {
      const response = await fetch(
        `${BASE_URL}/get_all_currencies?api_key=${API_KEY}`,
      );

      return response.json() as Promise<Array<Currency>>;
    },
  });

  return query;
};
