import React from 'react';
import './App.scss';
import { Container, Row, Col, Navbar, Nav, Card, Button } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// MUI Component
import { Alert, Stack } from '@mui/material';

function App() {
    const fotoImages = [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Foto 1
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Foto 2
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Foto 3
    ];

    const heroImages = [
        "https://images.unsplash.com/photo-1518770660439-4636190af475", // Hero Card 1
        "https://images.unsplash.com/photo-1549924231-f129b911e442", // Hero Card 2
    ];

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

            {/* Routing */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            {/* Hero Cards */}
            <section className="diagonal-section">
                <Container fluid>
                    <Row className="gy-4 justify-content-center">
                        <Col md={5}>
                            <Card className="custom-card gradient-card shadow-lg">
                                <Card.Img
                                    variant="top"
                                    src={`${heroImages[0]}?auto=format&fit=crop&w=800&q=80`}
                                    alt="Hero Image 1"
                                />
                                <Card.Body>
                                    <Card.Title>Lorem Ipsum 🔥</Card.Title>
                                    <Card.Text>Een moderne kaart met animaties en stijl.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={5}>
                            <Card className="custom-card gradient-card-alt shadow-lg">
                                <Card.Img
                                    variant="top"
                                    src={`${heroImages[1]}?auto=format&fit=crop&w=800&q=80`}
                                    alt="Hero Image 2"
                                />
                                <Card.Body>
                                    <Card.Title>Lorem Ipsum 🎉</Card.Title>
                                    <Card.Text>Nog een stijlvolle kaart met unieke kleuren.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Foto Cards */}
            <Container className="mt-5">
                <Row className="gy-4">
                    {["Foto 1", "Foto 2", "Foto 3"].map((title, index) => (
                        <Col md={4} key={index}>
                            <Card className="foto-card shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={`${fotoImages[index]}?auto=format&fit=crop&w=600&q=80`}
                                    alt={title}
                                />
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
                    <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDJ8fGRvY3VtZW50YXMlMjBwcm9kdWN0c3xlbnwwfHx8fDE2ODU5MTYyMjI&ixlib=rb-1.2.1&q=80&w=600"
                        alt="Grote header afbeelding"
                    />
                    <Card.Body>
                        <Card.Title>Grote Header Kaart</Card.Title>
                        <Card.Text>Een brede afbeelding met een call-to-action.</Card.Text>
                        <Button className="btn-pink">Lees Meer</Button>
                    </Card.Body>
                </Card>
            </Container>


            {/* MUI Alert voorbeeld */}
            <Container className="mt-5">
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="info">Dit is een informatieve melding met MUI ✅</Alert>
                </Stack>
            </Container>
        </div>
    );
}

export default App;
