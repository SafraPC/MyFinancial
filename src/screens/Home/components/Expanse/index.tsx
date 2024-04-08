import React from 'react';
import { CustomExpanseKey } from '../../../../stores/tansactions';
import { Container, DeleteContainer, Title, Value } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { formatMoney } from '../../../../utils/masks';
import { SelectedKind, SelectedToDelete } from '../../Home.view';

interface ExpanseProps {
   item: CustomExpanseKey;
   index: number;
   onSelectedToDelete: (item: SelectedToDelete) => void;
   kind: SelectedKind;
}

interface OptionalValueProps {
   value?: string;
   label?: string;
}

const OptionalValue = ({ value, label }: OptionalValueProps) => {
   if (!value) {
      return null;
   }

   return (
      <Value>
         {label}
         {value}
      </Value>
   );
};

const Card: React.FC<ExpanseProps> = ({
   item,
   index,
   kind,
   onSelectedToDelete,
}) => {
   return (
      <Container>
         <DeleteContainer
            onPress={() =>
               onSelectedToDelete({
                  item,
                  index,
                  kind,
               })
            }>
            <Icon name="trash" size={16} color="#000" />
         </DeleteContainer>
         <Title>{item.key}</Title>
         <Value>R$ {formatMoney(item.value)}</Value>
         <OptionalValue value={item?.category?.category} label="Categoria:" />
         <OptionalValue value={item?.category?.subcategory} label="Subcat..:" />
      </Container>
   );
};

export { Card };
