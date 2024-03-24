import { Header } from '@widgets/header';
import { Highlight } from '@widgets/highlight';
import { VerticalGap, HorizontalGap } from '@widgets/gap';
import * as HS from './styles';
import { FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GroupCard, EmptyGroupCards } from '@widgets/group_card';
import { useState } from 'react';
import { AppButton } from '@widgets/app_button';
import { ButtonType } from '@widgets/app_button/styles';

export function Home() {
 const insets = useSafeAreaInsets();
 const [groups, setGroups] = useState<string[]>(['Turma 1', 'Turma 2', 'Turma 3']);

 return (
  <HS.Background>
   <View style={{ marginTop: insets.top, flex: 1 }}>
    <Header />
    <VerticalGap h={32} />
    <Highlight
     title='Turmas'
     subtitle='Jogue com a sua turma' />
    <VerticalGap h={32} />
    <FlatList
     data={groups}
     keyExtractor={item => item}
     renderItem={({ item }) => (
      <GroupCard
       title={item}
       onPress={() => { }}
      />
     )}
     scrollEnabled={groups.length > 0}
     contentContainerStyle={groups.length == 0 && { flex: 1 }}
     ListEmptyComponent={() =>
      <EmptyGroupCards title='Nenhum grupo foi cadastrado' />
     }
    />
    <AppButton
     title='Criar turma'
     type={ButtonType.primary}
     onPress={() => { }}
    />
    <VerticalGap h={12} />
   </View>
  </HS.Background >
 );
}


