import React from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "../../store";
import Results from "../Results/Results.js";
import Details from "../Details/Details.js";
import SearchParams from "../SearchParams/SearchParams.js";
// import Navbar from "./Navbar.js";
// import FourOhFour from "./FourOhFour.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            {/* <Navbar /> */}
            <SearchParams path="/" />
            <Results path="/results" />
            <Details path="/details/:id" />
            {/* <FourOhFour /> */}
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
