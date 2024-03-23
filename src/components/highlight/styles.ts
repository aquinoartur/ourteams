import styled from 'styled-components/native';

export const Container = styled.View`

 justify-content: center;
 align-items: center;
`;

export const Title = styled.Text`
 font-size:  ${({ theme }) => theme.FONT_SIZE.XL}px;
 font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
 color: ${({ theme }) => theme.COLORS.WHITE};
 text-align: center;
`;

export const Subtitle = styled.Text`
 font-size:  ${({ theme }) => theme.FONT_SIZE.MD}px;
 font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
 color: ${({ theme }) => theme.COLORS.GRAY_300};
 text-align: center;
`;

