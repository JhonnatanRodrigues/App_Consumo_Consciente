import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MenuStackParamList } from "src/types/navigationsTypes";
import HomeScreenView from "./homeScreenView";
import { useState } from "react";
import { Usuario } from "src/types/usuarioType";

type Props = NativeStackScreenProps<MenuStackParamList, 'Home'>;

const HomeScreen = ({ navigation } :Props) => {
    const [usuario, setUsuario]=useState<Usuario>({
        nome:'Jhonnatan Rodrigues Serafina',
        imagem: ''
    })

    return (
        <HomeScreenView 
            usuario={usuario}
            />
    );
}

export default HomeScreen;