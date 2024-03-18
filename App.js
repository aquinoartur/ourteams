
import { ThemeProvider } from 'styled-components/native';
import theme from 'src/theme';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home } from 'src/app/home/home';
import { LoadingIndicator } from '@widgets/loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme} >
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        {fontsLoaded ? <Home /> : <LoadingIndicator />}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

