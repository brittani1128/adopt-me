import React from "react";
import pf from "petfinder-client";
import Pet from "../Pet/Pet";
import SearchBox from "../SearchBox/SearchBox";
import { connect } from "react-redux";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Results extends React.Component {
  state = {
    pets: []
  };

  componentDidMount() {
    this.search();
  }

  search = () => {
    petfinder.pet
      .find({
        output: "full",
        location: this.props.location,
        animal: this.props.animal,
        breed: this.props.breed
      })
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
  };

  render() {
    return (
      <div className="search">
        <SearchBox search={this.search} />
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

//grabs data out of the store, and returns object location:location, etc
const mapStateToProps = ({ animal, breed, location }) => ({
  animal,
  breed,
  location
});
//connects 2 functions, inject data as a prop to Results

export default connect(mapStateToProps)(Results);