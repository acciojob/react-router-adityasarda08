import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/about">About</Link>
            </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;