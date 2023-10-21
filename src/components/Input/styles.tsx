import styled from 'styled-components/native';

interface InputProps {
   isError?: boolean;
   isFocused?: boolean;
}

export const Container = styled.View`
   margin-top: 16px;
`;

export const Label = styled.Text`
   font-size: 16px;
   font-weight: bold;
   color: ${({ theme }) => theme.colors.white};
   margin-bottom: 8px;
`;

export const InputText = styled.TextInput<InputProps>`
   height: 48px;
   background-color: ${({ theme }) => theme.colors.white};
   border-radius: 4px;
   padding: 0 16px;
   border: 2px solid
      ${({ theme, isError, isFocused }) => {
         if (isError) {
            return theme.colors.darkRed;
         }
         if (isFocused) {
            return theme.colors.inputFocus;
         }
         return theme.colors.gray;
      }};
`;

export const ErrorText = styled.Text`
   font-size: 14px;
   color: ${({ theme }) => theme.colors.softRedLabel};
   margin-top: 8px;
`;
