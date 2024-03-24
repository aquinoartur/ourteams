import { Header } from '@widgets/header';
import { Highlight } from '@widgets/highlight';
import { VerticalGap, HorizontalGap } from '@widgets/gap';
import * as HS from './home_style';
import { FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GroupCard, EmptyGroupCards } from '@widgets/group_card';
import { useState } from 'react';

export function Home() {
 const insets = useSafeAreaInsets();
 const [groups, setGroups] = useState<string[]>([]);

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
     contentContainerStyle={groups.length == 0 && { flex: 1 }}
     ListEmptyComponent={() =>
      <EmptyGroupCards title='Nenhum grupo foi cadastrado' />
     }
    />
   </View>
  </HS.Background >
 );
}


