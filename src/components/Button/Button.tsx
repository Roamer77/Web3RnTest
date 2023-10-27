import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';

import {styles} from './Button.styles';

interface Props {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}

export const Button = ({title, style, onPress, disabled = false}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.7}>
      <View style={[styles.content, disabled && styles.disabled, style]}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
