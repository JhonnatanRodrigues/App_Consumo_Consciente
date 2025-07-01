import { StyleSheet } from 'react-native';
import cores from 'src/themes/cores';
import metrics from 'src/themes/metricas';

const visaoGeralScreenStyles = StyleSheet.create({
    screen: {
        marginTop: 20,
        gap: 20
    },
    containnerTitlo:{
        width: 200,
        borderBottomColor: cores.input_border,
        borderBottomWidth: 1
    },
    containerTotalizadores:{
        display: 'flex',
        flexDirection: 'row',
        gap: metrics.gap,
        justifyContent: 'center'
    }
});

export default visaoGeralScreenStyles;