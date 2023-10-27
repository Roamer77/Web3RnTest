import {Pressable, Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {Icons} from '../../../../assets/icons/Icons';
import {styles} from './ListItem.styles';

interface Props {
  currencyName: string;
  currencySymbol: string;
  imageSrc: string;
  onPress: () => void;
  isSelected?: boolean;
}
export const ListItem = ({
  currencyName,
  currencySymbol,
  imageSrc,
  onPress,
  isSelected = false,
}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, isSelected && styles.selected]}>
        <View style={styles.imageWithSymbol}>
          <SvgUri
            uri={imageSrc}
            style={styles.image}
            onError={() => {}}
            fallback={<Icons.Coin />}
          />
          <Text style={styles.currencySymbol}>
            {String(currencySymbol).toUpperCase()}
          </Text>
        </View>
        <Text style={styles.name}>{currencyName}</Text>
      </View>
    </Pressable>
  );
};
