import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { defaultStackHeaderOptions } from '../../utils/defaultHeader';
import { Register } from '../../screens/Register';

const RegisterStack = () => {
   const Stack = createNativeStackNavigator();

   return (
      <Stack.Navigator>
         <Stack.Screen
            name="register"
            component={Register}
            options={{
               title: '',
               ...defaultStackHeaderOptions,
            }}
         />
      </Stack.Navigator>
   );
};

export { RegisterStack };
