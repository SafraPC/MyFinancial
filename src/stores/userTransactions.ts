import { create } from 'zustand';

type CustomExpanseKey = {
   key: string;
   value: number;
};

export interface UserTransactionsStoreInterface {
   salary: number;
   fixedExpanses: CustomExpanseKey;
   happenningExpanses: CustomExpanseKey;
   setSalary: (salary: number) => void;
   setFixedExpanses: (expanses: CustomExpanseKey) => void;
   setHappenningExpanses: (expanses: CustomExpanseKey) => void;
}

const defaultValues = {
   salary: 0,
   fixedExpanses: {
      key: '',
      value: 0,
   },
   happenningExpanses: {
      key: '',
      value: 0,
   },
};

export const userTransactionsStore = create<UserTransactionsStoreInterface>(
   set => ({
      ...defaultValues,
      setSalary: (salary: number) => set({ salary }),
      setFixedExpanses: (expanses: CustomExpanseKey) =>
         set({ fixedExpanses: expanses }),
      setHappenningExpanses: (expanses: CustomExpanseKey) =>
         set({ happenningExpanses: expanses }),
   })
);
