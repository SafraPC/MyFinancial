import styled from 'styled-components/native';

export const AddButton = styled.TouchableOpacity`
   border-radius: 50px;
   padding: 8px;
   margin: 8px;
   margin-right: 0;
   background-color: ${({ theme }) => theme.colors.secondary};
   justify-content: center;
   align-items: center;
`;
