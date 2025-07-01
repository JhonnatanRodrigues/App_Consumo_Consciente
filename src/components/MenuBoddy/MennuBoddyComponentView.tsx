import { Image, Text, TouchableOpacity, View } from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { mennuBoddyComponentStyles } from "src/styles/components/MennuBoddyComponentStyles";
import globalStyles from "src/styles/globalStyles";
import fonts from "src/themes/fonts";
import cores from "src/themes/cores";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MenuStackParamList } from "src/types/navigationsTypes";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = NativeStackNavigationProp<MenuStackParamList>;

const MennuBoddyComponentView = () => {
    const navigation = useNavigation<NavigationProps>();
    return(
        <View style={mennuBoddyComponentStyles.container}>
            <TouchableOpacity style={mennuBoddyComponentStyles.button} onPress={() => navigation.navigate('Dispositivos')}>
                <SimpleLineIcons name="grid" size={24} color={cores.text_button} />
                <Text style={[globalStyles.buttonText, {fontSize: fonts.size.small}]}>Dispositivos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={mennuBoddyComponentStyles.button} onPress={() => navigation.navigate('VisaoGeral')}>
                <Octicons name="graph" size={24} color={cores.text_button} />
                <Text style={[globalStyles.buttonText, {fontSize: fonts.size.small}]}>Visão Geral</Text>
            </TouchableOpacity>

            <TouchableOpacity style={mennuBoddyComponentStyles.buttonCentral} onPress={() => navigation.navigate('Home')}>
                <Image
                    style={mennuBoddyComponentStyles.iconButtoncentral}
                    source={require('assets/icone.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

export default MennuBoddyComponentView;