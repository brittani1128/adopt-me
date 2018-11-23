import React from "react";
import SearchBox from "../SearchBox/SearchBox";
// import { Switch, Redirect } from "react-router-dom";
import { navigate } from "@reach/router";
import "./SearchParams.css";

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
