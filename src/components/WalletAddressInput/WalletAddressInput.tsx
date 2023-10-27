import {forwardRef} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './WalletAddressInput.styles';

interface Props {
  value: string;
  onChangeValue: (data: string) => void;
  placeholder?: string;
}
export const WalletAddressInput = forwardRef<TextInput, Props>(
  ({value, onChangeValue, placeholder}: Props, ref) => {
    return (
      <View style={[styles.contentWrapper]}>
        <TextInput
          ref={ref}
          style={styles.inputField}
          onChangeText={onChangeValue}
          value={value}
          placeholder={placeholder}
          multiline={false}
        />
      </View>
    );
  },
);
