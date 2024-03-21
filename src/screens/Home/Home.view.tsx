import React, { useEffect } from 'react';
import { HomeControllerInterface } from './Home.controller';
import Page from '../../components/Page';
import { Label, ElementContainer, ElementText, Separator } from './styles';
import { useNavigation } from '@react-navigation/native';

const HomeView: React.FC<HomeControllerInterface> = ({
   changeExpanses,
   changeSalary,
   expanses,
   setUser,
   user,
   salary,
}) => {
   const navigation = useNavigation();

   useEffect(() => {
      navigation.setOptions({
         headerTitle: user && `Olá, ${user}!`,
      });
   }, [user]);

   return (
      <Page>
         <Label>Salário</Label>
         <ElementContainer>
            <ElementText>R$ {salary}</ElementText>
         </ElementContainer>
         <Separator />
         <Label>Total de desdepezas</Label>
         <ElementContainer>
            <ElementText>R$ -</ElementText>
         </ElementContainer>
      </Page>
   );
};

export { HomeView };
