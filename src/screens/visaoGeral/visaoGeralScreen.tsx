import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MenuStackParamList } from "src/types/navigationsTypes";
import VisaoGeralScreenView from "./visaoGeralScreenView";
import { VisaoGeral } from "src/types/visaoGeralTypes";

type props = NativeStackScreenProps<MenuStackParamList, 'VisaoGeral'>;

const VisaoGeralScreen = ({ }: props) => {
    const visaoGeral:VisaoGeral = {
        consumoTotalDoMes_kWs: 210,
        custoTotalEstimadoDoMes: 300,
        dispositivos_consumos: [
            {
                nomeDispositivo: 'Geladeira',
                consumo_kWs: 80
            },
            {
                nomeDispositivo: 'Frizer',
                consumo_kWs: 20
            },
            {
                nomeDispositivo: 'TV',
                consumo_kWs: 30
            },
            {
                nomeDispositivo: 'Ar condicionado',
                consumo_kWs: 80
            },
        ],
        consumoAnual: [
            {
                consumoTotal_kWs: 0,
                mes: 'JAN'
            },
            {
                consumoTotal_kWs: 0,
                mes: 'FEV'
            },
            {
                consumoTotal_kWs: 5100,
                mes: 'MAR'
            },
            {
                consumoTotal_kWs: 4950,
                mes: 'ABR'
            },
            {
                consumoTotal_kWs: 10200,
                mes: 'MAI'
            },
            {
                consumoTotal_kWs: 8000,
                mes: 'JUN'
            },
            {
                consumoTotal_kWs: 9500,
                mes: 'JUL'
            },
            {
                consumoTotal_kWs: 4750,
                mes: 'AGO'
            },
            {
                consumoTotal_kWs: 5200,
                mes: 'SET'
            },
            {
                consumoTotal_kWs: 10450,
                mes: 'OUT'
            },
            {
                consumoTotal_kWs: 10500,
                mes: 'NOV'
            },
            {
                consumoTotal_kWs: 1500,
                mes: 'DEZ'
            },
        ]
    }
    
    return <VisaoGeralScreenView visaoGeral={visaoGeral}/>;
}


export default VisaoGeralScreen;