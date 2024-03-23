import { create } from 'zustand';

export interface CustomExpanseKey {
   key: string;
   value: number;
}

export interface UserTransactionsStoreInterface {
   user: string;
   expanses: CustomExpanseKey[];
   earnings: CustomExpanseKey[];
   setUser: (user: string) => void;
   setExpanses: (expanses: CustomExpanseKey[]) => void;
   setEarnings: (earnings: CustomExpanseKey[]) => void;
}

const defaultValues = {
   salary: 0,
   earnings: [
      {
         key: 'Empresa 1',
         value: 1000,
      },
      {
         key: 'Empresa 2',
         value: 1000,
      },
   ],
   expanses: [
      { key: 'Conta de água', value: 100 },
      { key: 'Conta de luz', value: 350 },
   ],
   user: '',
};

export const userTransactionsStore = create<UserTransactionsStoreInterface>(
   set => ({
      ...defaultValues,
      setEarnings: earnings => set({ earnings }),
      setExpanses: expanses => set({ expanses }),
      setUser: user => set({ user }),
   })
);
