import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const Navigation = () => {
  return (
    <Navbar bg="primary" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home"><i class="bi bi-person-standing"></i>Mallikarjun Gopal Bajantri</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"><i class="bi bi-house-door-fill"></i>Home</Nav.Link>
            <Nav.Link href="#about"><i class="bi bi-file-person-fill"></i>About</Nav.Link>
            <Nav.Link href="#skills"><i class="bi bi-file-person-fill"></i>Skills</Nav.Link>
            <Nav.Link href="#projects"><i class="bi bi-cast"></i>Projects</Nav.Link>
            <Nav.Link href="#contact"><i class="bi bi-person-lines-fill"></i>Contact</Nav.Link>
            <Nav.Link
              href="/Mallikarjun_isro_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <i class="bi bi-file-person"></i>Resume
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/itsmgb_8055" target="_blank">
              <BsInstagram />
            </Nav.Link>
            <Nav.Link href="https://github.com/mallu771" target="_blank">
              <BsGithub />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/mallikarjun-bajantri-b19842180/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <BsLinkedin />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
