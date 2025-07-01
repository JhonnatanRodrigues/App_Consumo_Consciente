import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import AuthNavigator from 'src/navigations/authNavigator';
import MenuNavigator from 'src/navigations/menuNavigator';
import { MenuStackParamList } from 'src/types/navigationsTypes';

export default function App() {
  useFonts({
    LeagueGothic: require('./assets/fonts/LeagueGothic.ttf')
  });

  const token = "ferferf";

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {token ? <MenuNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
