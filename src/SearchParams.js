import React from "react";
import SearchBox from "./SearchBox";
import { Redirect } from "react-router-dom";

class SearchParams extends React.Component {
  handleSearchSubmit = () => {
    <Redirect to="/results" />;
  };
  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default SearchParams;
