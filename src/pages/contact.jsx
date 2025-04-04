import { Form, Button, Container } from 'react-bootstrap'

function Contact() {
  return (
    <Container className="my-5">
      <h2>Get in touch</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Naam</Form.Label>
          <Form.Control type="text" placeholder="Voer je naam in" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bericht</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Typ je bericht" />
        </Form.Group>
        <Button variant="primary" type="submit">Verstuur</Button>
      </Form>
      <br></br>
      <Button variant="primary">Lees meer</Button>

    </Container>
  )
}
export default Contact
