import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {styles} from './CurrencyLabel.styles';

interface Props {
  imageSrc: string;
  label: string;
  style?: ViewStyle;
  onPress?: () => void;
}
export const CurrencyLabel = ({imageSrc, label, style, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.container, style]}>
        <SvgUri uri={imageSrc} style={styles.image} />
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
