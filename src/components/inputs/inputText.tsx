import React from 'react';
import { TextInput, Text, View, StyleProp, ViewStyle, TextStyle } from 'react-native';
import globalStyles from 'src/styles/globalStyles';

type Props = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
  styleInput?: StyleProp<TextStyle>
  multiline?: boolean;
  textAlign?: "left" | "right" | "center";
  textAlignVertical?: "auto" | "center" | "top" | "bottom" ;
  numberOfLines?: number;
};

export default function InputText({ 
  label, 
  value, 
  onChangeText, 
  secureTextEntry = false,
  style = undefined,
  styleInput = undefined,
  multiline = false,
  textAlign = 'left',
  numberOfLines = 1,
  textAlignVertical = 'auto'
  }: Props
) {
  return (
    <View style={[style]}>
      {label && <Text style={globalStyles.label}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={[globalStyles.input, styleInput, {textAlignVertical: textAlignVertical}]}
        multiline={multiline}
        textAlign={textAlign}
        numberOfLines={numberOfLines}
      />
    </View>
  );
}