import React from 'react';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <BootstrapNavbar bg="primary" variant="dark" expand="lg" className="shadow-sm" fixed="top">
            <Container>
                <BootstrapNavbar.Brand as={Link} to="/" className="fw-bold">
                    User Management
                </BootstrapNavbar.Brand>
                <Nav className="me-3">
                    <Nav.Link
                        as={Link}
                        to="/"
                        active={location.pathname === '/'}
                        className="text-white fw-bold"
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/users"
                        active={location.pathname === '/users'}
                        className="text-white fw-bold"
                    >
                        User List
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/add"
                        active={location.pathname === '/add'}
                        className="text-white fw-bold"
                    >
                        Add User
                    </Nav.Link>
                </Nav>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;