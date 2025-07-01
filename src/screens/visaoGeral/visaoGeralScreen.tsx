import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MenuStackParamList } from "src/types/navigationsTypes";
import VisaoGeralScreenView from "./visaoGeralScreenView";
import { VisaoGeral } from "src/types/visaoGeralTypes";
import { useEffect, useState } from "react";
import { ConsumoDispositivoApi } from "src/services/consumoDispositivos/consumoDispositivoApi";

type props = NativeStackScreenProps<MenuStackParamList, 'VisaoGeral'>;

const VisaoGeralScreen = ({ route}: props) => {
    const [carregou, setCarregou] = useState<boolean>(false);
    const [visaoGeral, setVisaoGeral] = useState<VisaoGeral>({
        consumoAnual: [],
        consumoTotalDoMes_kWs: 0,
        dispositivos_consumos: [],
        custoTotalEstimadoDoMes: 0
    });

    useEffect(() => {
        if(!carregou)
            carregar();
    }, [route])

    const carregar = async () => {
        setCarregou(true);
        let api = new ConsumoDispositivoApi();

        let ret = await api.ListarVisaoGeral();

        setVisaoGeral(ret);
    }
    
    return <VisaoGeralScreenView visaoGeral={visaoGeral}/>;
}


export default VisaoGeralScreen;