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
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">React Bootstrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Routing section */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Full-Screen Section */}
      <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col md={6}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="bg-primary text-white p-2">lorem ipsum!</Card.Title>
                <Card.Text>Dit is de eerste kaart met wat tekst.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="bg-secondary text-white p-2">lorem ipsum</Card.Title>
                <Card.Text>Dit is de eerste kaart met wat tekst.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Main Content Section */}
      <Container className="mt-4">
        {/* Three Cards in a Row */}
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="w-100">
              <Card.Img variant="top" src="https://via.placeholder.com/600x400" />
              <Card.Body>
                <Card.Title className="text-primary">Foto 1</Card.Title>
                <Card.Text>Dit is de eerste foto in de lijst.</Card.Text>
                <Button variant="primary">Go Somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="w-100">
              <Card.Img variant="top" src="https://via.placeholder.com/600x400" />
              <Card.Body>
                <Card.Title className="text-secondary">Foto 2</Card.Title>
                <Card.Text>Dit is de tweede foto in de lijst.</Card.Text>
                <Button variant="primary">Go Somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="w-100">
              <Card.Img variant="top" src="https://via.placeholder.com/600x400" />
              <Card.Body>
                <Card.Title className="text-success">Foto 3</Card.Title>
                <Card.Text>Dit is de derde foto in de lijst.</Card.Text>
                <Button variant="primary">Go Somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Full-Width Large Card */}
        <Row className="mt-4">
          <Col>
            <Card className="w-100">
              <Card.Img variant="top" src="https://via.placeholder.com/1200x300" />
              <Card.Body>
                <Card.Title>Grote Foto</Card.Title>
                <Card.Text>Dit is een lange kaart met een grote foto en tekst eronder.</Card.Text>
                <Button variant="primary">Go Somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
<br />
      <Button variant="primary" onClick={() => toast("Je klikte op de knop!")}>
  Go Somewhere
</Button>


      <ToastContainer />
    </div>
  );
}

export default App;
