import styled from 'styled-components/native';

export const Row = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;

export const IconContainer = styled.TouchableOpacity`
   width: 32px;
   height: 32px;
   justify-content: center;
   align-items: center;
   border-radius: 16px;
   background-color: ${({ theme }) => theme.colors.darkElements};
`;
