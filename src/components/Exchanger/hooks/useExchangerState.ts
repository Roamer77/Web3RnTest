import {useState} from 'react';
import {DEFAULT_AMOUNT} from '../../../screens/CoinPairScreen/CoinPairScreen.constants';
import {Currency} from '../../../api/useGetAllCurrenciesQuery/GetAllCurrenciesQuery.types';

export const useExchangerState = () => {
  const [inputAmount, setInputAmount] = useState(DEFAULT_AMOUNT);

  const [sendCurrency, setSendCurrency] = useState<Currency>();
  const [getCurrency, setGetCurrency] = useState<Currency>();

  return {
    inputAmount,
    sendCurrency,
    getCurrency,
    setInputAmount,
    setSendCurrency,
    setGetCurrency,
  };
};
