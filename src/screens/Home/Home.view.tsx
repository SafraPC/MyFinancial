import React, { useEffect, useState } from 'react';
import { HomeControllerInterface } from './Home.controller';
import Page from '../../components/Page';
import { useNavigation } from '@react-navigation/native';
import Field from './components/Field';
import { formatMoney } from '../../utils/masks';
import { CustomExpanseKey } from '../../stores/userTransactions';
import List from './components/List';
import ModalSheet, { ModalSheetProps } from '../../components/Modal';
import DeleteModal from './components/DeleteModal';

export type SelectedKind = 'earning' | 'variableExpanse' | 'fixedExpanse';

export interface SelectedToDelete {
   item: CustomExpanseKey;
   index: number;
   kind: SelectedKind;
}

const sumValue = (acc: number, { value }: CustomExpanseKey) => acc + value;

const HomeView: React.FC<HomeControllerInterface> = ({
   user,
   earnings,
   removeEarning,
   variableExpanses,
   fixedExpanses,
   removeFixedExpanses,
   removeVariableExpanses,
   addEarning,
   addFixedExpanse,
   addVariableExpanse,
}) => {
   const navigation = useNavigation();
   const deleteModalRef = React.useRef<ModalSheetProps>(null);
   const [selectedToDelete, setSelectedToDelete] = useState<SelectedToDelete>({
      index: 0,
      item: { key: '', value: 0 },
      kind: 'earning',
   });

   const [selectedToAdd, setSelectedToAdd] = useState<{
      kind: SelectedKind;
      isShowing: boolean;
   }>({
      kind: 'earning',
      isShowing: false,
   });

   useEffect(() => {
      navigation.setOptions({
         headerTitle: user && `Olá, ${user}!`,
      });
   }, [user]);

   useEffect(() => {
      if (!selectedToDelete?.item?.key) return;
      deleteModalRef.current?.open();
   }, [selectedToDelete]);

   useEffect(() => {
      if (!selectedToAdd?.isShowing) return;
      navigation.navigate('createData', {
         handleAdd: selectedAddOption.add,
         isEarning: selectedToAdd.kind === 'earning',
         selectedAddOption,
      });
   }, [selectedToAdd]);

   const { item: selectedItem, kind: selectedKind } = selectedToDelete;

   const addOption = {
      earning: {
         add: addEarning,
         title: 'Adicionar Provento',
      },
      fixedExpanse: {
         add: addFixedExpanse,
         title: 'Adicionar Despesa Fixa',
      },
      variableExpanse: {
         add: addVariableExpanse,
         title: 'Adicionar Despesa Variável',
      },
   };

   const selectedAddOption = addOption[selectedToAdd.kind as SelectedKind];

   const defaultListOptions = {
      onSelectedToAdd: setSelectedToAdd,
      onSelectedToDelete: setSelectedToDelete,
   };

   const removeOption = {
      earning: removeEarning,
      fixedExpanse: removeFixedExpanses,
      variableExpanse: removeVariableExpanses,
   };

   const totalFixedExpanses = fixedExpanses?.reduce(sumValue, 0) || 0;
   const totalVariableExpanses = variableExpanses?.reduce(sumValue, 0) || 0;
   const salary = earnings?.reduce(sumValue, 0) || 0;
   const totalExpanses = totalFixedExpanses + totalVariableExpanses;

   return (
      <Page>
         <Field label="Salário" value={formatMoney(salary)} />
         <List
            {...defaultListOptions}
            data={earnings}
            kind="earning"
            emptyText="Você não possúi nenhum provento"
            title="Proventos"
         />

         <Field
            label="Total de despezas fixas"
            value={formatMoney(totalFixedExpanses)}
         />
         <List
            {...defaultListOptions}
            data={fixedExpanses}
            kind="fixedExpanse"
            emptyText="Você não possúi nenhuma despesa fixa"
            title="Despesas Fixas"
         />

         <Field
            label="Total de despezas variaveis"
            value={formatMoney(totalVariableExpanses)}
         />

         <List
            {...defaultListOptions}
            data={variableExpanses}
            kind="variableExpanse"
            emptyText="Você não possúi nenhuma despesa variável"
            title="Despesas Variáveis"
         />

         <Field label="Total de despezas" value={formatMoney(totalExpanses)} />

         <ModalSheet
            title={`Deseja realmente remover: ${selectedItem.key} ?`}
            ref={deleteModalRef}>
            <DeleteModal
               item={selectedToDelete}
               modalsheetRef={deleteModalRef}
               handleDelete={removeOption[selectedKind]}
            />
         </ModalSheet>
      </Page>
   );
};

export { HomeView };
