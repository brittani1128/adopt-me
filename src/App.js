import React from "react";
import { Router } from "@reach/router";
import Results from "./Results.js";
// import FourOhFour from "./FourOhFour.js";
import Details from "./Details.js";
import SearchParams from "./SearchParams.js";
// import Navbar from "./Navbar.js";
// import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            {/* <Navbar /> */}
            <Results path="/results" />
            <Details path="/details/:id" />
            <SearchParams path="/" />
            {/* <FourOhFour /> */}
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
