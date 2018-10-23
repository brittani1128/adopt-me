import React from "react";
import { render } from "react-dom";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Results from "./Results.js";
import FourOhFour from "./FourOhFour.js";
import Details from "./Details.js";

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Switch>
          <Route exact path="/" component={Results} />
          <Route path="/details/:id" component={Details} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

render(<App />, document.getElementById("root"));
