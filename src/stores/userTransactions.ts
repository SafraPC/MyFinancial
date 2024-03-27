import { create } from 'zustand';
import {
   CategoryType,
   SubcategoryType,
} from '../screens/Home/application/categoriesTypes';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CategoryInterface {
   category?: CategoryType;
   cardName?: string;
   subcategory?: SubcategoryType<CategoryType>;
}

export interface CustomExpanseKey {
   key: string;
   value: number;
   category?: CategoryInterface;
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

export const userTransactionsStore = create(
   persist<UserTransactionsStoreInterface>(
      set => ({
         ...defaultValues,
         setVariableExpanses: variableExpanses => set({ variableExpanses }),
         setFixedExpanses: fixedExpanses => set({ fixedExpanses }),
         setEarnings: earnings => set({ earnings }),
         setUser: user => set({ user }),
      }),
      {
         name: 'user-transactions-store',
         storage: createJSONStorage(() => AsyncStorage),
      }
   )
);
