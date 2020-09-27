import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Artists } from './pages/Artists/Artists'

import './App.scss';
import { ArtistReleases } from './pages/ArtistReleases/ArtistReleases';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Artists}/>
          <Route exact path="/artist/:id" component={ArtistReleases} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
