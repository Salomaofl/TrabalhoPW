import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import Cabecalho from '../Componentes/Cabecalho';



function Contato() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (



    
    <>
<Cabecalho/>
<Card>
      <Card.Header>Fale Conosco</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            <li>E-mail: Hospital@hl.com</li>
          <li>Telefone: 9999-9999</li>
          <li>Endereço: Rua Abilio 123</li>{' '}
          </p>
          <footer className="blockquote-footer">
            {/* Someone famous in <cite title="Source Title">Source Title</cite> */}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>




      <Button variant="primary" onClick={handleShow}>
        Onde estamos?
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Onde encontrar?</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <li>H.OLHOS
H.Olhos | Hospital de Olhos Paulista Rua Abílio Soares, 218, Paraíso – São Paulo - SP Próximo à Estação Paraíso do Metrô</li>
          <li>H.OLHOS
H.Olhos | Hospital de Olhos Paulista Av. Lucas Nogueira Garcêz, 169 - São Bernardo do Campo - SP</li>
          <li>CERPO
H.Olhos | Hospital de Olhos Paulista Av. Santo Amaro, 6277 - Chácara Santo Antônio – São Paulo
CEP: 04701-100</li>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Contato;