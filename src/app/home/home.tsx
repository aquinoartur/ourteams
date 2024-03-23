import { Header } from '@widgets/header';
import { Highlight } from '@widgets/highlight';
import { VerticalGap, HorizontalGap } from '@widgets/gap';
import * as HS from './home_style';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Home() {
 const insets = useSafeAreaInsets();
 return (
  <HS.Background>
   <View style={{ marginTop: insets.top }}>
    <Header />
    <VerticalGap h={32} />
    <Highlight
     title='Turmas'
     subtitle='Jogue com a sua turma' />
   </View>
  </HS.Background >
 );
}


