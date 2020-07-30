import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeOut from './home-out';
import HomeOn from './home-on';
import ElectionPage from './election-page';
import ResultsPage from './results-page'

import {db,auth} from './firebase/firestore'

function App() {



  return (
   <BrowserRouter>
      <Switch>
      <Route path='/' exact component={HomeOut}/>
      <Route path='/home' exact component={HomeOn}/>
      <Route path='/home/:id'  component={ElectionPage}/>
      <Route path='/results/:id' component={ResultsPage}/>
      </Switch>
   </BrowserRouter>
  );
}

export default App;
