import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import AuthNavigator from 'src/navigations/authNavigator';
import MenuNavigator from 'src/navigations/menuNavigator';
import { MenuStackParamList } from 'src/types/navigationsTypes';
import { useAuthStore } from 'src/store/auth/useAuthStore';
import { useEffect } from 'react';

export default function App() {
  useFonts({
    LeagueGothic: require('./assets/fonts/LeagueGothic.ttf')
  });
  const token = useAuthStore((s) => s.token);

  useEffect(() => {
    console.log("🤦‍♂️aqui: ", token);
  },[token])

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {token ? <MenuNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
