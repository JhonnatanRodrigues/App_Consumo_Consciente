import { StyleProp, Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import globalStyles from "../../styles/globalStyles";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import cores from "src/themes/cores";
import { inputPassowordStyles } from "src/styles/inputs/inputPassowordStyles";

type Type = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    styleContainner?: StyleProp<ViewStyle>;
    styleLabel?: StyleProp<TextStyle>;
    styleInput?: StyleProp<TextStyle>;
    validarPassoword?: boolean;
}


function InputPassoword({
    label,
    value,
    onChange,
    styleContainner = undefined,
    styleLabel = undefined,
    styleInput = undefined,
    validarPassoword = false
}: Type) {
    const [mostrar, setMostrar] = useState<boolean>(false);

    const temCaracterSpecial = (value.includes("@") || value.includes("#") || value.includes("$")) ? cores.green : cores.red;
    const temNumero = /\d/.test(value) ? cores.green : cores.red; // verifica se há dígitos
    const temLetraMaiuscula = /[A-Z]/.test(value) ? cores.green : cores.red; // verifica se há letras maiúsculas
    const temLetraMinuscula = /[a-z]/.test(value) ? cores.green : cores.red; // verifica se há letras minúsculas

    return (
        <View style={[styleContainner]}>
            <Text style={[globalStyles.label, styleLabel]}>{label}</Text>
            <TextInput
                style={[globalStyles.input, styleInput]}
                value={value}
                onChangeText={onChange}
                secureTextEntry={!mostrar}
                placeholderTextColor={cores.input_placehoder}
            />
            <TouchableOpacity onPress={() => setMostrar(!mostrar)} style={inputPassowordStyles.iconEye}>
                <Ionicons name={mostrar ? "eye" : "eye-off"} 
                    size={20} 
                    color={cores.icones} 
                    />
            </TouchableOpacity>
            {validarPassoword == true ?
                <View>
                    <Text style={[globalStyles.mini_label, {color: temNumero}]}>Deve ter número.</Text>
                    <Text style={[globalStyles.mini_label, {color: temCaracterSpecial}]}>Deve ter um caractere especial: @#$.</Text>
                    <Text style={[globalStyles.mini_label, {color: temLetraMaiuscula}]}>Deve ter uma letra maiúscula.</Text>
                    <Text style={[globalStyles.mini_label, {color: temLetraMinuscula}]}>Deve ter uma letra minúscula.</Text>
                </View>
                : undefined
            }
        </View>
    )
}

export default InputPassoword;