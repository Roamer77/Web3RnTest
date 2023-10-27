import {useQuery} from '@tanstack/react-query';
import {API_KEY, BASE_URL} from '../constants';
import {createErrorMessage} from './utils/createErrorMessage';

interface Params {
  fixed?: boolean;
  from: string;
  to: string;
  amount: string;
}

interface Options {
  enabled: boolean;
}

export const useGetEstimatedCurrencyAmount = (
  {fixed = true, from, to, amount}: Params,
  options?: Options,
) => {
  const query = useQuery({
    queryKey: ['getEstimatedCurrencyAmount', [from, to, amount]],
    queryFn: async () => {
      const response = await fetch(
        `${BASE_URL}/get_estimated?api_key=${API_KEY}&fixed=${fixed}&currency_from=${from}&currency_to=${to}&amount=${amount}`,
      );

      if (response.status === 422) {
        const error = await response.json();
        const errorMessage = createErrorMessage(
          422,
          error.description,
          Number(amount),
        );
        return Promise.reject(new Error(errorMessage));
      }
      if (response.status >= 400) {
        const error = await response.json();
        return Promise.reject(new Error(error.description));
      }

      return response.json() as Promise<string>;
    },
    staleTime: 0,
    ...options,
  });

  return query;
};
