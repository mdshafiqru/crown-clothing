import React from 'react';
import HomePage from './pages/homepage/homepage'
import { Switch, Route } from 'react-router-dom'

import './App.css';

const Shop = () => (
  <div>
    <h1>SHOP Page</h1>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
        <Route exact path ='/' component={HomePage} />
        <Route exact path ='/shop' component ={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
