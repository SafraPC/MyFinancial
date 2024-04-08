import { CustomExpanseKey } from '../stores/tansactions';

export type AppRoutes = {
   home: undefined;
   createData: {
      handleAdd: (item: CustomExpanseKey) => void;
      isEarning: boolean;
      selectedAddOption: {
         add: (item: CustomExpanseKey) => void;
         title: string;
      };
   };
};
