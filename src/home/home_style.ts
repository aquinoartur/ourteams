
import { StyleSheet } from 'react-native';
import { styled } from 'styled-components/native';


export const Background = styled.View`
 flex: 1;
 background-color: #fff;
 align-items: center;
 justify-content: center;
`;

export const CenterText = styled.Text`
 color: #8151e3;
 font-size: 24px;
 text-align: center;
`;

export const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#81b1e3',
  alignItems: 'center',
  justifyContent: 'center',
 },
});