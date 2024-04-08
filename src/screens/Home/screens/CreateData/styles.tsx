import styled from 'styled-components/native';

interface ButtonProps {
   isConfirm?: boolean;
}

export const Container = styled.View`
   flex: 1;
`;

export const Description = styled.Text`
   font-size: 18px;
   color: ${({ theme }) => theme.colors.white};
`;

export const ScreenSeparator = styled.View`
   flex: 1;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
   background: ${({ theme, isConfirm }) =>
      isConfirm ? theme.colors.softRed : theme.colors.darkElements};
   border-radius: 8px;
   padding: 16px;
   justify-content: center;
   align-items: center;
`;

export const ButtonLabel = styled.Text`
   color: ${({ theme }) => theme.colors.white};
   font-weight: bold;
   font-size: 16px;
   text-align: center;
`;
