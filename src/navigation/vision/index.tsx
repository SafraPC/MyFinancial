import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { defaultStackHeaderOptions } from '../../utils/defaultHeader';
import { Register } from '../../screens/Register';
import { Vision } from '../../screens/Vision';

const VisionStack = () => {
   const Stack = createNativeStackNavigator();

   return (
      <Stack.Navigator>
         <Stack.Screen
            name="vision"
            component={Vision}
            options={{
               title: '',
               ...defaultStackHeaderOptions,
            }}
         />
      </Stack.Navigator>
   );
};

export { VisionStack };
