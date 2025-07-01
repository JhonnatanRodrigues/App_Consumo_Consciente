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
    clousedModelDispositivo: () => void;
    openModelDispositivo: () => void;
}

const DispositivoScreenView = ({ dispositivos, isOpenModelDispositivo, clousedModelDispositivo, openModelDispositivo }: props) => {
    return (
        <SafeAreaView style={[globalStyles.screenPrincipal]}>
            <View style={[globalStyles.container, dispositivoScreenStyles.screen]} >
                <View style={dispositivoScreenStyles.containnerTitlo}>
                    <Text style={[globalStyles.text]}>Dispositivos</Text>
                </View>

                <ScrollView style={dispositivoScreenStyles.scroolDispositivos}>
                    {
                        dispositivos.map((p, key) => (
                            <DispositivoComponent key={key} dispositivo={p}/>
                        ))
                    }
                </ScrollView>
            </View>
            
            
            <TouchableOpacity style={dispositivoScreenStyles.buttonAdd} onPress={openModelDispositivo}>
                <Feather name="plus" size={20} color={cores.background} />
            </TouchableOpacity>

            <MennuBoddyComponent/>
            <DispositivoModal isVisible={isOpenModelDispositivo} cloused={clousedModelDispositivo} />
        </SafeAreaView>
    );
}


export default DispositivoScreenView;