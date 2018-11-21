import React from "react";
import { Link } from "@reach/router";
import styled from "react-emotion";

//using Emotion to create styled components

const Container = styled("header")`
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Navbar = () => (
  <Container>
    <Link to="/">Adopt Me!</Link>
  </Container>
);

export default Navbar;
