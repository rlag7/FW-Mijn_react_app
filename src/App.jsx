import React from 'react';
import './App.scss';
import { Container, Row, Col, Navbar, Nav, Card, Button } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <div className="app-wrapper">
        {/* Navbar */}
        <Navbar className="glass-navbar" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">✨ Unieke App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routing Section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Hero Cards Section */}
        <section className="diagonal-section">
          <Container fluid>
            <Row className="gy-4 justify-content-center">
              <Col md={5}>
                <Card className="custom-card gradient-card shadow-lg">
                  <Card.Body>
                    <Card.Title>Lorem Ipsum 🔥</Card.Title>
                    <Card.Text>Een moderne kaart met animaties en stijl.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={5}>
                <Card className="custom-card gradient-card-alt shadow-lg">
                  <Card.Body>
                    <Card.Title>Lorem Ipsum 🎉</Card.Title>
                    <Card.Text>Nog een stijlvolle kaart met unieke kleuren.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Foto Cards Section */}
        <Container className="mt-5">
          <Row className="gy-4">
            {["Foto 1", "Foto 2", "Foto 3"].map((title, index) => (
                <Col md={4} key={index}>
                  <Card className="foto-card shadow-sm">
                    <Card.Img variant="top" src={`https://picsum.photos/600/40${index + 1}`} />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>Beschrijving van {title.toLowerCase()}.</Card.Text>
                      <Button className="btn-cyan">Meer Info</Button>
                    </Card.Body>
                  </Card>
                </Col>
            ))}
          </Row>
        </Container>

        {/* Grote Afbeelding */}
        <Container className="mt-5">
          <Card className="big-card shadow">
            <Card.Img variant="top" src="https://via.placeholder.com/1200x300" />
            <Card.Body>
              <Card.Title>Grote Header Kaart</Card.Title>
              <Card.Text>Een brede afbeelding met een call-to-action.</Card.Text>
              <Button className="btn-pink">Lees Meer</Button>
            </Card.Body>
          </Card>
        </Container>

        <div className="text-center mt-4">
          <Button variant="primary" onClick={() => toast("Je klikte op de knop!")}>
            Toon Notificatie
          </Button>
        </div>

        <ToastContainer />
      </div>
  );
}

export default App;
