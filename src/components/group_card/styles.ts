import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
 margin-left: 16px;
 margin-right: 16px;
 margin-bottom: 16px;
 padding: 16px;
 height: 96px;
 flex-direction: row;
 align-items: center;
 background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const GroupIcon = styled(Ionicons).attrs(
 ({ theme }) => ({
  color: theme.COLORS.GREEN_500,
 })
)``;

export const Label = styled.Text`
 font-size:  ${({ theme }) => theme.FONT_SIZE.MD}px;
 color: ${({ theme }) => theme.COLORS.WHITE};
 text-align: center;
`;

export const EmptyGroupCardsContainer = styled.View`
 flex: 1;
 justify-content: center;
 align-items: center;
 `;