import {ActivityIndicator, View} from 'react-native';
import {styles} from './OverlayLoader.styles';

interface Props {
  isVisible: boolean;
}
export const OverlayLoader = ({isVisible}: Props) => {
  return isVisible ? (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'#000'} />
    </View>
  ) : null;
};
