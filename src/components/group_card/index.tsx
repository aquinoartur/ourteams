import { HorizontalGap, VerticalGap } from '@widgets/gap';
import { Container, GroupIcon, Label, EmptyGroupCardsContainer } from './styles';
import { TouchableOpacityProps } from 'react-native';

type GroupCardProps = TouchableOpacityProps & {
 title: string;
}

export function GroupCard({ title, ...props }: GroupCardProps) {
 return (
  <Container {...props}>
   <GroupIcon name='people-outline' />
   <HorizontalGap w={8} />
   <Label>{title}</Label>
  </Container>
 );
}

export function EmptyGroupCards({ title }: { title: string }) {
 return (
  <EmptyGroupCardsContainer>
   <GroupIcon name='warning-outline' />
   <VerticalGap h={8} />
   <Label>{title}</Label>
  </EmptyGroupCardsContainer>
 );
}