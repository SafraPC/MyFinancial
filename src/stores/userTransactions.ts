import { create } from 'zustand';

export type CategoryType = 'Despesa' | 'Receita';

export interface Category {
   key: string;
   color: string;
   creditCard: string;
   subcategory: string;
}

export interface CustomExpanseKey {
   key: string;
   value: number;
   category?: Category;
}

export interface UserTransactionsStoreInterface {
   user: string;
   earnings: CustomExpanseKey[];
   fixedExpanses: CustomExpanseKey[];
   variableExpanses: CustomExpanseKey[];
   setUser: (user: string) => void;
   setVariableExpanses: (expanses: CustomExpanseKey[]) => void;
   setFixedExpanses: (expanses: CustomExpanseKey[]) => void;
   setEarnings: (earnings: CustomExpanseKey[]) => void;
}

const defaultValues = {
   salary: 0,
   earnings: [],
   fixedExpanses: [],
   variableExpanses: [],
   user: '',
};

export const userTransactionsStore = create<UserTransactionsStoreInterface>(
   set => ({
      ...defaultValues,
      setVariableExpanses: variableExpanses => set({ variableExpanses }),
      setFixedExpanses: fixedExpanses => set({ fixedExpanses }),
      setEarnings: earnings => set({ earnings }),
      setUser: user => set({ user }),
   })
);
