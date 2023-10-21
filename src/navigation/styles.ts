import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import {
   SharedValue,
   useAnimatedReaction,
   useAnimatedStyle,
   useSharedValue,
   withSpring,
} from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.primary};
`;

export const styles: BottomTabNavigationOptions = {
   headerShown: false,
   tabBarActiveTintColor: 'white',
   tabBarLabelStyle: {
      fontSize: 10,
      fontWeight: 'bold',
   },

   tabBarStyle: {
      opacity: 0.8,
      backgroundColor: 'black',
      borderTopWidth: 0,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
   },
   tabBarItemStyle: {
      marginTop: 5,
   },
};

export const iconAnimation = (
   index: number,
   selectedTab: SharedValue<number>
) => {
   const scale = useSharedValue(1);

   useAnimatedReaction(
      () => {
         return selectedTab.value === index;
      },
      isCurrentTabSelected => {
         scale.value = withSpring(isCurrentTabSelected ? 1.2 : 1);
      }
   );

   const animatedStyle = useAnimatedStyle(() => {
      return {
         transform: [{ scale: scale.value }],
      };
   });

   return animatedStyle;
};
