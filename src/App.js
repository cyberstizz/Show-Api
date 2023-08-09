// imports include the requirements for react the main css file and the components

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/home';
// import Horror from './components/horror';
// import About from './components/about';
// import Comedy from './components/comedy';
// import Drama from './components/drama';
// import Action from './components/action';


function App() {
  return (
    // the router component wraps the entire component letting React router to work
  <Router> 
    <div>

  {/* the switch component is used to make each page accesible to react router */}
        <Switch>
          {/* each route was setup to correspond to a page on the website */}
            <Route exact path="/" component={Home} />
            {/* <Route path="/About" component={About} />
            <Route path="/Comedy" component={Comedy} />
            <Route path="/Horror" component={Horror} />
            <Route path="/Action" component={Action} />
            <Route path="/Drama" component={Drama} />  */}
        </Switch>
    </div>
  </Router>
  );
}

export default App;
