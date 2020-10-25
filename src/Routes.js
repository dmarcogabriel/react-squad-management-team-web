import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import NewSquad from './pages/NewSquad';

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={Dashboard} />
    <Route path="/create" component={NewSquad} />
  </BrowserRouter>
);

export default Routes;
