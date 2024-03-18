import { Home } from '@home/home';
import { ThemeProvider } from 'styled-components/native';
import { appTheme } from 'src/theme';

export default function App() {
  return (
    <ThemeProvider theme={{ appTheme }} >
      <Home />
    </ThemeProvider>
  );
}

