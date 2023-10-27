import {forwardRef, useCallback} from 'react';
import {ActivityIndicator, Text, TextInput, View} from 'react-native';
import {styles} from './InputField.styles';
import {restrictInput} from './utils/restrictInput';

export interface InputField {
  value: string;
  onChangeValue: (data: string) => void;
  editable?: boolean;
  labelText: string;
  isLoading?: boolean;
}

export const InputField = forwardRef<TextInput, InputField>(
  (
    {
      value,
      onChangeValue,
      labelText,
      editable = true,
      isLoading = false,
    }: InputField,
    ref,
  ) => {
    const handleTextChange = useCallback(
      (text: string) => {
        if (restrictInput(text)) {
          onChangeValue(text);
        }
      },
      [onChangeValue],
    );

    return (
      <View
        style={[styles.contentWrapper, !editable && styles.disabledInputField]}>
        <Text style={styles.label}>{labelText}</Text>

        {isLoading ? (
          <View style={styles.loadingIndicatorWrapper}>
            <ActivityIndicator style={styles.loadingIndicator} color={'#000'} />
          </View>
        ) : (
          <TextInput
            ref={ref}
            editable={editable}
            style={styles.inputField}
            onChangeText={handleTextChange}
            value={value}
            placeholder="0"
            inputMode="decimal"
            multiline={false}
            maxLength={10}
          />
        )}
      </View>
    );
  },
);
