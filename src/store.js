import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

//Redux store - ability to use devtools and thunk extension
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    //from redux documentation
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;
