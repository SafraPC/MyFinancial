import styled from 'styled-components/native';

export const Container = styled.View`
   padding: 12px;
   background-color: ${({ theme }) => theme.colors.darkElements};
   justify-content: space-around;
   border-radius: 8px;
   flex: 1;
   max-width: 230px;
   margin-right: 8px;
`;

export const Title = styled.Text`
   color: ${({ theme }) => theme.colors.white};
   font-size: 18px;
   font-weight: bold;
   margin-bottom: 8px;
`;

export const Value = styled.Text`
   color: ${({ theme }) => theme.colors.white};
   font-size: 14px;
   font-weight: bold;
   margin-top: 8px;
`;

export const DeleteContainer = styled.TouchableOpacity`
   padding: 4px;
   background-color: ${({ theme }) => theme.colors.white};
   border-radius: 50px;
   justify-content: center;
   align-items: center;
   position: absolute;
   right: -10px;
   top: -10px;
`;
