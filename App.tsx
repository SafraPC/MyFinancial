import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { StatusBar } from 'expo-status-bar';
import AppNavigation from './src/navigation/index';

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <StatusBar style="light" />
         <AppNavigation />
      </ThemeProvider>
   );
};

export default App;
