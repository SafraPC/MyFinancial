import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Container, ErrorText, InputText, Label, RequiredText } from './styles';

interface InputProps extends TextInputProps {
   title?: string;
   error?: string;
   required?: boolean;
   onFocused?: () => void;
   onBlured?: () => void;
}

const Input: React.FC<InputProps> = ({
   title,
   error,
   required,
   onFocused,
   onBlured,
   ...rest
}) => {
   const [isFocused, setIsFocused] = useState(false);
   return (
      <Container>
         {title ? (
            <Label>
               {title} {required ? <RequiredText>*</RequiredText> : null}
            </Label>
         ) : null}
         <InputText
            {...rest}
            isError={!!error}
            isFocused={isFocused}
            onFocus={() => {
               setIsFocused(true);
               onFocused?.();
            }}
            onBlur={() => {
               setIsFocused(false);
               onBlured?.();
            }}
         />
         {error && <ErrorText>{error}</ErrorText>}
      </Container>
   );
};

export { Input };
