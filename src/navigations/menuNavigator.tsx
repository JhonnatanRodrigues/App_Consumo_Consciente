import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuStackParamList } from 'src/types/navigationsTypes';
import HomeScreen from 'src/screens/home/homeScreen';
import DispositivoScreen from 'src/screens/dispositivos/dispositivoScreen';
import VisaoGeralScreen from 'src/screens/visaoGeral/visaoGeralScreen';

const Stack = createNativeStackNavigator<MenuStackParamList>();

export default function MenuNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Dispositivos" component={DispositivoScreen} />
      <Stack.Screen name="VisaoGeral" component={VisaoGeralScreen} />
    </Stack.Navigator>
  );
}