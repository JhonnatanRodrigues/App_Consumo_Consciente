import { Image, Text, TouchableOpacity, View } from "react-native";
import { Dispositivo } from "src/types/dispositivoType";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import cores from "src/themes/cores";
import globalStyles from "src/styles/globalStyles";
import Feather from '@expo/vector-icons/Feather';
import { dispositivoComponentStyles } from "src/styles/components/dispositivoComponentStyles";

type props = {
    dispositivo: Dispositivo;
}

const DispositivoComponentView = ({dispositivo}: props) => {
    return(
        <TouchableOpacity style={[dispositivoComponentStyles.container, {backgroundColor: dispositivo.online ? '#2DAEF633' : '#D6D6D6'}]}>
            <View>
                {dispositivo.urlImagem
                    ?<Image style={dispositivoComponentStyles.imagem} source={{uri: dispositivo.urlImagem}}/>
                    : <View style={dispositivoComponentStyles.imagem}><FontAwesome6 name="image" size={24} color={cores.primary} /></View>
                }
            </View>

            <View style={dispositivoComponentStyles.containnerInfo}>
                <Text style={[globalStyles.label, dispositivoComponentStyles.infoDestaque]}>{dispositivo.nome}</Text>
                <Text style={[globalStyles.label, dispositivoComponentStyles.infoDesc]}>{dispositivo.descricao}</Text>
            </View>

            <View style={[dispositivoComponentStyles.containnerKws]}>
                <Text style={[globalStyles.label,dispositivoComponentStyles.infoDestaque]}>{dispositivo.kws} kWs</Text>
            </View>

            {!dispositivo.online && (
                    <View style={dispositivoComponentStyles.containnerOffline}>
                        <Feather name="zap-off" size={12} color='red' />
                        <Text style={[globalStyles.label, dispositivoComponentStyles.offlineText]}>desligado</Text>
                    </View>
                ) 
            }
        </TouchableOpacity>
    );
}

export default DispositivoComponentView;