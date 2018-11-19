import { combineReducers } from "redux";
import location from "./location";
import animal from "./animal";
import breed from "./breed";
import breeds from "./breeds";

//helper function from redux -- keeps everything in order
//makes root reducer for you
export default combineReducers({
  location,
  animal,
  breed,
  breeds
});
