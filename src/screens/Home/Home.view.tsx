import React from 'react';
import { HomeControllerInterface } from './Home.controller';
import Page from '../../components/Page';
import Field from './components/Field';
import { formatMoney } from '../../utils/masks';
import List from './components/List';
import ModalSheet from '../../components/Modal';
import DeleteModal from './components/DeleteModal';

const HomeView: React.FC<HomeControllerInterface> = ({
   earnings,
   variableExpanses,
   fixedExpanses,
   defaultListOptions,
   removeOption,
   salary,
   totalExpanses,
   totalFixedExpanses,
   totalVariableExpanses,
   deleteModalRef,
   selectedToDelete,
}) => {
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

         {totalVariableExpanses > 0 && totalFixedExpanses > 0 ? (
            <Field
               label="Total de despezas"
               value={formatMoney(totalExpanses)}
            />
         ) : null}

         <ModalSheet
            title={`Deseja realmente remover: ${
               selectedToDelete?.item?.key || ''
            } ?`}
            ref={deleteModalRef}>
            <DeleteModal
               item={selectedToDelete}
               modalsheetRef={deleteModalRef}
               handleDelete={removeOption[selectedToDelete.kind]}
            />
         </ModalSheet>
      </Page>
   );
};

export { HomeView };
