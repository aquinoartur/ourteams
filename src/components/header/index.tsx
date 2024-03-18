import { Background, Logo } from './styles'
import image from '@assets/logo.png';

export function Header() {
 return (
  <Background>
   <Logo source={image} />
  </Background>
 );
}