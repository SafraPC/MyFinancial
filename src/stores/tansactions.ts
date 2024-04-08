import { create } from 'zustand';
import {
   CategoryType,
   SubcategoryType,
} from '../screens/Home/application/categoriesTypes';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CategoryInterface {
   category?: CategoryType | undefined;
   subcategory?: SubcategoryType<CategoryType> | undefined;
}

export interface CustomExpanseKey {
   key: string;
   value: number;
   category?: CategoryInterface;
}

export interface transactionsStoreInterface {
   earnings: CustomExpanseKey[];
   fixedExpanses: CustomExpanseKey[];
   variableExpanses: CustomExpanseKey[];
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

export const transactionsStore = create(
   persist<transactionsStoreInterface>(
      set => ({
         ...defaultValues,
         setVariableExpanses: variableExpanses => set({ variableExpanses }),
         setFixedExpanses: fixedExpanses => set({ fixedExpanses }),
         setEarnings: earnings => set({ earnings }),
      }),
      {
         name: 'user-transactions-store',
         storage: createJSONStorage(() => AsyncStorage),
      }
   )
);
