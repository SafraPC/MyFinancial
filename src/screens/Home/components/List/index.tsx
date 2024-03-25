import React from 'react';
import { FlatList, View } from 'react-native';
import { CustomExpanseKey } from '../../../../stores/userTransactions';
import { EmptyContainer, EmptyText, Separator, Title } from '../../styles';
import { Card } from '../Expanse';
import { SelectedKind, SelectedToDelete } from '../../Home.view';

interface List {
   data: CustomExpanseKey[];
   title: string;
   emptyText: string;
   kind: SelectedKind;
   onSelectedToDelete: (item: SelectedToDelete) => void;
}

const List: React.FC<List> = ({
   data,
   emptyText,
   title,
   kind,
   onSelectedToDelete,
}) => {
   return (
      <View>
         <Title>{title}</Title>
         <FlatList
            data={data}
            style={{ marginBottom: 32 }}
            contentContainerStyle={{
               marginTop: 16,
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
            ListEmptyComponent={() => (
               <EmptyContainer>
                  <EmptyText>{emptyText}</EmptyText>
               </EmptyContainer>
            )}
         />
      </View>
   );
};

export default List;
