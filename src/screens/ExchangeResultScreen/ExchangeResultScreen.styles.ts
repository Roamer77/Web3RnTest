import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  content: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  icon: {
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'green',
  },

  statusWrapper: {
    borderBottomWidth: 1,
  },
  addressWrapper: {
    width: '100%',
  },
  address: {
    fontSize: 17,
    paddingLeft: 16,
    paddingBottom: 4,
  },
});
