import { useCallback } from 'react';
import {
   CustomExpanseKey,
   userTransactionsStore,
} from '../../stores/userTransactions';

export interface HomeControllerInterface {
   salary: number;
   user: string;
   expanses: CustomExpanseKey[];
   setUser: (user: string) => void;
   changeExpanses: (expanses: CustomExpanseKey, index: number) => void;
   changeSalary: (salary: number) => void;
}

const HomeControler = (): HomeControllerInterface => {
   const { expanses, salary, setExpanses, setSalary, setUser, user } =
      userTransactionsStore();

   const changeExpanses = useCallback(
      (expansesData: CustomExpanseKey, index: number) => {
         const formattedExpanses = [...expanses];
         formattedExpanses[index] = expansesData;
         setExpanses(formattedExpanses);
      },
      [expanses, setExpanses]
   );

   const changeSalary = useCallback(
      (salary: number) => {
         setSalary(salary);
      },
      [salary, setSalary]
   );

   return {
      expanses,
      setUser,
      user,
      changeExpanses,
      changeSalary,
      salary,
   };
};

export { HomeControler };
