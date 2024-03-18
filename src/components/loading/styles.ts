import styled from 'styled-components/native';

export const Background = styled.View`
 flex: 1;
 background-color:  ${({ theme }) => theme.COLORS.GRAY_600}; 
 align-items: center;
 justify-content: center;
`;

export const Indicator = styled.ActivityIndicator.attrs(({ theme }) => ({
 size: 'large',
 color: theme.COLORS.GREEN_700,
}))``;