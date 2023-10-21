import styled from 'styled-components/native';

interface IButtonProps {
   isDisabled?: boolean;
}

export const ButtonOpacity = styled.TouchableOpacity<IButtonProps>`
   background-color: ${({ theme, isDisabled }) => {
      if (isDisabled) {
         return theme.colors.disabledwhite;
      }
      return theme.colors.white;
   }};
   border-radius: 4px;
   padding: 16px;
   align-items: center;
   justify-content: center;
`;

export const ButtonText = styled.Text<IButtonProps>`
   color: ${({ theme, isDisabled }) => {
      if (isDisabled) {
         return theme.colors.text;
      }
      return theme.colors.primary;
   }};
   font-size: 16px;
   font-weight: bold;
`;
