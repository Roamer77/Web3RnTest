import {Currency} from '../useGetAllCurrenciesQuery/GetAllCurrenciesQuery.types';

export interface CreateExchangeMutationResponse {
  address_from: 'string';
  address_to: 'string';
  status: 'string';
  amount_from: 'string';
  expected_amount: 'string';
  amount_to: 'string';
  currency_from: 'string';
  currency_to: 'string';
  currencies: {
    [key: string]: Currency;
  };
}
