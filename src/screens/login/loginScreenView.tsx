import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Button from "src/components/buttons/button";
import CheckBoxPers from "src/components/inputs/checkBoxPers";
import InputPassoword from "src/components/inputs/inputPassoword";
import InputText from "src/components/inputs/inputText";
import globalStyles from "src/styles/globalStyles";
import loginScreenStyles from "src/styles/screens/loginScreenStyles";
import cores from "src/themes/cores";

type props = {
    onChange: (fieldName: 'user' | 'passowrd' | 'lembrarDados', value: any) => void;
    user: string;
    passowrd: string;
    lembrarDados: boolean;
    onLogin: () => void;
    cadastrar: () => void;
}

const LoginScreenView = ({ onChange, onLogin, passowrd, user, lembrarDados, cadastrar }: props) => {
    return (
        <SafeAreaView style={[globalStyles.screenPrincipal]}>
            <View style={[globalStyles.container, loginScreenStyles.screen]} >
                <View style={[loginScreenStyles.logo_container]}>
                    <Image
                        style={loginScreenStyles.logo_imagem}
                        source={require('assets/icone.png')}
                    />
                    <Text style={[loginScreenStyles.logo_Text]}>Consumo Conciente</Text>
                </View>

                <View style={loginScreenStyles.container}>
                    <InputText label="Usuário:"
                        onChangeText={(value) => onChange('user', value)}
                        value={user}
                        />
                    <InputPassoword label="Senha:"
                        onChange={(value) => onChange('passowrd', value)}
                        value={passowrd}
                        />
                    <CheckBoxPers texto="Lembrar meus dados."
                        check={lembrarDados}
                        setCheck={(e) => onChange("lembrarDados", e)} 
                        />
                    <Button title="Entrar"
                        onPress={onLogin} 
                    />
                    <View style={loginScreenStyles.texto_container}>
                        <Text style={[globalStyles.label]}>Não tem conta? </Text> 
                        <TouchableOpacity onPress={cadastrar}>
                            <Text style={[globalStyles.label, {color: cores.text_destaque}]}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}


export default LoginScreenView;