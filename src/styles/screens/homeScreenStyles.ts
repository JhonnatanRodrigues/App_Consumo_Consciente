import { StyleSheet } from 'react-native';
import cores from 'src/themes/cores';
import fonts from 'src/themes/fonts';
import { mennuBoddyComponentStyles } from '../components/MennuBoddyComponentStyles';
import metrics from 'src/themes/metricas';

const homeScreenStyles = StyleSheet.create({
    screen:{
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    containerUsuario:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        gap: 10,
        padding: 20,
        borderRadius: metrics.borderRadius
    },
    imagemUsuario:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        backgroundColor: cores.background,
        borderRadius: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4, // necessário para Android
    },
    containerButtons:{
        width: '100%',
        height: '75%',
        backgroundColor: '#fff',
        gap: 20,
        padding: 20,
        borderRadius: metrics.borderRadius,
    },
    versao:{
        position: 'absolute',
        bottom: 40,
        left: 55,
        color: '#00000080'
    },
    buttons:{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        padding: 5,
        borderBottomColor: cores.input_border,
        borderBottomWidth: 1
    }
});

export default homeScreenStyles;