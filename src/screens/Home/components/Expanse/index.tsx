import React from 'react';
import { CustomExpanseKey } from '../../../../stores/userTransactions';
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
      </Container>
   );
};

export { Card };
