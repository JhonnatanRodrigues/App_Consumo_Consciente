import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import globalStyles from "src/styles/globalStyles";
import MennuBoddyComponent from "src/components/MenuBoddy/MennuBoddyComponent";
import { Dispositivo } from "src/types/dispositivoType";
import DispositivoComponent from "src/components/dispositivo/dispositivoComponent";
import Feather from '@expo/vector-icons/Feather';
import cores from "src/themes/cores";
import dispositivoScreenStyles from "src/styles/screens/dispositivoScreenStyles";
import DispositivoModal from "src/models/dispositivos/dispositivoModal";

type props = {
    dispositivos: Dispositivo[];
    isOpenModelDispositivo: boolean;
    idDispositivo?: number;
    clousedModelDispositivo: () => void;
    openModelDispositivo: (id?: number) => void;
}

const DispositivoScreenView = ({ dispositivos, isOpenModelDispositivo, clousedModelDispositivo, openModelDispositivo, idDispositivo }: props) => {
    return (
        <SafeAreaView style={[globalStyles.screenPrincipal]}>
            <View style={[globalStyles.container, dispositivoScreenStyles.screen]} >
                <View style={dispositivoScreenStyles.containnerTitlo}>
                    <Text style={[globalStyles.text]}>Dispositivos</Text>
                </View>

                <ScrollView style={dispositivoScreenStyles.scroolDispositivos}>
                    {
                        dispositivos.map((p, key) => (
                            <DispositivoComponent key={key} dispositivo={p} onPress={(id) => openModelDispositivo(id)}/>
                        ))
                    }
                </ScrollView>
            </View>
            
            
            <TouchableOpacity style={dispositivoScreenStyles.buttonAdd} onPress={() => openModelDispositivo()}>
                <Feather name="plus" size={20} color={cores.background} />
            </TouchableOpacity>

            <MennuBoddyComponent/>
            <DispositivoModal isVisible={isOpenModelDispositivo} cloused={clousedModelDispositivo} idAlterar={idDispositivo}/>
        </SafeAreaView>
    );
}


export default DispositivoScreenView;