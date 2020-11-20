import React, {useState} from "react";
import {Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router";

export default function NavigationBar() {
    const [inputText, setInputText] = useState("");
    const history = useHistory();

    const onClickHandler = (e) => {
        e.preventDefault();
        history.push(`/search/${inputText}`)
        console.log(inputText);
        setInputText("");
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
                    <Nav.Link href="/discover">Discover</Nav.Link>
                    <Nav.Link href="/about">About me</Nav.Link>
                </Nav>
                <Form inline onSubmit={onClickHandler}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={inputText}
                                 onChange={onChangeHandler}/>
                    <Button variant="outline-success" type="submit" href={`/search/${inputText}`}>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}
