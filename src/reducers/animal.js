//ANIMAL REDUCER
// takes in previous state of what animal was
// action will have action.payload of whatever changed to
// new state is set and react rerenders
export default function animal(state = "dog", action) {
  switch (action.type) {
    case "CHANGE_ANIMAL":
      return action.payload;
    default:
      return state;
  }
}
