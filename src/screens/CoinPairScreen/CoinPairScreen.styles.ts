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
  title: {fontSize: 30, fontWeight: '400', alignSelf: 'center'},
  inputFieldWrapper: {
    width: '100%',
    justifyContent: 'space-between',
    height: 150,
    marginTop: 20,
  },
  button: {width: 100, marginTop: 20},
});
