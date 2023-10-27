import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Keyboard, View} from 'react-native';
import {Currency} from '../../api/useGetAllCurrenciesQuery/GetAllCurrenciesQuery.types';
import {useGetEstimatedCurrencyAmount} from '../../api/useGetEstimatedCurrencyAmount/useGetEstimatedCurrencyAmount';
import {AppScreens} from '../../navigation/AppScreens';
import {
  CoinPairScreenRouteProps,
  SelectCurrencyScreenNavigationProps,
} from '../../navigation/RootNavigation.types';
import {InputFieldWithCurrencyLabel} from '../InputFieldWithCurrencyLabel/InputFieldWithCurrencyLabel';
import {styles} from './Exchanger.styles';

interface Props {
  inputAmount: string;
  sendCurrency?: Currency;
  getCurrency?: Currency;
  setInputAmount: (data: string) => void;
  setSendCurrency: (data: Currency) => void;
  setGetCurrency: (data: Currency) => void;
  goBackScreen?: AppScreens;
}

export const Exchanger = ({
  inputAmount,
  sendCurrency,
  getCurrency,
  setInputAmount,
  setSendCurrency,
  setGetCurrency,
  goBackScreen,
}: Props) => {
  const {params} = useRoute<CoinPairScreenRouteProps>();
  const {navigate} = useNavigation<SelectCurrencyScreenNavigationProps>();

  const [convertedAmount, setConvertedAmount] = useState('');

  const paramsForRequest = {
    from: sendCurrency?.symbol ?? '',
    to: getCurrency?.symbol ?? '',
    amount: inputAmount,
  };

  const {
    data: estimatedAmount,
    isFetched: isEstimatedAmountFetched,
    isError: isEstimatedAmountError,
    error: estimatedAmountError,
  } = useGetEstimatedCurrencyAmount(paramsForRequest, {
    enabled: !!paramsForRequest,
  });

  const handleSendCurrencyPress = () => {
    Keyboard.dismiss();
    navigate(AppScreens.SelectCurrencyScreen, {
      currencyType: 'send',
      currentSelectedCurrencySymbol: getCurrency?.symbol,
      goBackToScreen: goBackScreen,
    });
  };

  const handleGetCurrencyPress = () =>
    navigate(AppScreens.SelectCurrencyScreen, {
      currencyType: 'get',
      currentSelectedCurrencySymbol: sendCurrency?.symbol,
      goBackToScreen: goBackScreen,
    });

  useEffect(() => {
    if (isEstimatedAmountFetched && estimatedAmount) {
      setConvertedAmount(`≈ ${Number(estimatedAmount)}`);
    } else {
      setConvertedAmount('');
    }
  }, [estimatedAmount, isEstimatedAmountFetched]);

  useEffect(() => {
    if (params?.selectedCurrency) {
      if (params?.from === 'get') {
        setGetCurrency(params?.selectedCurrency);
      }
      if (params?.from === 'send') {
        console.log(params?.selectedCurrency.name);
        setSendCurrency(params?.selectedCurrency);
      }
    }
  }, [params, setGetCurrency, setSendCurrency]);

  return (
    <View style={styles.inputFieldWrapper}>
      <InputFieldWithCurrencyLabel
        imageSrc={sendCurrency?.image ?? ''}
        currencyLabel={sendCurrency?.symbol ?? ''}
        value={inputAmount}
        onChangeValue={setInputAmount}
        labelText={'You send'}
        isError={isEstimatedAmountError}
        errorMessage={estimatedAmountError?.message}
        onPress={handleSendCurrencyPress}
      />

      <InputFieldWithCurrencyLabel
        imageSrc={getCurrency?.image ?? ''}
        currencyLabel={getCurrency?.symbol ?? ''}
        value={convertedAmount}
        onChangeValue={setConvertedAmount}
        labelText={'You get'}
        editable={false}
        isLoading={!isEstimatedAmountFetched}
        onPress={handleGetCurrencyPress}
      />
    </View>
  );
};
