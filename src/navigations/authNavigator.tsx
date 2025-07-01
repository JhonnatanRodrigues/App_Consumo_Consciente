import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/loginScreen';
import { AuthStackParamList } from 'src/types/navigationsTypes';
import CadastrarScreen from 'src/screens/cadastrar/cadastrarScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastrar" component={CadastrarScreen} />
    </Stack.Navigator>
  );
}