import { SafeAreaView, Text, View } from "react-native";
import globalStyles from "src/styles/globalStyles";
import MennuBoddyComponent from "src/components/MenuBoddy/MennuBoddyComponent";
import { VisaoGeral } from "src/types/visaoGeralTypes";
import VisaoGeral_TotalizadoresComponents from "src/components/visaoGeral/visaoGeral_TotalizadoresComponents";
import visaoGeralScreenStyles from "src/styles/screens/visaoGeralScreenStyles";
import Visaogeral_ConsumoPorDispComponent from "src/components/visaoGeral/visaogeral_ConsumoPorDispComponent";
import Visaogeral_ConsumoAnualComponent from "src/components/visaoGeral/visaogeral_ConsumoAnualComponent";

type props = {
    visaoGeral: VisaoGeral;
}

const VisaoGeralScreenView = ({visaoGeral}: props) => {
    return (
        <SafeAreaView style={[globalStyles.screenPrincipal]}>
            <View style={[globalStyles.container, visaoGeralScreenStyles.screen]} >
                <View style={visaoGeralScreenStyles.containnerTitlo}>
                    <Text style={[globalStyles.text]}>Visão Geral</Text>
                </View>

                <View style={visaoGeralScreenStyles.containerTotalizadores}>
                    <VisaoGeral_TotalizadoresComponents
                        valor={`${visaoGeral.consumoTotalDoMes_kWs} kWs`}
                        descricao='Consumo total no mês'/>
                    <VisaoGeral_TotalizadoresComponents
                        valor={`R$ ${visaoGeral.custoTotalEstimadoDoMes},00`}
                        descricao='Custo estimado'/>
                </View>

                <Visaogeral_ConsumoPorDispComponent dispositivos_consumos={visaoGeral.dispositivos_consumos} />
                <Visaogeral_ConsumoAnualComponent dispositivos_consumos={visaoGeral.dispositivos_consumos} />
            </View>

            <MennuBoddyComponent/>
        </SafeAreaView>
    );
}


export default VisaoGeralScreenView;