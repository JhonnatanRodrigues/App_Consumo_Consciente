import { StyleSheet } from "react-native";
import cores from "src/themes/cores";

export const mennuBoddyComponentStyles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        backgroundColor: cores.primary,
        width: '100%',
        height: 80,
        position: "absolute",
        bottom: 50
    },
    button:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: '50%',
        height: '100%',
        borderWidth: 0.5,
        borderColor: cores.background,
        gap: 5
    },
    buttonCentral:{
        borderRadius: '100%',
        borderWidth: 1,
        borderColor: cores.background,
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        position: "absolute",
        right: '40%',
        bottom: 40,
        backgroundColor: cores.primary,
    },
    iconButtoncentral:{
        width: 48,
        height: 52
    }
});