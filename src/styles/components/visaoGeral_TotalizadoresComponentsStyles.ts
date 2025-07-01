import { StyleSheet } from "react-native";
import cores from "src/themes/cores";
import metrics from "src/themes/metricas";

export const visaoGeral_TotalizadoresComponentsStyles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        width: 120,
        backgroundColor: cores.input_background,
        padding: metrics.padding,
        gap: metrics.gap,
        borderRadius: metrics.borderRadius,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    valorText:{
        fontWeight: 'bold'
    }
});