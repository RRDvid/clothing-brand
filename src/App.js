import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx'
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component.jsx'

import './App.css';



function App() {
  return (
    <div> 
      <Switch>
    <Route  exact = 'true' path = '/' component = {HomePage}   />
    <Route path = '/shop' component = {ShopPage} />
    </Switch> 
    </div>
  );
}

export default App;
