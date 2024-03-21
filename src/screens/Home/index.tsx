import React from 'react';
import { HomeControler } from './Home.controller';
import { HomeView } from './Home.view';

const Home = () => {
   const controller = HomeControler();
   return <HomeView {...controller} />;
};

export { Home };
