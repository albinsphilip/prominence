import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import Contact from './components/Contact';
//add and modify other codes above and below

const App=()=>{
  return(
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/" exactcomponent={Home}/>
          <Route path="/events" exactcomponent={Events}/>
          <Route path="/contact" exactcomponent={Contact}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
  
