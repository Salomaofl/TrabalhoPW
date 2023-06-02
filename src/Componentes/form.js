import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


function Formulario() {
  return (
    <Form>
      
        <Col>
          <Form.Control placeholder="Insira seu nome" />
        </Col>
        <Col>
          <Form.Control placeholder="Seu CPF" />
        </Col>
        <Col>
          <Form.Control placeholder="E-mail" />
          </Col>
      
    </Form>
  );
}

export default Formulario;