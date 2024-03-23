import React, { useEffect } from 'react';
import { HomeControllerInterface } from './Home.controller';
import Page from '../../components/Page';
import { useNavigation } from '@react-navigation/native';
import Field from './components/Field';
import { formatMoney } from '../../utils/masks';
import { CustomExpanseKey } from '../../stores/userTransactions';
import List from './components/List';

const sumValue = (acc: number, { value }: CustomExpanseKey) => acc + value;

const HomeView: React.FC<HomeControllerInterface> = ({
   expanses,
   user,
   earnings,
}) => {
   const navigation = useNavigation();

   useEffect(() => {
      navigation.setOptions({
         headerTitle: user && `Olá, ${user}!`,
      });
   }, [user]);

   const totalExpanses = expanses?.reduce(sumValue, 0) || 0;
   const salary = earnings?.reduce(sumValue, 0) || 0;

   return (
      <Page>
         <Field label="Salário" value={formatMoney(salary)} />
         <List
            data={earnings}
            emptyText="Você não possúi nenhum provento"
            title="Proventos"
         />
         <Field label="Total de despezas" value={formatMoney(totalExpanses)} />
         <List
            data={expanses}
            emptyText="Você não possúi nenhuma despesa"
            title="Despesas"
         />
      </Page>
   );
};

export { HomeView };
