import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
  },
  label: {width: 110, marginLeft: 10, height: 40},
  contentWrapper: {flexDirection: 'column', flex: 1},
  errorContainer: {
    paddingVertical: 2,
    paddingLeft: 12,
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: 'red',
  },

  errorText: {
    color: 'red',
    fontSize: 12,
  },
});
