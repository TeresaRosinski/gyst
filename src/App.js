import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../src/pages/home";
import Values from "../src/pages/values";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/values" component={Values} />
        </Switch>
      
    </Router>
  );
}

export default App;
