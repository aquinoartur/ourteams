import { Header } from '@widgets/header';
import * as HS from './home_style';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Home() {
 const insets = useSafeAreaInsets();
 return (
  <HS.Background>
   <View style={{ marginTop: insets.top }}>
    <Header />
   </View>
  </HS.Background >
 );
}


