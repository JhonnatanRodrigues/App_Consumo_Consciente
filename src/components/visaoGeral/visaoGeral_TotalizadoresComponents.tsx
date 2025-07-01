import { Text, View } from "react-native";
import { visaoGeral_TotalizadoresComponentsStyles } from "src/styles/components/visaoGeral_TotalizadoresComponentsStyles";

type props = {
    descricao: string;
    valor: string;
}

const VisaoGeral_TotalizadoresComponents = ({descricao, valor}: props) => {
    return(
        <View style={visaoGeral_TotalizadoresComponentsStyles.container}>
            <Text style={visaoGeral_TotalizadoresComponentsStyles.valorText}>{valor}</Text>
            <Text>{descricao}</Text>
        </View>
    )
}

export default VisaoGeral_TotalizadoresComponents;