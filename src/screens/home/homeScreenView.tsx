import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import globalStyles from "src/styles/globalStyles";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Usuario } from "src/types/usuarioType";
import cores from "src/themes/cores";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MennuBoddyComponent from "src/components/MenuBoddy/MennuBoddyComponent";
import homeScreenStyles from "src/styles/screens/homeScreenStyles";

type props = {
    usuario: Usuario;
    logOut: () => void;
}

const HomeScreenView = ({ usuario, logOut }: props) => {
    return (
        <SafeAreaView style={[globalStyles.screenPrincipal]}>
            <View style={[globalStyles.container, homeScreenStyles.screen]} >
                <View style={homeScreenStyles.containerUsuario}>
                    {usuario.imagem
                        ? <Image style={homeScreenStyles.imagemUsuario} source={{uri: usuario.imagem}} />
                        : <View style={homeScreenStyles.imagemUsuario}><MaterialCommunityIcons name="image-edit-outline" size={30} color={cores.primary} /></View>
                    }
                    <Text>{usuario.nome}</Text>
                </View>

                <View style={homeScreenStyles.containerButtons}>
                    <TouchableOpacity style={homeScreenStyles.buttons}>
                        <MaterialCommunityIcons name="playlist-edit" size={24} color={cores.primary} />
                        <Text style={globalStyles.label}>Editar conta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={homeScreenStyles.buttons} onPress={logOut}>
                        <MaterialIcons name="logout" size={24} color={cores.primary} />
                        <Text style={globalStyles.label}>Sair do app Consumo Conciente</Text>
                    </TouchableOpacity>

                    
                    <Text style={homeScreenStyles.versao}>Versão do app Consumo Conciente: 1.0.0</Text>
                </View>
            </View>
            
            <MennuBoddyComponent/>
        </SafeAreaView>
    );
}


export default HomeScreenView;