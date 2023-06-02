import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function C2() {
  
  return (
    <>
    <Card style={{ width: '15rem' }}>
    <Card.Img variant="top" src="Holhos.jpeg" />
      <Card.Body>
        <Card.Title>AMBULATORIO</Card.Title>
        <Card.Text>
          <li>Receitas</li>
          <li>Relatórios</li>
          <li>Atestados</li>
        </Card.Text>
     <Button variant="primary">Solicitar</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default C2;
