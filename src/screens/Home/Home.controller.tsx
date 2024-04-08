import { useCallback, useEffect, useRef, useState } from 'react';
import { CustomExpanseKey, transactionsStore } from '../../stores/tansactions';
import { useNavigation } from '@react-navigation/native';
import { ModalSheetProps } from '../../components/Modal';

export type SelectedKind = 'earning' | 'variableExpanse' | 'fixedExpanse';

export interface SelectedToDelete {
   item: CustomExpanseKey;
   index: number;
   kind: SelectedKind;
}

export interface SelectedToAdd {
   kind: SelectedKind;
}

export interface HomeControllerInterface {
   fixedExpanses: CustomExpanseKey[];
   earnings: CustomExpanseKey[];
   variableExpanses: CustomExpanseKey[];
   defaultListOptions: {
      onSelectedToDelete: React.Dispatch<
         React.SetStateAction<SelectedToDelete>
      >;
      handleAdd: (selectedToAdd: { kind: SelectedKind }) => void;
   };
   salary: number;
   totalFixedExpanses: number;
   totalVariableExpanses: number;
   totalExpanses: number;
   removeOption: {
      earning: (index: number) => void;
      fixedExpanse: (index: number) => void;
      variableExpanse: (index: number) => void;
   };
   deleteModalRef: React.RefObject<ModalSheetProps>;
   selectedToDelete: SelectedToDelete;
}

const defaultSelectedToDelete: SelectedToDelete = {
   index: 0,
   item: { key: '', value: 0 },
   kind: 'earning',
};

const sumValue = (acc: number, { value }: CustomExpanseKey) => acc + value;

const HomeControler = (): HomeControllerInterface => {
   const {
      earnings,
      setEarnings,
      fixedExpanses,
      setFixedExpanses,
      setVariableExpanses,
      variableExpanses,
   } = transactionsStore();
   const deleteModalRef = useRef<ModalSheetProps>(null);

   const [selectedToDelete, setSelectedToDelete] = useState<SelectedToDelete>(
      defaultSelectedToDelete
   );

   const navigation = useNavigation();

   const removeFixedExpanses = useCallback(
      (index: number) => {
         const newExpanses = fixedExpanses.filter((_, i) => i !== index);
         setFixedExpanses(newExpanses);
      },
      [fixedExpanses, setFixedExpanses]
   );

   const removeEarning = useCallback(
      (index: number) => {
         const newEarnings = earnings.filter((_, i) => i !== index);
         setEarnings(newEarnings);
      },
      [earnings, setEarnings]
   );

   const removeVariableExpanses = useCallback(
      (index: number) => {
         const newExpanses = variableExpanses.filter((_, i) => i !== index);
         setVariableExpanses(newExpanses);
      },
      [variableExpanses, setVariableExpanses]
   );

   const addEarning = useCallback(
      (earning: CustomExpanseKey) => {
         setEarnings([...earnings, earning]);
         navigation.goBack();
      },
      [earnings, setEarnings]
   );

   const addFixedExpanse = useCallback(
      (fixedExpanse: CustomExpanseKey) => {
         setFixedExpanses([...fixedExpanses, fixedExpanse]);
         navigation.goBack();
      },
      [fixedExpanses, setFixedExpanses]
   );

   const addVariableExpanse = useCallback(
      (variableExpanse: CustomExpanseKey) => {
         setVariableExpanses([...variableExpanses, variableExpanse]);
         navigation.goBack();
      },
      [variableExpanses, setVariableExpanses]
   );

   const handleAdd = useCallback(
      (selectedToAdd: { kind: SelectedKind }) => {
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
         const selectedAddOption =
            addOption[selectedToAdd.kind as SelectedKind];

         navigation.navigate('createData', {
            handleAdd: selectedAddOption.add,
            isEarning: selectedToAdd.kind === 'earning',
            selectedAddOption,
         });
      },
      [addEarning, addFixedExpanse, addVariableExpanse, navigation]
   );

   useEffect(() => {
      if (!selectedToDelete?.item?.key) return;
      deleteModalRef.current?.open();
   }, [selectedToDelete]);

   const defaultListOptions = {
      handleAdd,
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

   return {
      variableExpanses,
      earnings,
      fixedExpanses,
      defaultListOptions,
      removeOption,
      salary,
      totalExpanses,
      totalFixedExpanses,
      totalVariableExpanses,
      deleteModalRef,
      selectedToDelete,
   };
};

export { HomeControler };
