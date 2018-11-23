import React from "react";
import { ANIMALS } from "petfinder-client";
import { connect } from "react-redux";
import getBreeds from "../../actionCreators/getBreeds";
import changeAnimal from "../../actionCreators/changeAnimal";
import changeBreed from "../../actionCreators/changeBreed";
import changeLocation from "../../actionCreators/changeLocation";

class SearchBox extends React.Component {
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.search();
  };
  render() {
    return (
      <div className="search-params">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="location">
            Location
            <input
              id="location"
              onChange={this.props.handleLocationChange}
              value={this.props.location}
              placeholder="Location"
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={this.props.animal}
              onChange={this.props.handleAnimalChange}
              onBlur={this.props.handleAnimalChange}
            >
              <option />
              {ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              disabled={!this.props.breeds.length}
              id="breed"
              value={this.props.breed}
              onChange={this.props.handleBreedChange}
              onBlur={this.props.handleBreedChange}
            >
              <option />
              {this.props.breeds.map(breed => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          {/* <button>Submit</button> */}
          <input
            type="submit"
            value="submit"
            onClick={this.handleFormSubmit}
            id="submit"
          />
        </form>
      </div>
    );
  }
}

// pulls data out of redux store
const mapStateToProps = ({ breed, breeds, animal, location }) => ({
  breed,
  breeds,
  location,
  animal
});

// functions provided to SearchBox - dispatch is how you give an action to redux
const mapDispatchToProps = dispatch => ({
  handleAnimalChange(event) {
    dispatch(changeAnimal(event.target.value));
    dispatch(getBreeds());
  },
  handleBreedChange(event) {
    dispatch(changeBreed(event.target.value));
  },
  handleLocationChange(event) {
    dispatch(changeLocation(event.target.value));
  }
});

// injects data and functions into searchbox
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);