import { useState } from 'react';
import { userTransactionsStore } from '../../stores/userTransactions';

type ErrorTypes = 'hasntDataYet' | '';

export interface HomeControllerInterface {
   error: ErrorTypes;
   salary: number;
   fixedExpanses: {};
}

const HomeControler = (): HomeControllerInterface => {
   const { fixedExpanses, salary } = userTransactionsStore();
   const [error, setError] = useState<ErrorTypes>('');

   if (!salary && error !== 'hasntDataYet') {
      setError('hasntDataYet');
   }

   return {
      error,
      salary,
      fixedExpanses,
   };
};

export { HomeControler };
