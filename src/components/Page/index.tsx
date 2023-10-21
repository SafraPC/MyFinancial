import React from 'react';
import { Container, Content } from './styles';

interface PageProps {
   children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
   return (
      <Container>
         <Content>{children}</Content>
      </Container>
   );
};

export default Page;
