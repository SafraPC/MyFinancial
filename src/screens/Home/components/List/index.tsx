import React from 'react';
import { FlatList, View } from 'react-native';
import { CustomExpanseKey } from '../../../../stores/userTransactions';
import { EmptyContainer, EmptyText, Separator, Title } from '../../styles';
import { Card } from '../Expanse';

interface List {
   data: CustomExpanseKey[];
   title: string;
   emptyText: string;
}

const List: React.FC<List> = ({ data, emptyText, title }) => {
   return (
      <View>
         <Title>{title}</Title>
         <FlatList
            data={data}
            style={{ marginBottom: 32 }}
            contentContainerStyle={{
               marginTop: 16,
            }}
            horizontal={data.length > 0}
            ItemSeparatorComponent={() => <Separator />}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={({ item }) => <Card item={item} />}
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
