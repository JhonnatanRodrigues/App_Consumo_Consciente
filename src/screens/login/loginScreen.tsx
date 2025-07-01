import { useState } from "react";
import LoginScreenView from "./loginScreenView";
import Toast from 'react-native-toast-message';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "src/types/navigationsTypes";
import { login } from "src/services/login/loginApi";
import { useAuthStore } from "src/store/auth/useAuthStore";

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const LoginScreen = ({ navigation } :Props) => {
    const [passowrd, setPassowrd] = useState<string>("");
    const [user, setUser] = useState<string>("");
    const [lembrarDados, setLembrarDados] = useState<boolean>(false);
    const setToken = useAuthStore((s) => s.setToken);

    function onChange_Formulario(fieldName:  'user' | 'passowrd' | 'lembrarDados', value: any){
        switch (fieldName) {
            case "user":
                setUser(value);
                break;
            case "passowrd":
                setPassowrd(value);
                break;
            case "lembrarDados":
                setLembrarDados(value);
            default:
                Toast.show({
                    type: 'error',
                    text1: 'Erro ao alterar campo',
                    text2: `Campo ${fieldName}, não foi encontrado no resolverdor de dados. Entre em contato com o suporte!`,
                    position: 'top',
                    });
                break;
        }
    }
    
    async function onLogin(){
        try {
            const token = await login(user, passowrd);
            setToken(token.token);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Email ou senha inválidos',
                });
        }
    }

    function cadastrar(){
        navigation.navigate('Cadastrar')
    }

    return (
        <LoginScreenView 
            lembrarDados={lembrarDados}
            passowrd={passowrd}
            user={user}
            onChange={onChange_Formulario}
            onLogin={onLogin}
            cadastrar={cadastrar}
            />
    );
}

export default LoginScreen;