import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function C3() {
  
  return (
    <>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="Holhos.jpeg" />
      <Card.Body>
        <Card.Title>EXAMES</Card.Title>
        <Card.Text>
          <li>Resultado</li>
          <li>Laudos</li>
          <li>Autorização</li>
        </Card.Text>
     <Button variant="primary">Solicitar</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default C3;
