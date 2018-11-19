export default function breeds(state = [], action) {
  switch (action.type) {
    case "CHANGE_BREEDS":
      return action.payload; // returns new list of dog breeds
    default:
      return state;
  }
}
