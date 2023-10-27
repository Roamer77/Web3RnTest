import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contentWrapper: {
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  label: {
    flex: 0.4,
    paddingLeft: 10,
  },
  inputField: {
    flex: 0.8,
    textAlign: 'right',
    paddingRight: 10,
    fontSize: 17,
    fontWeight: '500',
  },
  disabledInputField: {
    backgroundColor: '#bdbcb9',
  },
  loadingIndicatorWrapper: {flex: 0.8, alignItems: 'flex-end'},
  loadingIndicator: {paddingRight: 20},
});
