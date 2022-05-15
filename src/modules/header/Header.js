import React from "react";
import "./Header.css";
import {Navbar , Nav, Container  } from "react-bootstrap";
import {NavLink , Route , Routes} from 'react-router-dom';




function Header(){

    
    return (
        <div>
            <Navbar collapseOnSelect expand='sm' bg='dark' variant="dark">
                <Container>
                <Navbar.Brand href="#home">Weather Forecast</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        
                        {/*links visible only when no user is logged in */}
                        <Nav.Item>
                            <Nav.Link eventKey="1" as={NavLink}  to="/">
                            Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="2" as={NavLink}  to="/signup">
                            Signup
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="3" as={NavLink}  to="/login">
                            Login
                            </Nav.Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link eventKey="4" as={NavLink}  to="/contactus">
                            Contactus
                            </Nav.Link>
                        </Nav.Item>           
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/homepage" element={<Homepage />} />
            </Routes> */}
        </div>
    );
}

export default Header;