import React from 'react';
import { FlatList, View } from 'react-native';
import { CustomExpanseKey } from '../../../../stores/userTransactions';
import { EmptyContainer, EmptyText, Separator, Title } from '../../styles';
import { Card } from '../Expanse';
import { SelectedKind, SelectedToDelete } from '../../Home.view';
import { IconContainer, Row } from './styles';
import Icon from 'react-native-vector-icons/Feather';

interface List {
   data: CustomExpanseKey[];
   title: string;
   emptyText: string;
   kind: SelectedKind;
   onSelectedToDelete: (item: SelectedToDelete) => void;
   onSelectedToAdd: (item: { kind: SelectedKind; isShowing: boolean }) => void;
}

const List: React.FC<List> = ({
   data,
   emptyText,
   title,
   kind,
   onSelectedToDelete,
   onSelectedToAdd,
}) => {
   return (
      <View>
         <Row>
            <Title>{title}</Title>
            <IconContainer
               onPress={() => {
                  onSelectedToAdd({
                     isShowing: true,
                     kind,
                  });
               }}>
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
