import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
   background-color: ${({ theme }) => theme.colors.darkElements};
   border-radius: 4px;
   padding: 16px;
   margin-top: 16px;
   flex-direction: row;
   justify-content: space-between;
`;

export const CardTitle = styled.Text`
   font-size: 16px;
   font-weight: bold;
   color: ${({ theme }) => theme.colors.white};
`;
