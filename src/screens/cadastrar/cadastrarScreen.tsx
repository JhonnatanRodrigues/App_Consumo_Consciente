import { useState } from "react";
import Toast from 'react-native-toast-message';
import CadastrarScreenView from "./cadastrarScreenView";
import { AuthStackParamList } from "src/types/navigationsTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<AuthStackParamList, 'Cadastrar'>;

const CadastrarScreen = ({ navigation } :Props) => {
    const [passowrd, setPassowrd] = useState<string>("");
    const [confirmPassowrd, setConfirmPassowrd] = useState<string>("");
    const [user, setUser] = useState<string>("");
    const [lembrarDados, setLembrarDados] = useState<boolean>(false);

    function onChange_Formulario(fieldName:  'user' | 'passowrd' | 'lembrarDados' | 'confirmPassowrd', value: any){
        switch (fieldName) {
            case "user":
                setUser(value);
                break;
            case "passowrd":
                setPassowrd(value);
                break;
            case "lembrarDados":
                setLembrarDados(value);
            case "confirmPassowrd":
                setConfirmPassowrd(value);
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
    
    function onLogin(){
        navigation.goBack();
    }
    
    function onCadastrar(){
        
    }

    return (
        <CadastrarScreenView 
            lembrarDados={lembrarDados}
            passowrd={passowrd}
            user={user}
            onChange={onChange_Formulario}
            onLogin={onLogin}
            confirmPassowrd={confirmPassowrd}
            onCadastrar={onCadastrar}
            />
    );
}

export default CadastrarScreen;