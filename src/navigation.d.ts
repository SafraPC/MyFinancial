/* eslint-disable @typescript-eslint/no-empty-interface */
import { StackNavigationProp } from '@react-navigation/stack';
import { AppRoutes } from './navigation/types';

type NavigationType = StackNavigationProp<AppRoutes>;

declare global {
   namespace ReactNavigation {
      interface RootParamList extends AppRoutes {}
   }
}
