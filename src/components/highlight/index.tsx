import { Container, Title, Subtitle } from './styles';
import { VerticalGap } from '@widgets/gap';

type HighlightProps = {
 title: string;
 subtitle: string;
};

export function Highlight(props: HighlightProps) {
 return (
  <Container>
   <Title>{props.title}</Title>
   <VerticalGap h={8} />
   <Subtitle>{props.subtitle}</Subtitle>
  </Container>
 );
}

