import {TextInput, View} from 'react-native';
import {styles} from './SearchHeader.style';
import {Icons} from '../../../../assets/icons/Icons';

interface Props {
  searchInput: string;
  onChangeText: (input: string) => void;
}
export const SearchHeader = ({searchInput, onChangeText}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={searchInput}
        style={styles.input}
        maxLength={20}
        placeholder="Search currency..."
      />
      <View style={styles.icon}>
        <Icons.Search />
      </View>
    </View>
  );
};
