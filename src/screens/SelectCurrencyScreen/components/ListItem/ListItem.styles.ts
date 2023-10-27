import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
    flex: 0.5,
  },
  imageWithSymbol: {
    flexDirection: 'row',
    flex: 0.5,
  },
  currencySymbol: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  selected: {
    borderWidth: 3,
    borderRadius: 6,
    borderColor: '#e4e695',
  },
});
