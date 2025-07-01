import { StyleSheet } from "react-native";
import cores from "src/themes/cores";
import fonts from "src/themes/fonts";
import metrics from "src/themes/metricas";

export const dispositivoComponentStyles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        gap: metrics.gap,
        padding: metrics.paddingContainner,
        borderRadius: metrics.borderRadius,
        marginBottom: metrics.gap
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
    containnerInfo:{
        flexGrow: 1,
        justifyContent: "center",
        gap: metrics.gap
    },
    infoDestaque:{
        fontWeight: 'bold'
    },
    infoDesc:{
        fontSize: fonts.size.minSmall
    },
    containnerKws:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    containnerOffline:{
        position: "absolute",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        right: 10,
        top: 10
    },
    offlineText:{
        fontSize: fonts.size.minSmall,
        color: 'red'
    }
});