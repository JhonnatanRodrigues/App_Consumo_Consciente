import { NativeStackScreenProps } from "@react-navigation/native-stack";
import DispositivoScreenView from "./dispositivoScreenView";
import { MenuStackParamList } from "src/types/navigationsTypes";
import { Dispositivo } from "src/types/dispositivoType";
import { useEffect, useState } from "react";
import { DispositivoApi } from "src/services/dispositivos/dispositivoApi";


type props = NativeStackScreenProps<MenuStackParamList, 'Dispositivos'>;

const DispositivoScreen = ({route }: props) => {
    const [isOpenModelDispositivo, setIsOpenModelDispositivo] = useState<boolean>(false);
    const [carregou, setCarregou] = useState<boolean>(false);
    const [dispositivos, setDispositivos] = useState<Dispositivo[]>([]);
    const [idDispositivoAlterar, setIdDispositivoAlterar] = useState<number>();

    useEffect(() => {
        if(dispositivos.length == 0 && !carregou)
            carregar();
    }, [route])

    const carregar = async () => {
        setCarregou(true);
        let api = new DispositivoApi();

        let ret = await api.Listar();

        setDispositivos(ret);
    }

    return <DispositivoScreenView 
                dispositivos={dispositivos} 
                clousedModelDispositivo={() => {
                    setIsOpenModelDispositivo(false);
                    setIdDispositivoAlterar(undefined);
                    carregar();
                }}
                isOpenModelDispositivo={isOpenModelDispositivo}
                openModelDispositivo={(id) => {
                    setIsOpenModelDispositivo(true);
                    setIdDispositivoAlterar(id);
                }}
                />;
}


export default DispositivoScreen;