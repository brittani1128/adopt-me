export default function changeLocation(location) {
  return { type: "CHANGE_LOCATION", payload: location };
}

//TESTS
// expect(changeLocation("Austin, TX")).toEqualSnapShot();
// expect(changeLocation("Austin, TX")).toEqual({
//   type: "CHANGE_LOCATION",
//   payload: "Austin, TX"
// });
