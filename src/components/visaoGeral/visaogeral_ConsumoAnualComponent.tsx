import { Dimensions, Text, View } from "react-native";
import { visaogeral_ConsumoPorDispComponentStyles } from "src/styles/components/visaogeral_ConsumoPorDispComponentStyles";
import { ConsumoAnual } from "src/types/visaoGeralTypes";
import { LineChart } from 'react-native-chart-kit';

type props = {
    consumoAnual: ConsumoAnual[];
}

const screenWidth = Dimensions.get("window").width;

const Visaogeral_ConsumoAnualComponent = ({ consumoAnual }: props) => {
    if (!consumoAnual || consumoAnual.length === 0) {
        return (
            <View style={visaogeral_ConsumoPorDispComponentStyles.container}>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
                    Demonstrativo de consumo anual kWh
                </Text>
                <Text style={{ color: '#888' }}>Sem dados disponíveis</Text>
            </View>
        );
    }

    const labels = consumoAnual.map(item => item.mes ?? 'N/A');
    const dataValues = consumoAnual.map(item => item.consumoTotal_kWs ?? 0);

    return (
        <View style={visaogeral_ConsumoPorDispComponentStyles.container}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
                Demonstrativo de consumo anual kWh
            </Text>

            <LineChart
                data={{
                    labels: labels,
                    datasets: [
                        {
                            data: dataValues,
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
                        fontSize: 10,
                    },
                }}
                style={{
                    marginLeft: 40,
                    marginRight: 10,
                }}
                bezier
            />
        </View>
    );
}

export default Visaogeral_ConsumoAnualComponent;
