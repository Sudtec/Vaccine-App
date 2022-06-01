import React from 'react'
import { Navbar, Container, Nav,  Offcanvas } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand='lg' className="mb-3 navBar" sticky="top">
            <Container>
                <Navbar.Brand href="#">Vaccine App</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            VaccineApp
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About Us</Nav.Link>
                            <Nav.Link href="#action2">Subscriptions</Nav.Link>

                            <button>Get Started</ button>
                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar