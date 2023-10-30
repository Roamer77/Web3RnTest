import {Text, View} from 'react-native';
import {CurrencyLabel} from '../CurrencyLabel/CurrencyLabel';
import {InputField} from '../InputField/InputField';
import {styles} from './InputFieldWithCurrencyLabel.styles';
import {memo} from 'react';

interface Props extends InputField {
  imageSrc: string;
  currencyLabel: string;
  onPress: () => void;
  isError?: boolean;
  errorMessage?: string;
}

export const InputFieldWithCurrencyLabel = memo(
  ({
    value,
    onChangeValue,
    labelText,
    editable,
    imageSrc,
    currencyLabel,
    onPress,
    isError,
    errorMessage,
    isLoading,
  }: Props) => {
    return (
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <InputField
            value={value}
            onChangeValue={onChangeValue}
            labelText={labelText}
            editable={editable}
            isLoading={isLoading}
          />
          {isError && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{errorMessage}</Text>
            </View>
          )}
        </View>
        <CurrencyLabel
          style={styles.label}
          imageSrc={imageSrc}
          label={currencyLabel}
          onPress={onPress}
        />
      </View>
    );
  },
);
