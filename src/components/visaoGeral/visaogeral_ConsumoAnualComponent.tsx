import { Dimensions, Text, View } from "react-native";
import { visaogeral_ConsumoPorDispComponentStyles } from "src/styles/components/visaogeral_ConsumoPorDispComponentStyles";
import { Dispositivo_Consumo } from "src/types/visaoGeralTypes";
import { LineChart } from 'react-native-chart-kit';

type props = {
    dispositivos_consumos: Dispositivo_Consumo[];
}

const screenWidth = Dimensions.get("window").width;
const Visaogeral_ConsumoAnualComponent = ({dispositivos_consumos}: props) => {
    

    return (
        <View style={visaogeral_ConsumoPorDispComponentStyles.container}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
                Demonstrativo de consumo anual kWh
            </Text>

            <LineChart
                data={{
                    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                    datasets: [
                    {
                        data: [4000, 6200, 3000, 7000, 9500, 6000, 5000, 4900, 7000, 10500, 10000, 4000],
                        color: () => '#3399ff',
                    },
                    ],
                }}
                width={screenWidth - 60}
                height={200}
                yAxisSuffix=" kWh"
                chartConfig={{
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 0,
                    color: () => '#007bff',
                    labelColor: () => '#000',
                    propsForLabels: {
                    fontSize: 10,       // menor fonte para labels
                    },
                }}
                style={{
                    marginLeft: 40,    // espaço extra para eixo Y
                    marginRight: 10,
                }}
                bezier
                />
        </View>
    );
}

export default Visaogeral_ConsumoAnualComponent;