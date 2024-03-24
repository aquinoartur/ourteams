import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export enum ButtonType {
 primary,
 secondary
}

type Props = {
 type: ButtonType;
};

export const Container = styled(TouchableOpacity) <Props>`
   max-height: 56px;
   min-height: 56px;
   width: 100%;
   border-radius: 8px;
   background-color: ${({ theme, type }) => type === ButtonType.primary ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
   justify-content: center;
   align-items: center;
`;

export const Title = styled.Text`
   color: ${({ theme }) => theme.COLORS.WHITE};
   font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
   font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;