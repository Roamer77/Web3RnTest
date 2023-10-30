import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useGetAllCurrenciesQuery} from '../../api/useGetAllCurrenciesQuery/useGetAllCurrenciesQuery';
import {Button} from '../../components/Button/Button';
import {Exchanger} from '../../components/Exchanger/Exchanger';
import {useExchangerState} from '../../components/Exchanger/hooks/useExchangerState';
import {AppScreens} from '../../navigation/AppScreens';
import {
  CoinPairScreenRouteProps,
  CreateExchangeScreenNavigationProps,
} from '../../navigation/RootNavigation.types';
import {
  DEFAULT_GET_CURRENCY,
  DEFAULT_SEND_CURRENCY,
} from './CoinPairScreen.constants';
import {styles} from './CoinPairScreen.styles';

export const CoinPairScreen = () => {
  const {params} = useRoute<CoinPairScreenRouteProps>();
  const {navigate} = useNavigation<CreateExchangeScreenNavigationProps>();

  const {data: currencies, isLoading} = useGetAllCurrenciesQuery();

  const exchangerState = useExchangerState();

  const {
    inputAmount,
    sendCurrency,
    getCurrency,
    setSendCurrency,
    setGetCurrency,
  } = exchangerState;

  const handleNextButtonPress = () => {
    navigate(AppScreens.CreateExchangeScreen, {
      initialState: {
        sendCurrency,
        getCurrency,
        amount: inputAmount,
      },
    });
  };

  useEffect(() => {
    if (!isLoading && currencies) {
      setSendCurrency(
        currencies.find(item => item.symbol === DEFAULT_SEND_CURRENCY),
      );
      setGetCurrency(
        currencies.find(item => item.symbol === DEFAULT_GET_CURRENCY),
      );
    }
  }, [currencies, isLoading, setGetCurrency, setSendCurrency]);

  useEffect(() => {
    if (params?.selectedCurrency) {
      if (params?.from === 'get') {
        setGetCurrency(params?.selectedCurrency);
      }
      if (params?.from === 'send') {
        setSendCurrency(params?.selectedCurrency);
      }
    }
  }, [params?.from, params?.selectedCurrency, setGetCurrency, setSendCurrency]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoid}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <Text style={styles.title}>Crypto Exchanger</Text>
            <Exchanger
              {...exchangerState}
              goBackScreen={AppScreens.CoinPairScreen}
            />
            <Button
              title="Next"
              style={styles.button}
              onPress={handleNextButtonPress}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
