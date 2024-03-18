
import { ThemeProvider } from 'styled-components/native';
import theme from 'src/theme';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home } from 'src/app/home/home';
import { LoadingIndicator } from '@widgets/loading';


export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme} >
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        {true ? <Home /> : <LoadingIndicator />}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

