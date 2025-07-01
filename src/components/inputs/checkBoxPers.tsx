import React, { useEffect, useRef } from 'react';
import { Pressable, StyleProp, Text, ViewStyle, Animated, Easing } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import cores from 'src/themes/cores';
import { checkBoxPersStyles } from 'src/styles/inputs/checkBoxPersStyles';

function usePrevious<T>(value: T) {
  const ref = React.useRef<T>(undefined);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

type Props = {
  check: boolean;
  setCheck: (value: boolean) => void;
  texto?: string;
  style?: StyleProp<ViewStyle>;
}

const CheckBoxPers = ({ check, setCheck, texto, style }: Props) => {
  const scale = useRef(new Animated.Value(1)).current;
  const previousCheck = usePrevious(check);

  useEffect(() => {
    if (previousCheck !== undefined && previousCheck !== check) {
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.15,
          duration: 120,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 120,
          useNativeDriver: true,
          easing: Easing.in(Easing.ease),
        }),
      ]).start();
    }
  }, [check]);

  return (
    <Pressable style={[checkBoxPersStyles.container, style]} onPress={() => setCheck(!check)}>
      <Animated.View style={{ transform: [{ scale }] }}>
        {check
          ? <AntDesign name="checkcircle" size={24} color={cores.primary} />
          : <Entypo name="circle" size={24} color={cores.primary} />
        }
      </Animated.View>
      {texto && (
        <Text style={[globalStyles.label]}>
          {texto}
        </Text>
      )}
    </Pressable>
  );
};

export default CheckBoxPers;