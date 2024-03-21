import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../screens/Home';
import { defaultStackHeaderOptions } from '../../utils/defaultHeader';

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
      </Stack.Navigator>
   );
};

export { HomeStack };
