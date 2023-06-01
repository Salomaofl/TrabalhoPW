import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate,Outlet } from "react-router-dom"



function BasicExample() {
  let navigate = useNavigate()
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Financeiro</Card.Title>
        <Card.Text>
          Texto aqui
        </Card.Text>
     <Button onClick={() => navigate('/component')} variant="primary">Solicitar</Button>
      </Card.Body>
    </Card>
    <Outlet/>
    </>
  );
}

export default BasicExample;