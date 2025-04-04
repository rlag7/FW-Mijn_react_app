import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  return (
      <Container>
        <h1 className="mb-4">Nieuws overzicht</h1>
        <Row className="mb-4">
          <Col md={8}>
            <Card className="mb-3">
              <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDJ8fGRvY3VtZW50YXMlMjBwcm9kdWN0c3xlbnwwfHx8fDE2ODU5MTYyMjI&ixlib=rb-1.2.1&q=80&w=600"
                  alt="Belangrijk nieuwsartikel"
              />
              <Card.Body>
                <Card.Title>Belangrijk nieuwsartikel</Card.Title>
                <Card.Text>Korte intro over dit artikel. Heel interessant!</Card.Text>
                <Button variant="primary">Lees meer</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <h5>Trending artikelen</h5>
            <ul className="list-unstyled">
              <li><a href="#">🚀 Artikel 1</a></li>
              <li><a href="#">🔥 Artikel 2</a></li>
              <li><a href="#">📈 Artikel 3</a></li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Card>
              <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDJ8fGRvY3VtZW50YXMlMjBwcm9kdWN0c3xlbnwwfHx8fDE2ODU5MTYyMjI&ixlib=rb-1.2.1&q=80&w=600"
                  alt="Artikel 1"
              />
              <Card.Body>
                <Card.Title>Artikel 1</Card.Title>
                <Card.Text>Korte uitleg over artikel 1.</Card.Text>
                <Button variant="primary">Lees meer</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDJ8fGRvY3VtZW50YXMlMjBwcm9kdWN0c3xlbnwwfHx8fDE2ODU5MTYyMjI&ixlib=rb-1.2.1&q=80&w=600"
                  alt="Artikel 2"
              />
              <Card.Body>
                <Card.Title>Artikel 2</Card.Title>
                <Card.Text>Korte uitleg over artikel 2.</Card.Text>
                <Button variant="primary">Lees meer</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDJ8fGRvY3VtZW50YXMlMjBwcm9kdWN0c3xlbnwwfHx8fDE2ODU5MTYyMjI&ixlib=rb-1.2.1&q=80&w=600"
                  alt="Artikel 3"
              />
              <Card.Body>
                <Card.Title>Artikel 3</Card.Title>
                <Card.Text>Korte uitleg over artikel 3.</Card.Text>
                <Button variant="primary">Lees meer</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  );
}

export default Home;
