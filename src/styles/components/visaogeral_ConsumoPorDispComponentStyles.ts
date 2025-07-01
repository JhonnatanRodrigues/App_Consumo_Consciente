import { StyleSheet } from "react-native";
import cores from "src/themes/cores";
import metrics from "src/themes/metricas";

export const visaogeral_ConsumoPorDispComponentStyles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        backgroundColor: cores.input_background,
        padding: metrics.padding,
        gap: metrics.gap,
        borderRadius: metrics.borderRadius,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    titloText:{
        fontWeight: 'bold'
    }
});