import React from "react";
import {Nav, Navbar} from 'react-bootstrap';

export default function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Cocktails 🍸</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/discover">Discover Cocktails</Nav.Link>
                    <Nav.Link href="/about">About us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
