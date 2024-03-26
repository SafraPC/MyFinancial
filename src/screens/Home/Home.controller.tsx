import { useCallback } from 'react';
import {
   CustomExpanseKey,
   userTransactionsStore,
} from '../../stores/userTransactions';

export interface HomeControllerInterface {
   user: string;
   fixedExpanses: CustomExpanseKey[];
   earnings: CustomExpanseKey[];
   variableExpanses: CustomExpanseKey[];
   setUser: (user: string) => void;
   removeEarning: (index: number) => void;
   removeFixedExpanses: (index: number) => void;
   removeVariableExpanses: (index: number) => void;
   addEarning: (earning: CustomExpanseKey) => void;
   addFixedExpanse: (fixedExpanse: CustomExpanseKey) => void;
   addVariableExpanse: (variableExpanse: CustomExpanseKey) => void;
}

const HomeControler = (): HomeControllerInterface => {
   const {
      setUser,
      user,
      earnings,
      setEarnings,
      fixedExpanses,
      setFixedExpanses,
      setVariableExpanses,
      variableExpanses,
   } = userTransactionsStore();

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
      },
      [earnings, setEarnings]
   );

   const addFixedExpanse = useCallback(
      (fixedExpanse: CustomExpanseKey) => {
         setFixedExpanses([...fixedExpanses, fixedExpanse]);
      },
      [fixedExpanses, setFixedExpanses]
   );

   const addVariableExpanse = useCallback(
      (variableExpanse: CustomExpanseKey) => {
         setVariableExpanses([...variableExpanses, variableExpanse]);
      },
      [variableExpanses, setVariableExpanses]
   );

   return {
      variableExpanses,
      removeEarning,
      earnings,
      setUser,
      user,
      fixedExpanses,
      removeFixedExpanses,
      removeVariableExpanses,
      addEarning,
      addFixedExpanse,
      addVariableExpanse,
   };
};

export { HomeControler };
