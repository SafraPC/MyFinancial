import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { iconAnimation, styles } from './styles';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { HomeStack } from './home';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RegisterStack } from './register';
import { VisionStack } from './vision';

const stackAnimation = {
   HomeStack: 0,
   VisionsStack: 1,
   RegisterStack: 2,
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

         <Navigation.Screen
            name="VisionsStack"
            component={VisionStack}
            options={{
               title: 'Visões',
               tabBarIcon: ({ focused }) => (
                  <Animated.View style={animateIcon(1)}>
                     <MaterialIcons
                        name={focused ? 'graph' : 'graph-outline'}
                        color="white"
                        size={24}
                     />
                  </Animated.View>
               ),
            }}
         />

         <Navigation.Screen
            name="RegisterStack"
            component={RegisterStack}
            options={{
               title: 'Cadastro Geral',
               tabBarIcon: ({ focused }) => (
                  <Animated.View style={animateIcon(2)}>
                     <Icon
                        name={focused ? 'folder' : 'folder-outline'}
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
