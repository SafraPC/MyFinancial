import { useCallback } from 'react';
import {
   CustomExpanseKey,
   userTransactionsStore,
} from '../../stores/userTransactions';

export interface HomeControllerInterface {
   user: string;
   expanses: CustomExpanseKey[];
   earnings: CustomExpanseKey[];
   setUser: (user: string) => void;
   removeEarning: (index: number) => void;
   removeExpanse: (index: number) => void;
}

const HomeControler = (): HomeControllerInterface => {
   const { expanses, setExpanses, setUser, user, earnings, setEarnings } =
      userTransactionsStore();

   const removeExpanse = useCallback(
      (index: number) => {
         const newExpanses = expanses.filter((_, i) => i !== index);
         setExpanses(newExpanses);
      },
      [expanses, setExpanses]
   );

   const removeEarning = useCallback(
      (index: number) => {
         const newEarnings = earnings.filter((_, i) => i !== index);
         setEarnings(newEarnings);
      },
      [earnings, setExpanses]
   );

   return {
      removeEarning,
      earnings,
      expanses,
      setUser,
      user,
      removeExpanse,
   };
};

export { HomeControler };
