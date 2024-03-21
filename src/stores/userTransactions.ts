import { create } from 'zustand';

export interface CustomExpanseKey {
   key: string;
   value: number;
}

export interface UserTransactionsStoreInterface {
   user: string;
   salary: number;
   expanses: CustomExpanseKey[];
   setSalary: (salary: number) => void;
   setUser: (user: string) => void;
   setExpanses: (expanses: CustomExpanseKey[]) => void;
}

const defaultValues = {
   salary: 0,
   expanses: [],
   user: '',
};

export const userTransactionsStore = create<UserTransactionsStoreInterface>(
   set => ({
      ...defaultValues,
      setUser: user => set({ user }),
      setSalary: salary => set({ salary }),
      setExpanses: expanses => set({ expanses }),
   })
);
