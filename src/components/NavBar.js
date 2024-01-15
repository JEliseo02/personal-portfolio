import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.svg';
import NavIcon1 from '../assets/img/nav-icon1.svg';
import NavIcon2 from '../assets/img/nav-icon2.svg';
import NavIcon3 from '../assets/img/nav-icon3.svg';
import NavIcon4 from '../assets/img/nav-icon4.jpg';
import NavIcon5 from '../assets/img/nav-icon5.png';
import NavIcon6 from '../assets/img/nav-icon6.png';
import NavIcon7 from '../assets/img/nav-icon7.png';
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router
  } from "react-router-dom";



export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50 ){
                seScrolled(true);
            }
            else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Router>
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className = "navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home"  className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' }  onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="https://drive.google.com/file/d/1pUmqeLHKpbB9RxpzBT0ZSNNGuCo9VZKL/view?usp=sharing" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link' } onClick = {() => onUpdateActiveLink('https://drive.google.com/file/d/1pUmqeLHKpbB9RxpzBT0ZSNNGuCo9VZKL/view?usp=sharing')}>Resume</Nav.Link>
                    
                </Nav>

                <span className = "navbar-text">
                    <div className="social-icon">
                        <a href="http://linkedin.com/in/jack-eliseo-b28790254"><img src = {NavIcon1} alt = ""></img></a>
                        <a href="https://github.com/JEliseo02"><img src = {NavIcon7} alt = ""></img></a>
                        <a href="https://www.instagram.com/jackeliseo2?igsh=bXJvYjN1Y3hjNmho&utm_source=qr"><img src = {NavIcon3} alt = ""></img></a>

                    </div>
                    <HashLink to='http://linkedin.com/in/jack-eliseo-b28790254'>
                        <button className="vvd"><span>Let’s Connect</span></button>
                    </HashLink>
                </span>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </Router>
    )
}