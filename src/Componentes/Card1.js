import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom";

function C1(props) {

    let navigate = useNavigate()

  return (
    <>
    <Card style={{ width: '15rem' }}>
    <Card.Img variant="top" src="Holhos.jpeg" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary" onClick={() => navigate(props.link)}>Solicitar</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default C1;
