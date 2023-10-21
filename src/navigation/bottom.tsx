import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { iconAnimation, styles } from './styles';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { HomeStack } from './home';
import Icon from 'react-native-vector-icons/Ionicons';

const stackAnimation = {
   HomeStack: 0,
};

const BottomRoutes = () => {
   const Navigation = createBottomTabNavigator();
   const selectedTab = useSharedValue(0);
   const animateIcon = (index: number) => iconAnimation(index, selectedTab);

   return (
      <Navigation.Navigator
         screenOptions={styles}
         initialRouteName="HomeStack"
         screenListeners={{
            tabPress: ({ target }) => {
               const stackName = target?.split(
                  '-'
               )[0] as keyof typeof stackAnimation;
               selectedTab.value = stackAnimation[stackName];
            },
         }}>
         <Navigation.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
               title: 'Início',
               tabBarIcon: ({ focused }) => (
                  <Animated.View style={animateIcon(0)}>
                     <Icon
                        name={focused ? 'ios-home' : 'ios-home-outline'}
                        color="white"
                        size={20}
                     />
                  </Animated.View>
               ),
            }}
         />
      </Navigation.Navigator>
   );
};
export { BottomRoutes };
