import { NativeStackScreenProps } from "@react-navigation/native-stack";
import DispositivoScreenView from "./dispositivoScreenView";
import { MenuStackParamList } from "src/types/navigationsTypes";
import { Dispositivo } from "src/types/dispositivoType";
import { useState } from "react";


type props = NativeStackScreenProps<MenuStackParamList, 'Dispositivos'>;

const DispositivoScreen = ({ }: props) => {
    const [isOpenModelDispositivo, setIsOpenModelDispositivo] = useState<boolean>(false);

    const dispositivos : Dispositivo[] = [
        {
            id: 0,
            nome: 'Geladeira',
            descricao: 'Geladeira do salão de festa',
            kws: 80,
            online: true
        },
        {
            id: 1,
            nome: 'Frizer',
            descricao: 'Frizer do salão de festa',
            kws: 20,
            online: false
        },
        {
            id: 2,
            nome: 'TV',
            descricao: 'TV do salão de festa',
            kws: 30,
            online: true
        },
        {
            id: 3,
            nome: 'Ar condicionado',
            descricao: 'Ar condicionado da sala de estar',
            kws: 80,
            online: true
        }
    ]
    return <DispositivoScreenView 
                dispositivos={dispositivos} 
                clousedModelDispositivo={() => setIsOpenModelDispositivo(false)}
                isOpenModelDispositivo={isOpenModelDispositivo}
                openModelDispositivo={() => setIsOpenModelDispositivo(true)}
                />;
}


export default DispositivoScreen;