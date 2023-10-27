import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 16,
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    color: '#8169e0',
    paddingRight: 10,
  },
  valueWrapper: {
    flexDirection: 'row',
  },
});
