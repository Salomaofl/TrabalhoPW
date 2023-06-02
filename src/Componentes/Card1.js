import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function C1() {
  
  return (
    <>
    <Card style={{ width: '15rem' }}>
    <Card.Img variant="top" src="Holhos.jpeg" />
      <Card.Body>
        <Card.Title>Financeiro</Card.Title>
        <Card.Text>
          <li>Nota Fiscal</li>
          <li>Detalhamente</li>
          <li>Devolução</li>
        </Card.Text>
     <Button variant="primary">Solicitar</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default C1;
