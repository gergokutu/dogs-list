import React from 'react';
import './App.css';

import DogsListContainer from './components/DogsListContainer';
import { Route } from 'react-router-dom';
import DogBreedImages from './components/DogBreedImages';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={DogsListContainer} />
      <Route path="/dog-breeds/:breed" component={DogBreedImages} />
    </div>
  );
}

export default App;
