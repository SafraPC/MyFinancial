import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../screens/Home';
import { defaultStackHeaderOptions } from '../../utils/defaultHeader';
import { CreateData } from '../../screens/CreateData';

const HomeStack = () => {
   const Stack = createNativeStackNavigator();

   return (
      <Stack.Navigator>
         <Stack.Screen
            name="home"
            component={Home}
            options={{
               title: '',
               ...defaultStackHeaderOptions,
            }}
         />
         <Stack.Screen
            name="createData"
            component={CreateData}
            options={{
               title: '',
               ...defaultStackHeaderOptions,
            }}
         />
      </Stack.Navigator>
   );
};

export { HomeStack };
