import React, { useTheme } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Project1 from './DijkstraAlg/Project1';
import LandingPage from './LandingPage';
import Error from './Error'



function App() {
  return (
    <BrowserRouter>
    <Switch>

      <Route exact path='/Project1' component={Project1} />
      <Route exact path='/' component={LandingPage} />
      <Route component={Error} />

    </Switch>
    </BrowserRouter>
  );
}

export default App;


