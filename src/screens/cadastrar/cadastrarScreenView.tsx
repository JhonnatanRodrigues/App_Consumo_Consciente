import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Button from "src/components/buttons/button";
import CheckBoxPers from "src/components/inputs/checkBoxPers";
import InputPassoword from "src/components/inputs/inputPassoword";
import InputText from "src/components/inputs/inputText";
import globalStyles from "src/styles/globalStyles";
import cadastrarScreenStyles from "src/styles/screens/cadastrarScreenStyles";
import cores from "src/themes/cores";

type props = {
    onChange: (fieldName: 'user' | 'passowrd' | 'lembrarDados' | 'confirmPassowrd', value: any) => void;
    user: string;
    passowrd: string;
    confirmPassowrd: string;
    lembrarDados: boolean;
    onCadastrar: () => void;
    onLogin: () => void;
}

const CadastrarScreenView = ({ onChange, onCadastrar, onLogin, passowrd, confirmPassowrd, user, lembrarDados }: props) => {
    return (
        <SafeAreaView style={[globalStyles.screenPrincipal]}>
            <View style={[globalStyles.container, cadastrarScreenStyles.screen]} >
                <View style={[cadastrarScreenStyles.logo_container]}>
                    <Image
                        style={cadastrarScreenStyles.logo_imagem}
                        source={require('assets/icone.png')}
                    />
                    <Text style={[cadastrarScreenStyles.logo_Text]}>Consumo Conciente</Text>
                </View>

                
                <Text style={[globalStyles.title]}>Cadastre-se</Text> 

                <View style={cadastrarScreenStyles.container}>
                    <InputText label="Nome completo:"
                        onChangeText={(value) => onChange('user', value)}
                        value={user}
                        />
                    <InputText label="Usuário:"
                        onChangeText={(value) => onChange('user', value)}
                        value={user}
                        />
                    <InputPassoword label="Senha:"
                        onChange={(value) => onChange('passowrd', value)}
                        value={passowrd}
                        validarPassoword={true}
                        />
                    <InputPassoword label="Confirmar senha:"
                        onChange={(value) => onChange('confirmPassowrd', value)}
                        value={confirmPassowrd}
                        />
                    <Button title="Cadastrar"
                        onPress={onCadastrar} 
                    />
                    <View style={cadastrarScreenStyles.texto_container}>
                        <Text style={[globalStyles.label]}>Já tem uma conta? </Text> 
                        <TouchableOpacity onPress={onLogin}>
                            <Text style={[globalStyles.label, {color: cores.text_destaque}]}>Fazer login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}


export default CadastrarScreenView;