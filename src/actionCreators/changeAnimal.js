//takes in an animal and returns an object, gets dispatched to root reducer
export default function changeAnimal(animal) {
  return { type: "CHANGE_ANIMAL", payload: animal };
}
