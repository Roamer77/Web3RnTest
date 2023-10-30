import {memo, useState} from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {styles} from './CurrencyLabel.styles';

interface Props {
  imageSrc: string;
  label: string;
  style?: ViewStyle;
  onPress?: () => void;
}
export const CurrencyLabel = memo(
  ({imageSrc, label, style, onPress}: Props) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleIconLoad = () => {
      setIsLoading(false);
    };

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View style={[styles.container, style]}>
          {isLoading && <ActivityIndicator color={'#000'} />}
          <SvgUri uri={imageSrc} style={styles.image} onLoad={handleIconLoad} />
          <Text style={styles.text}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  },
);
