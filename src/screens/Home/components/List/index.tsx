import React from 'react';
import { FlatList, View } from 'react-native';
import { CustomExpanseKey } from '../../../../stores/tansactions';
import { EmptyContainer, EmptyText, Separator, Title } from '../../styles';
import { Card } from '../Expanse';
import { IconContainer, Row } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { SelectedKind, SelectedToDelete } from '../../Home.controller';

interface List {
   data: CustomExpanseKey[];
   title: string;
   emptyText: string;
   kind: SelectedKind;
   onSelectedToDelete: (item: SelectedToDelete) => void;
   handleAdd: (selectedToAdd: { kind: SelectedKind }) => void;
}

const List: React.FC<List> = ({
   data,
   emptyText,
   title,
   kind,
   onSelectedToDelete,
   handleAdd,
}) => {
   return (
      <View>
         <Row>
            <Title>{title}</Title>
            <IconContainer onPress={() => handleAdd({ kind })}>
               <Icon name="plus" size={16} color="#fff" />
            </IconContainer>
         </Row>
         <FlatList
            data={data}
            style={{ marginBottom: 32 }}
            contentContainerStyle={{
               marginVertical: 16,
            }}
            horizontal
            ItemSeparatorComponent={() => <Separator />}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={({ item, index }) => (
               <Card
                  item={item}
                  kind={kind}
                  index={index}
                  onSelectedToDelete={onSelectedToDelete}
               />
            )}
            ListEmptyComponent={
               <EmptyContainer>
                  <EmptyText>{emptyText}</EmptyText>
               </EmptyContainer>
            }
         />
      </View>
   );
};

export default List;
