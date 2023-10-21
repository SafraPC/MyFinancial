import React from 'react';
import { ButtonOpacity, ButtonText } from './styles';

interface ButtonProps {
   isDisabled?: boolean;
   text: string;
}

const Button: React.FC<ButtonProps> = ({ isDisabled, text }) => {
   return (
      <ButtonOpacity isDisabled={isDisabled} disabled={isDisabled}>
         <ButtonText isDisabled={isDisabled}>{text}</ButtonText>
      </ButtonOpacity>
   );
};

export default Button;
