import { StyleSheet } from "react-native";
import cores from "src/themes/cores";
import fonts from "src/themes/fonts";
import metrics from "src/themes/metricas";

export const dispositivoModalStyles = StyleSheet.create({
    container:{
        backgroundColor: cores.background, 
        padding: metrics.paddingContainner, 
        borderRadius: metrics.borderRadius,
        gap: metrics.gap
    },
    imagem:{
        width: 70,
        height: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
    containerImagem: {
        width: '100%',
        alignItems: "center",
        justifyContent: "center"
    },
    botton:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});