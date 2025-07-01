import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import globalStyles from '../../styles/globalStyles';

type Props = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
};

export default function Button({ title, onPress, style = undefined, styleText= undefined }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={[globalStyles.button, style]}>
      <Text style={[globalStyles.buttonText, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
}