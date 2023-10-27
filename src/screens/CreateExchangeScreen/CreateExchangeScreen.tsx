import {useNavigation, useRoute} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useCreateExchangeMutation} from '../../api/useCreateExchangeMutation/useCreateExchangeMutation';
import {Currency} from '../../api/useGetAllCurrenciesQuery/GetAllCurrenciesQuery.types';
import {Button} from '../../components/Button/Button';
import {Exchanger} from '../../components/Exchanger/Exchanger';
import {WalletAddressInput} from '../../components/WalletAddressInput/WalletAddressInput';
import {AppScreens} from '../../navigation/AppScreens';
import {styles} from './CreateExchangeScreen.styles';
import {
  CreateExchangeScreenRouteProps,
  ExchangeResultScreenNavigationProps,
} from '../../navigation/RootNavigation.types';

export const CreateExchangeScreen = () => {
  const {params} = useRoute<CreateExchangeScreenRouteProps>();
  const {navigate} = useNavigation<ExchangeResultScreenNavigationProps>();

  const [inputAmount, setInputAmount] = useState('');

  const [sendCurrency, setSendCurrency] = useState<Currency>();
  const [getCurrency, setGetCurrency] = useState<Currency>();
  const [userWalletAddress, setUserWalletAddress] = useState('');
  const [userRefundWalletAddress, setRefundWalletAddress] = useState('');

  const [isLoaderShow, setIsLoaderShow] = useState(false);

  const {mutate} = useCreateExchangeMutation({
    onSuccess: (data, isSuccess) => {
      setIsLoaderShow(false);

      if (isSuccess && sendCurrency && getCurrency) {
        navigate(AppScreens.ExchangeResultScreen, {
          exchangeResultInfo: data,
          currencies: {
            sendCurrency,
            getCurrency,
          },
        });
      }
    },
  });

  const handleCreateExchangePress = useCallback(() => {
    setIsLoaderShow(true);
    mutate({
      currencyFrom: sendCurrency?.symbol ?? '',
      currencyTo: getCurrency?.symbol ?? '',
      amount: inputAmount,
      addressTo: userWalletAddress,
      refundAddress: userRefundWalletAddress,
    });
  }, [
    getCurrency?.symbol,
    inputAmount,
    mutate,
    sendCurrency?.symbol,
    userRefundWalletAddress,
    userWalletAddress,
  ]);

  const handleHelpPress = useCallback(() => {
    setUserWalletAddress('0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5');
    setRefundWalletAddress('0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5');
  }, []);

  useEffect(() => {
    if (params?.initialState) {
      const {
        amount,
        getCurrency: initialGetCurrency,
        sendCurrency: initialSendCurrency,
      } = params?.initialState;
      setInputAmount(amount);
      setSendCurrency(initialGetCurrency);
      setGetCurrency(initialSendCurrency);
    }
  }, [params]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoid}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text style={styles.title}>Add exchange details</Text>
            <Exchanger
              inputAmount={inputAmount}
              sendCurrency={sendCurrency}
              getCurrency={getCurrency}
              setInputAmount={setInputAmount}
              setSendCurrency={setSendCurrency}
              setGetCurrency={setGetCurrency}
              goBackScreen={AppScreens.CreateExchangeScreen}
            />
            <View>
              <Text style={styles.inputWallerAddressTitle}>
                Enter the wallets addreses
              </Text>
              <WalletAddressInput
                value={userWalletAddress}
                onChangeValue={setUserWalletAddress}
                placeholder={`The recipient's ${getCurrency?.name} address`}
              />
              <WalletAddressInput
                value={userRefundWalletAddress}
                onChangeValue={setRefundWalletAddress}
                placeholder={`The refund ${sendCurrency?.name} address`}
              />
            </View>

            <Button
              title="Create an exchange"
              style={styles.button}
              onPress={handleCreateExchangePress}
              disabled={isLoaderShow}
            />
            <Button
              title="Set hardcoded address"
              style={styles.helpButton}
              onPress={handleHelpPress}
            />
            {isLoaderShow && (
              <ActivityIndicator color={'#000'} style={styles.loader} />
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
