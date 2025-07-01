import { Dimensions, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { visaogeral_ConsumoPorDispComponentStyles } from "src/styles/components/visaogeral_ConsumoPorDispComponentStyles";
import { Dispositivo_Consumo } from "src/types/visaoGeralTypes";

type props = {
    dispositivos_consumos: Dispositivo_Consumo[];
}

const screenWidth = Dimensions.get("window").width;
const Visaogeral_ConsumoPorDispComponent = ({dispositivos_consumos}: props) => {
    const dispositivosOrdenados = [...dispositivos_consumos].sort(
        (a, b) => b.consumo_kWs - a.consumo_kWs
    );

    const gerarTonsDeAzul = (quantidade: number) => {
        const tons: string[] = [];

        for (let i = 0; i < quantidade; i++) {
            const intensidade = 75 + i * Math.floor(180 / quantidade);
            tons.push(`rgb(0, ${intensidade}, 255)`);
        }

        return tons;
    };

    const cores = gerarTonsDeAzul(dispositivosOrdenados.length);

    const data = dispositivosOrdenados.map((dispositivo, index) => ({
        name: dispositivo.nomeDispositivo,
        population: dispositivo.consumo_kWs,
        color: cores[index],
        legendFontColor: "#000",
        legendFontSize: 12,
    }));

    return (
        <View style={visaogeral_ConsumoPorDispComponentStyles.container}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
                Distribuição do consumo por dispositivo
            </Text>

            <PieChart
                data={data}
                width={screenWidth - 40}
                height={120}
                chartConfig={{
                color: () => `#000`,
                }}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"0"}
                absolute
            />
        </View>
    );
}

export default Visaogeral_ConsumoPorDispComponent;