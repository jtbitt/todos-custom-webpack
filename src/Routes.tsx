import { lazy } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

const Todos = lazy(() => import('@modules/todos'));

export const Routes = () => (
  <Switch>
    <Route path="/" element={<Todos />} />
  </Switch>
);
