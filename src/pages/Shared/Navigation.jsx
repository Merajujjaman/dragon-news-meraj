import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../Authentication/AuthProvaider';

const Navigation = () => {
    const {user, logOut} = useContext(AuthContext)

    //handele log out :
    const handleLogOut = () => {
        logOut()
        .then()
        .catch( error => console.log(TypeError))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <Link className='text-decoration-none' to='/'>Home</Link>

                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Carear</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">{user && <FaUser></FaUser>}</Nav.Link>

                            {
                                user ? <>
                                    <Button onClick={handleLogOut} variant="outline-success">Log Out</Button>
                                </> :
                                    <>
                                        <Button variant="outline-success">
                                            <Link className='text-decoration-nun' to='/login'>Login</Link>
                                        </Button>
                                    </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Navigation;