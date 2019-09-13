import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//import css
import './navbar.css';

class NavBarComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar className="navbar-custom">
                    <Navbar.Brand href="/"><img src="./images/cat.jpg" style={{width: "90px", height: "50px", marginRight: "10px"}} /><span>Beautiful Cat API </span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/breeds">
                                <Nav.Link className="animated rubberBand">Breeds</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default NavBarComponent;