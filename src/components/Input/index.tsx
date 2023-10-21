import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Container, ErrorText, InputText, Label } from './styles';

interface InputProps extends TextInputProps {
   title?: string;
   error?: string;
}

const Input: React.FC<InputProps> = ({ title, error, ...rest }) => {
   const [isFocused, setIsFocused] = useState(false);
   return (
      <Container>
         {title && <Label> {title}</Label>}
         <InputText
            {...rest}
            isError={!!error}
            isFocused={isFocused}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
         />
         {error && <ErrorText>{error}</ErrorText>}
      </Container>
   );
};

export { Input };
