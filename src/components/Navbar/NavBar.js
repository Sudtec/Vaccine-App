import React from 'react'
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';

const NavBar = () => {
    return (

        <Navbar expand='lg' className="navBar sticky-top" sticky="top">
            <Container>
                <Navbar.Brand href="#" className='navbarBrand'>Vaccine App</Navbar.Brand>
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
                        <Nav className="justify-content-end flex-grow-1 pe-3 navLinksContainer">
                            <Nav.Link href="#intro" className='navLinks'> Home</Nav.Link>
                            <Nav.Link href="#why" className='navLinks'> About Us</Nav.Link>
                            <Nav.Link href="#features" className='navLinks'> Subscriptions</Nav.Link>

                            <button className='navBtn'>Get Started</ button>
                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar