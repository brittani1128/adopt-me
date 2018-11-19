import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Results from "./Results.js";
import FourOhFour from "./FourOhFour.js";
import Details from "./Details.js";
import SearchParams from "./SearchParams.js";
import Navbar from "./Navbar.js";
// import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/" component={SearchParams} />
                <Route exact path="/results" component={Results} />
                <Route path="/details/:id" component={Details} />
                <Route component={FourOhFour} />
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
