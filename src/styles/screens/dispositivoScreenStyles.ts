import { StyleSheet } from 'react-native';
import cores from 'src/themes/cores';
import metrics from 'src/themes/metricas';

const dispositivoScreenStyles = StyleSheet.create({
    screen: {
        marginTop: 20,
        gap: 20
    },
    containnerTitlo:{
        width: 200,
        borderBottomColor: cores.input_border,
        borderBottomWidth: 1
    },
    scroolDispositivos:{
        gap: metrics.gap,
        height: '80%'
    },
    buttonAdd:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: cores.primary,
        borderRadius: '100%',
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: 150,
        right: 20
    }
});

export default dispositivoScreenStyles;