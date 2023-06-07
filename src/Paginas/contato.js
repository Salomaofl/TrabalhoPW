import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Contato() {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        NOSSO CONTATO
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Fale conosco</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <li>E-mail: Hospital@hl.com</li>
          <li>Telefone: 9999-9999</li>
          <li>Endereço: Rua Abilio 123</li>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Contato;