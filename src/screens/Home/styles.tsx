import styled from 'styled-components/native';

export const Label = styled.Text`
   font-size: 18px;
   font-weight: bold;
   color: ${({ theme }) => theme.colors.white};
`;

export const ElementContainer = styled.View`
   margin-top: 16px;
   margin: 16px 0;
   padding: 0 16px;
   background-color: ${({ theme }) => theme.colors.darkElements};
   border-radius: 8px;
   justify-content: center;
`;

export const ElementText = styled.Text`
   margin: 16px 0;
   font-size: 18px;
   font-weight: bold;
   color: ${({ theme }) => theme.colors.white};
`;

export const Separator = styled.View`
   margin: 16px 0;
`;
