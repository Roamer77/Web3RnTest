import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Currency} from '../api/useGetAllCurrenciesQuery/GetAllCurrenciesQuery.types';
import {AppScreens} from './AppScreens';
import {CreateExchangeMutationResponse} from '../api/useCreateExchangeMutation/CreateExchangeMutation.types';

interface CreateExchangeScreenProps {
  initialState: {
    sendCurrency?: Currency;
    getCurrency?: Currency;
    amount: string;
  };
}

interface CoinPairScreenProps {
  from?: string;
  selectedCurrency?: Currency;
}

interface SelectCurrencyScreenProps {
  currencyType: 'send' | 'get';
  currentSelectedCurrencySymbol?: string;
  goBackToScreen?: AppScreens;
  selectedCurrency?: Currency;
}

interface ExchangeResultScreenProps {
  exchangeResultInfo: CreateExchangeMutationResponse;
  currencies: {
    sendCurrency: Currency;
    getCurrency: Currency;
  };
}

export type RootStackParamList = {
  CreateExchangeScreen: CreateExchangeScreenProps;
  CoinPairScreen: CoinPairScreenProps;
  SelectCurrencyScreen: SelectCurrencyScreenProps;
  ExchangeResultScreen: ExchangeResultScreenProps;
};

export type CreateExchangeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'CreateExchangeScreen'
>;

export type CoinPairScreenPropsNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'CoinPairScreen'
>;

export type SelectCurrencyScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'SelectCurrencyScreen'
>;

export type ExchangeResultScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'SelectCurrencyScreen'
>;

export type CreateExchangeScreenRouteProps = RouteProp<
  RootStackParamList,
  'CreateExchangeScreen'
>;

export type ExchangeResultScreenRouteProps = RouteProp<
  RootStackParamList,
  'ExchangeResultScreen'
>;

export type SelectCurrencyScreenRouteProps = RouteProp<
  RootStackParamList,
  'SelectCurrencyScreen'
>;

export type CoinPairScreenRouteProps = RouteProp<
  RootStackParamList,
  'CoinPairScreen'
>;
