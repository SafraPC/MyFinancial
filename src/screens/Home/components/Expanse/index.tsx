import React from 'react';
import { CustomExpanseKey } from '../../../../stores/userTransactions';
import { Container, DeleteContainer, Title, Value } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { formatMoney } from '../../../../utils/masks';

interface ExpanseProps {
   item: CustomExpanseKey;
}

const Card: React.FC<ExpanseProps> = ({ item }) => {
   return (
      <Container>
         <DeleteContainer>
            <Icon name="trash" size={16} color="#000" />
         </DeleteContainer>
         <Title>{item.key}</Title>
         <Value>R$ {formatMoney(item.value)}</Value>
      </Container>
   );
};

export { Card };
