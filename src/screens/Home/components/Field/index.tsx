import React from 'react';
import { ElementContainer, ElementText, Label, Separator } from '../../styles';
import { AddButton } from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

interface FieldProps {
   value: string | number;
   label: string;
   onPress?: () => void;
}

const Field: React.FC<FieldProps> = ({ label, value, onPress }) => {
   if (!value || String(value) === '0.00') return null;
   return (
      <>
         <Label>{label}</Label>
         <ElementContainer>
            <ElementText>R$ {value}</ElementText>
            {onPress ? (
               <AddButton onPress={onPress}>
                  <Icon name="edit" size={20} color="#fff" />
               </AddButton>
            ) : null}
         </ElementContainer>
         <Separator />
      </>
   );
};

export default Field;
