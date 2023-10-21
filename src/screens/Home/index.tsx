import React from 'react';
import Page from '../../components/Page';
import { Title } from './styles';
import { HomeControler } from './Home.controller';
import Button from '../../components/Button/índex';
import HasntDataYet from './components/HasntDataYet';

const Home = () => {
   const { error, fixedExpanses, salary } = HomeControler();

   if (error === 'hasntDataYet') {
      return <HasntDataYet />;
   }

   return (
      <Page>
         <Title>Olá mundo!</Title>
      </Page>
   );
};

export { Home };
