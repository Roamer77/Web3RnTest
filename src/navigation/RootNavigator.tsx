import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CoinPairScreen} from '../screens/CoinPairScreen/CoinPairScreen';
import {AppScreens} from './AppScreens';
import {SelectCurrencyScreen} from '../screens/SelectCurrencyScreen/SelectCurrencyScreen';
import {CreateExchangeScreen} from '../screens/CreateExchangeScreen/CreateExchangeScreen';
import {ExchangeResultScreen} from '../screens/ExchangeResultScreen/ExchangeResultScreen';

export const RootNavigator = () => {
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        component={CoinPairScreen}
        name={AppScreens.CoinPairScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        component={SelectCurrencyScreen}
        name={AppScreens.SelectCurrencyScreen}
        options={{
          headerTitle: 'Select Currency',
          headerBackTitle: 'Go back',
        }}
      />
      <RootStack.Screen
        component={CreateExchangeScreen}
        name={AppScreens.CreateExchangeScreen}
        options={{
          headerTitle: 'Exchange details',
          headerBackTitle: 'Go back',
        }}
      />
      <RootStack.Screen
        component={ExchangeResultScreen}
        name={AppScreens.ExchangeResultScreen}
        options={{
          headerTitle: 'Exchange results',
          headerBackTitle: 'Go back',
        }}
      />
    </RootStack.Navigator>
  );
};
