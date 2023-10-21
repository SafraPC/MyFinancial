import React from 'react';
import Page from '../../../../components/Page';
import { Centered, HasntDataContent, Title } from '../../styles';
import Button from '../../../../components/Button/índex';

const HasntDataYet: React.FC = () => {
   return (
      <Page>
         <Centered>
            <Title>
               Você ainda não possui dados suficientes para continuar! Por
               favor, adicione seus gastos fixos e salário.
            </Title>
            <HasntDataContent>
               <Button text="Adicionar dados" />
            </HasntDataContent>
         </Centered>
      </Page>
   );
};

export default HasntDataYet;
