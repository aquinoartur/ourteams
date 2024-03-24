import { View } from 'react-native';
import { Container } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '@widgets/header';
import { GroupIconOutline } from '@widgets/group_card';
import { Highlight } from '@widgets/highlight';
import { VerticalGap } from '@widgets/gap';

export function NewGroup() {
 const insets = useSafeAreaInsets();
 return (
  <Container>
   <View style={{ marginTop: insets.top, flex: 1 }}>
    <Header showBackButton={true}></Header>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <GroupIconOutline customSize={64} />
     <Highlight
      title='Nova turma'
      subtitle='Crie uma nova turma para jogar com seus amigos'
     />
     <VerticalGap h={12} />
    </View>
   </View>
  </Container>
 );
}