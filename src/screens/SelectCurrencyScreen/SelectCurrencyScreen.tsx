import {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Currency} from '../../api/useGetAllCurrenciesQuery/GetAllCurrenciesQuery.types';
import {useGetAllCurrenciesQuery} from '../../api/useGetAllCurrenciesQuery/useGetAllCurrenciesQuery';
import {styles} from './SelectCurrencyScreen.styles';
import {ListItem} from './components/ListItem/ListItem';
import {AMOUNT_ITEMS_ON_PAGE} from './SelectCurrencyScreen.constants';
import {SearchHeader} from './components/SearchHeader/SearchHeader';
import {Button} from '../../components/Button/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppScreens} from '../../navigation/AppScreens';
import {useGetPairsForCurrency} from '../../api/useGetPairsForCurrency/useGetPairsForCurrency';
import {
  CoinPairScreenPropsNavigationProps,
  CreateExchangeScreenNavigationProps,
  SelectCurrencyScreenRouteProps,
} from '../../navigation/RootNavigation.types';
import {OverlayLoader} from '../../components/OverlayLoader/OverlayLoader';

export const SelectCurrencyScreen = () => {
  const {navigate} = useNavigation<
    CoinPairScreenPropsNavigationProps | CreateExchangeScreenNavigationProps
  >();
  const {params} = useRoute<SelectCurrencyScreenRouteProps>();

  const {data: allCurrencies, isLoading} = useGetAllCurrenciesQuery();
  const {data: availableCurrency, isLoading: isAvailableCurrencyLoading} =
    useGetPairsForCurrency({
      currencySymbol: params?.currentSelectedCurrencySymbol ?? '',
    });

  const [dataFroRender, setDataForRender] = useState<Currency[]>([]);
  const [availableCurrencyList, setAvailableCurrencyList] = useState<
    Currency[]
  >([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>();

  const [searchCurrency, setSearchCurrency] = useState('');

  const isDataReady =
    !isLoading &&
    !isAvailableCurrencyLoading &&
    allCurrencies &&
    availableCurrency;

  useEffect(() => {
    if (isDataReady) {
      const available = allCurrencies.filter(item =>
        availableCurrency.includes(item.symbol),
      );
      setAvailableCurrencyList(available);
      setDataForRender(available.slice(0, AMOUNT_ITEMS_ON_PAGE));
    }
  }, [allCurrencies, availableCurrency, isDataReady]);

  useEffect(() => {
    if (currentPage > 1 && searchCurrency.length === 0) {
      setDataForRender(prev => [
        ...prev,
        ...availableCurrencyList?.slice(
          prev?.length,
          AMOUNT_ITEMS_ON_PAGE * currentPage,
        ),
      ]);
    }
  }, [currentPage, searchCurrency.length, availableCurrencyList]);

  useEffect(() => {
    if (searchCurrency && availableCurrencyList) {
      const matchedItems = availableCurrencyList?.filter(
        item =>
          item.name.toUpperCase().includes(searchCurrency.toUpperCase()) ||
          item.symbol.toUpperCase().includes(searchCurrency.toUpperCase()),
      );

      setDataForRender(matchedItems);
    }
  }, [availableCurrencyList, searchCurrency, selectedCurrency]);

  const handleEndReached = useCallback(() => {
    setCurrentPage(prev => prev + 1);
  }, []);

  const handleSelectButtonPress = useCallback(() => {
    // @ts-ignore
    navigate(params?.goBackToScreen ?? AppScreens.CoinPairScreen, {
      from: params.currencyType,
      selectedCurrency,
    });
  }, [navigate, params, selectedCurrency]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoid}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.contentWrapper}>
            <SearchHeader
              onChangeText={setSearchCurrency}
              searchInput={searchCurrency}
            />

            <FlatList
              contentContainerStyle={styles.content}
              data={dataFroRender}
              renderItem={({item}) => (
                <ListItem
                  currencyName={item.name}
                  currencySymbol={item.symbol}
                  imageSrc={item.image}
                  isSelected={item.symbol === selectedCurrency?.symbol}
                  onPress={() => {
                    setSelectedCurrency(item);
                  }}
                />
              )}
              keyExtractor={item => item.name + item.symbol}
              onEndReached={handleEndReached}
            />
            <View style={styles.selectButton}>
              <Button
                title="Select"
                onPress={handleSelectButtonPress}
                disabled={!selectedCurrency}
              />
            </View>
            <OverlayLoader isVisible={!isDataReady} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
