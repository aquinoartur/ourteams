import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';


export const BackIconButton = styled.TouchableOpacity`
 flex: 1;
`;

export const BackIcon = styled(Ionicons).attrs(
 ({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
 })
)`
 height: 46px;
 width: 46px;
`;
