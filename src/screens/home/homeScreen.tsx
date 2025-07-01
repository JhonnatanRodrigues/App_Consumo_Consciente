import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MenuStackParamList } from "src/types/navigationsTypes";
import HomeScreenView from "./homeScreenView";
import { useState } from "react";
import { Usuario } from "src/types/usuarioType";
import { useAuthStore } from "src/store/auth/useAuthStore";

type Props = NativeStackScreenProps<MenuStackParamList, 'Home'>;

const HomeScreen = ({ navigation } :Props) => {
    const [usuario, setUsuario]=useState<Usuario>({
        nome:'Jhonnatan Rodrigues Serafina',
        imagem: ''
    })
    const setToken = useAuthStore((s) => s.setToken);

    const logOut = () => {
        setToken(undefined);
    }

    return (
        <HomeScreenView 
            usuario={usuario}
            logOut={logOut}
            />
    );
}

export default HomeScreen;