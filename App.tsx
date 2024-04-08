import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { StatusBar } from 'expo-status-bar';
import AppNavigation from './src/navigation/index';
import { LogBox } from 'react-native';

const ignoreLogs = [
   'Non-serializable values were found in the navigation state',
];

const App = () => {
   useEffect(() => {
      LogBox.ignoreLogs(ignoreLogs);
   }, []);

   return (
      <ThemeProvider theme={theme}>
         <StatusBar style="light" />
         <AppNavigation />
      </ThemeProvider>
   );
};

export default App;
