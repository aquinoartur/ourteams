import 'styled-components/native';
import theme from '../theme';


// Tipagem do tema para acessar via props do ThemeProvider
declare module 'styled-components/native' {
 type ThemeType = typeof theme;
 export interface DefaultTheme extends ThemeType { }
}