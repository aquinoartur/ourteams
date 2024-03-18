import { Header } from '@widgets/header';
import * as HS from './home_style';
import { View } from 'react-native';

export function Home() {

 return (
  <HS.Background>
   <View style={{ marginTop: 50 }}>
    <Header />
   </View>
  </HS.Background >
 );
}


