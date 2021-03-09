import React from "react";
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import TinderCards from './TinderCards'

function App() {

  return (
    <div className="App">

      <Header />
      <Router>
        <Switch>
          <Route path="/ac">
            <h1>page d'accueuil</h1>
          </Route>
          <Route path="/chat">
            <TinderCards />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;


