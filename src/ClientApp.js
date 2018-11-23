import React from "react";
import { hydrate } from "react-dom";
import App from "./components/App/App";

//new entry point into application
hydrate(<App />, document.getElementById("root"));
