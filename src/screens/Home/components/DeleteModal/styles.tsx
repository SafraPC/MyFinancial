import styled from 'styled-components/native';

interface ButtonProps {
   isConfirm?: boolean;
}

export const Container = styled.View`
   flex: 1;
   justify-content: space-around;
`;

export const Description = styled.Text`
   font-size: 18px;
   color: ${({ theme }) => theme.colors.white};
`;

export const ButtonContainer = styled.View`
   flex-direction: row;
   margin-top: 16px;
   justify-content: space-between;
`;

export const Separator = styled.View`
   width: 16px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
   background: ${({ theme, isConfirm }) =>
      isConfirm ? theme.colors.softRed : theme.colors.darkElements};
   padding: 16px;
   border-radius: 8px;
   flex: 1;
   align-items: center;
`;

export const ButtonLabel = styled.Text`
   color: ${({ theme }) => theme.colors.white};
   font-weight: bold;
   font-size: 16px;
`;
