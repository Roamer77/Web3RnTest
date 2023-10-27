import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  keyboardAvoid: {
    flex: 1,
  },
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  title: {fontSize: 25, fontWeight: '400', alignSelf: 'center'},

  button: {width: 200, marginTop: 10, alignSelf: 'center'},
  helpButton: {
    width: 200,
    height: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
  },
  inputWallerAddressTitle: {
    paddingBottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 20,
  },
});
