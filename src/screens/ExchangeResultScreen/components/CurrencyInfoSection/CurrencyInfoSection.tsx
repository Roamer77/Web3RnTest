import {Text, View} from 'react-native';
import {styles} from './CurrencyInfoSection.styles';
import {SvgUri} from 'react-native-svg';

interface Props {
  titles: string[];
  from: {value: string; imageScr: string};
  to: {value: string; imageScr: string};
}
export const CurrencyInfoSection = ({from, to, titles}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{titles[0]}</Text>
        <View style={styles.valueWrapper}>
          <Text style={styles.value}>{from.value}</Text>
          <SvgUri uri={from.imageScr} />
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>{titles[1]}</Text>
        <View style={styles.valueWrapper}>
          <Text style={styles.value}>{to.value}</Text>
          <SvgUri uri={to.imageScr} />
        </View>
      </View>
    </View>
  );
};
