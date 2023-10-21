import styled from 'styled-components/native';

export const Title = styled.Text`
   font-size: 18px;
   font-weight: bold;
   text-align: center;
   color: ${({ theme }) => theme.colors.white};
   margin-bottom: 16px;
`;

export const Centered = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
`;

export const HasntDataContent = styled.View`
   margin-top: 60px;
`;
