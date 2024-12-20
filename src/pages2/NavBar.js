import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const AppNavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Funny App</Navbar.Brand>
      <Nav className="mr-auto">
        {/* <Nav.Link as={NavLink} to="/cats">
          Random Cats
        </Nav.Link>
        <Nav.Link as={NavLink} to="/jokes">
          Jokes
        </Nav.Link> */}
        <Nav.Link as={NavLink} to="/about">
          About
        </Nav.Link>

        <Nav.Link as={NavLink} to="/pokemon">
          Pokemon
        </Nav.Link>
        <Nav.Link as={NavLink} to="/anime">
          Anime
        </Nav.Link>
        <Nav.Link as={NavLink} to="/rick_and_morty">
          Rick and Morty
        </Nav.Link>

        <Nav.Link as={NavLink} to="/book">
          Books
        </Nav.Link>

        <Nav.Link as={NavLink} to="/harry_potter">
          Harry Potter
        </Nav.Link>

        <Nav.Link as={NavLink} to="/ax">
          Ax
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
