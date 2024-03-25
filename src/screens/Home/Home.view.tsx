import React, { useEffect, useState } from 'react';
import { HomeControllerInterface } from './Home.controller';
import Page from '../../components/Page';
import { useNavigation } from '@react-navigation/native';
import Field from './components/Field';
import { formatMoney } from '../../utils/masks';
import { CustomExpanseKey } from '../../stores/userTransactions';
import List from './components/List';
import { BottomSheetProps } from '../../components/BottomSheet';
import ModalSheet from '../../components/Modal';
import Modal from './components/Modal';

export type SelectedKind = 'earning' | 'expanse';

export interface SelectedToDelete {
   item: CustomExpanseKey;
   index: number;
   kind: SelectedKind;
}

const sumValue = (acc: number, { value }: CustomExpanseKey) => acc + value;

const HomeView: React.FC<HomeControllerInterface> = ({
   expanses,
   user,
   earnings,
   removeEarning,
   removeExpanse,
}) => {
   const navigation = useNavigation();
   const bottomSheetRef = React.useRef<BottomSheetProps>(null);
   const [selectedToDelete, setSelectedToDelete] = useState<SelectedToDelete>({
      index: 0,
      item: { key: '', value: 0 },
      kind: 'earning',
   });

   useEffect(() => {
      navigation.setOptions({
         headerTitle: user && `Olá, ${user}!`,
      });
   }, [user]);

   useEffect(() => {
      if (!selectedToDelete.item.key) return;
      bottomSheetRef.current?.open();
   }, [selectedToDelete]);

   const totalExpanses = expanses?.reduce(sumValue, 0) || 0;
   const salary = earnings?.reduce(sumValue, 0) || 0;
   console.log(expanses, earnings);
   const { item: selectedItem, kind: selectedKind } = selectedToDelete;

   return (
      <Page>
         <Field label="Salário" value={formatMoney(salary)} />
         <List
            onSelectedToDelete={setSelectedToDelete}
            data={earnings}
            kind="earning"
            emptyText="Você não possúi nenhum provento"
            title="Proventos"
         />
         <Field label="Total de despezas" value={formatMoney(totalExpanses)} />
         <List
            onSelectedToDelete={setSelectedToDelete}
            data={expanses}
            kind="expanse"
            emptyText="Você não possúi nenhuma despesa"
            title="Despesas"
         />
         <ModalSheet
            title={`Deseja realmente remover: ${selectedItem.key} ?`}
            ref={bottomSheetRef}>
            <Modal
               item={selectedToDelete}
               bottomSheetRef={bottomSheetRef}
               handleDelete={
                  selectedKind === 'earning' ? removeEarning : removeExpanse
               }
            />
         </ModalSheet>
      </Page>
   );
};

export { HomeView };
