import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet";
import SearchBox from "./SearchBox";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Results extends React.Component {
  state = {
    pets: []
  };

  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Austin, TX" })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        this.setState({
          pets
        });
      });
  }

  render() {
    return (
      <div className="search">
        <SearchBox />
        {/* <pre>
              <code>{JSON.stringify(this.state, null, 2)}</code>
            </pre> */}
        {this.state.pets.map(pet => {
          let breed;
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              key={pet.id}
              name={pet.name}
              animal={pet.animal}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;
