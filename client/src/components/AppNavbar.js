import React, {useState} from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container
} from 'reactstrap'

function AppNavbar() {

   const [isOpen, setisOpen] = useState(false);

   const toggle = () => {
       setisOpen(!isOpen)
    }
    
    return(
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Shopping List</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/eschroer/mern-shopping-list" target="_blank">
                                    Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default AppNavbar;