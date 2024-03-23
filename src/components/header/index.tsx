import { Background, Logo } from './styles'
import image from '@assets/logo.png';
import { BackButton } from '@widgets/back_button'

type HeaderProps = {
 showBackButton?: boolean;

}

export function Header({ showBackButton = false }: HeaderProps) {
 return (
  <Background>
   {
    showBackButton &&
    <BackButton />
   }
   <Logo source={image} />
  </Background>
 );
}