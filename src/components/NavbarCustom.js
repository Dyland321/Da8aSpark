import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function NavbarCustom(props) {
  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src="https://i.ibb.co/1s0bNDp/New-Project.png" // Replace with your logo image URL
              alt="Logo"
              height="75"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="mr-1">
            <LinkContainer to="/about">
              <Nav.Link active={false}>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pricing">
              <Nav.Link active={false}>Pricing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/faq">
              <Nav.Link active={false}>FAQ</Nav.Link>
            </LinkContainer>
            <Nav.Link href="https://app.mysite.com/auth/signin" active={false}>
              Sign in
            </Nav.Link>
          </Nav>
          <Button variant="primary" href="https://app.mysite.com/auth/signup">
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
