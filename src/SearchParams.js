import React from "react";
import SearchBox from "./SearchBox";
// import { Switch, Redirect } from "react-router-dom";
import { navigate } from "@reach/router";

class SearchParams extends React.Component {
  search = () => {
    navigate("/results");
  };
  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.search} />
      </div>
    );
  }
}

export default SearchParams;
