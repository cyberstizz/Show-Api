import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/home';
import Horror from './components/horror';
import About from './components/about';
import Comedy from './components/comedy';
import Drama from './components/drama';
import Action from './components/action';


function App() {
  return (
  <Router> 
    <div>
      <Home />
    <Switch>
     <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Comedy" component={Comedy} />
    <Route path="/Horror" component={Horror} />
    <Route path="/Action" component={Action} />
    <Route path="/Drama" component={Drama} /> 
    </Switch>
    </div>
  </Router>
  );
}

export default App;
