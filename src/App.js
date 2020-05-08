import React from 'react';
import './App.css';

import DogsListContainer from './components/DogsListContainer';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={DogsListContainer} />
    </div>
  );
}

export default App;
