import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default function getBreeds() {
  //dispatch and getState come from redux
  return function getBreedsThunk(dispatch, getState) {
    const { animal } = getState();

    if (animal) {
      petfinder.breed
        .list({ animal })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            //dispatch change_breeds action -- gives object to root reducer
            dispatch({
              type: "CHANGE_BREEDS",
              payload: data.petfinder.breeds.breed
            });
          } else {
            this.setState({ breeds: [] });
            dispatch({
              type: "CHANGE_BREEDS",
              payload: []
            });
          }
        })
        .catch(console.error);
    } else {
      dispatch({
        type: "CHANGE_BREEDS",
        payload: []
      });
    }
  };
}
