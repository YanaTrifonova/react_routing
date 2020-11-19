import React, {useState} from "react";
import {Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import Button from "react-bootstrap/Button";

export default function NavigationBar() {
    const [inputText, setInputText] = useState("");

    const onClickHandler = (e) => {
        e.preventDefault();

        console.log(inputText);
    }

    const onChangeHandler = (event) => {
        setInputText(event.target.value);
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Cocktails 🍸</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/discover">Discover Cocktails</Nav.Link>
                    <Nav.Link href="/about">About us</Nav.Link>
                </Nav>
                <Form inline onSubmit={onClickHandler}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={inputText} onChange={onChangeHandler}/>
                    <Button variant="outline-success" type="submit">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}
