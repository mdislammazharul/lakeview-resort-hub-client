import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div>
            < Navbar className="nav-color" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container style={{ color: 'white' }}>
                    <Navbar.Brand href="/home">Lake View Resort Hub</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="header justify-content-end">
                        <div class="btn-group me-3">
                            <button type="button" class="btn btn-danger"> <NavHashLink style={{ color: 'white' }} activeStyle={{ color: 'white' }} to="/home#home">Home</NavHashLink></button>
                            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><HashLink className="dropdown-item" to="/home#reviewers">Reviews</HashLink></li>
                                <li><HashLink className="dropdown-item" to="/home#faq">FAQ</HashLink></li>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-danger me-3"> <NavHashLink style={{ color: 'white' }} activeStyle={{ color: 'white' }} to="/home#services">Services</NavHashLink></button>
                        <button type="button" class="btn btn-danger me-3"> <NavHashLink style={{ color: 'white' }} activeStyle={{ color: 'white' }} to="/manageOrders">My Orders</NavHashLink></button>
                        <button type="button" class="btn btn-danger me-3"> <NavHashLink style={{ color: 'white' }} activeStyle={{ color: 'white' }} to="/live">Blank</NavHashLink></button>
                        <div class="btn-group me-3">
                            <button type="button" class="btn btn-danger"> <NavHashLink style={{ color: 'white' }} activeStyle={{ color: 'white' }} to="/home#home">Admin</NavHashLink></button>
                            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><HashLink className="dropdown-item" to="/manageAllOrders">Manage All Orders</HashLink></li>
                                <li><HashLink className="dropdown-item" to="/addServices">Add New Services</HashLink></li>
                            </ul>
                        </div>
                        {user?.displayName && <Navbar.Text>
                            Signed in as: <a className="me-3" href="#login">{user?.displayName}</a>
                        </Navbar.Text>}
                        {
                            user?.displayName ?
                                <button onClick={logOut} className="btn btn-light">LogOut</button> :
                                // <HashLink to="/login">Login</HashLink>
                                <button type="button" class="btn btn-warning"> <NavHashLink style={{ color: 'dark' }} activeStyle={{ color: 'dark' }} to="/login">Login</NavHashLink></button>
                        }
                    </Navbar.Collapse >
                </Container >
            </Navbar >
        </div >
    );
};

export default Header;