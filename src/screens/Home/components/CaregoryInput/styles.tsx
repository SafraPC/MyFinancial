import styled from 'styled-components/native';

interface ContainerProps {
   isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
   z-index: ${({ isFocused }) => (isFocused ? 1 : 0)};
`;

export const RequiredText = styled.Text`
   font-size: 16px;
   color: ${({ theme }) => theme.colors.softRedLabel};
`;

export const Label = styled.Text`
   font-size: 16px;
   font-weight: bold;
   color: ${({ theme }) => theme.colors.white};
   margin-bottom: 8px;
`;

export const ErrorText = styled.Text`
   font-size: 14px;
   color: ${({ theme }) => theme.colors.softRedLabel};
   margin-top: 8px;
`;
