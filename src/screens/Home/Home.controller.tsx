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
   changeEarnings: (expanses: CustomExpanseKey, index: number) => void;
   changeExpanses: (expanses: CustomExpanseKey, index: number) => void;
}

const HomeControler = (): HomeControllerInterface => {
   const { expanses, setExpanses, setUser, user, earnings, setEarnings } =
      userTransactionsStore();

   const changeExpanses = useCallback(
      (expansesData: CustomExpanseKey, index: number) => {
         const formattedExpanses = [...expanses];
         formattedExpanses[index] = expansesData;
         setExpanses(formattedExpanses);
      },
      [expanses, setExpanses]
   );

   const changeEarnings = useCallback(
      (expansesData: CustomExpanseKey, index: number) => {
         const formattedEarnings = [...earnings];
         formattedEarnings[index] = expansesData;
         setEarnings(formattedEarnings);
      },
      [expanses, setExpanses]
   );

   return {
      changeEarnings,
      earnings,
      expanses,
      setUser,
      user,
      changeExpanses,
   };
};

export { HomeControler };
