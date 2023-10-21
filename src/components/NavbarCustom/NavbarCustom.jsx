import React from "react";
import "./navbarcustom.css"
import CartWidget from "../CartNav/CartWidget";
// boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const productCounter = 5;

const NavbarCustom = () => {
   return (
      <>
         <Navbar bg="dark" data-bs-theme="dark">
         <Container>
            <Navbar.Brand className="f-playfair fw-bold" href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#features">Features</Nav.Link>
               <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <CartWidget contadorCart={productCounter}/>
         </Container>
         </Navbar>
      </>
   )
}

export default NavbarCustom;