import {useNavigation, useRoute} from '@react-navigation/native';
import {useCallback} from 'react';
import {Text, View} from 'react-native';
import {Icons} from '../../assets/icons/Icons';
import {Button} from '../../components/Button/Button';
import {AppScreens} from '../../navigation/AppScreens';
import {styles} from './ExchangeResultScreen.styles';
import {CurrencyInfoSection} from './components/CurrencyInfoSection/CurrencyInfoSection';
import {
  CoinPairScreenPropsNavigationProps,
  ExchangeResultScreenRouteProps,
} from '../../navigation/RootNavigation.types';

export const ExchangeResultScreen = () => {
  const {params} = useRoute<ExchangeResultScreenRouteProps>();
  const {navigate} = useNavigation<CoinPairScreenPropsNavigationProps>();

  const {status, address_to, amount_to, amount_from} =
    params?.exchangeResultInfo;

  const {sendCurrency, getCurrency} = params?.currencies;

  const handleButtonPress = useCallback(() => {
    navigate(AppScreens.CoinPairScreen, {});
  }, [navigate]);

  return (
    <View style={styles.container}>
      <Icons.Complete width={150} height={150} style={styles.icon} />
      <View style={styles.content}>
        <View style={styles.statusWrapper}>
          <Text style={styles.title}>
            Status: <Text style={styles.value}>{status}</Text>
          </Text>
        </View>

        <CurrencyInfoSection
          titles={['From currency:', 'To currency:']}
          to={{value: getCurrency.name, imageScr: getCurrency.image}}
          from={{value: sendCurrency.name, imageScr: sendCurrency.image}}
        />
        <CurrencyInfoSection
          titles={['Send amount:', 'Get amount:']}
          to={{value: amount_to, imageScr: getCurrency.image}}
          from={{value: amount_from, imageScr: sendCurrency.image}}
        />

        <View style={styles.addressWrapper}>
          <Text style={styles.address}>Address:</Text>
          <Text> {address_to}</Text>
        </View>
      </View>
      <Button title="Go back, Exchange more" onPress={handleButtonPress} />
    </View>
  );
};
