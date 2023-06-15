
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Cabecalho from './Cabecalho';



function Formulario() {
    
  return (
   
    <Container>
    
        <Row className="justify-content-md-center">
      <div style={{ display: 'block'
          ,width: 700,
          padding: 30 }}>
            
          <h4>FORMULARIO</h4>

          <Form>
              <Form.Group>
                  <Form.Label>Digite o seu nome:</Form.Label>
                  <Form.Control type="text"
                                placeholder="Nome completo" />
              </Form.Group>
              <Form.Group>
                  <Form.Label>Digite seu E-mail:</Form.Label>
                  <Form.Control type="email"
                                placeholder="E-mail" />
              </Form.Group>
               
               <Form.Group>
                  <Form.Label>Digite seu CPF:</Form.Label>
                  <Form.Control type="text"
                                placeholder="Digite o seu CPF" />
              </Form.Group>

              <Form.Group>
                  <Form.Label>Descreva sua solicitação:</Form.Label>
                  <Form.Control type="text" placeholder="Diga a sua solicitação" />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                  Enviar
              </Button>
          </Form>
      </div>
      </Row>
      </Container>
      
  );
}

export default Formulario;
