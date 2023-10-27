import {useMutation} from '@tanstack/react-query';
import {API_KEY, BASE_URL} from '../constants';
import {CreateExchangeMutationResponse} from './CreateExchangeMutation.types';

interface Params {
  currencyFrom: string;
  currencyTo: string;
  amount: string;
  addressTo: string;
  refundAddress: string;
}
interface Options {
  onSuccess?: (
    data: CreateExchangeMutationResponse,
    isSuccess: boolean,
  ) => void;
}

export const useCreateExchangeMutation = ({onSuccess}: Options) => {
  const mutation = useMutation({
    mutationFn: ({
      currencyFrom,
      currencyTo,
      amount,
      addressTo,
      refundAddress,
    }: Params) => {
      return fetch(`${BASE_URL}/create_exchange?api_key=${API_KEY}`, {
        method: 'POST',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fixed: true,
          currency_from: currencyFrom,
          currency_to: currencyTo,
          amount: amount,
          address_to: addressTo,
          extra_id_to: '',
          user_refund_address: refundAddress,
          user_refund_extra_id: '',
        }),
      });
    },
    onSuccess: async data => {
      const response = (await data.json()) as CreateExchangeMutationResponse;

      onSuccess?.(response, data.ok);
    },
  });

  return mutation;
};
