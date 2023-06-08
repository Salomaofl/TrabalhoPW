import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Cabecalho(){

    return(

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand  href="#home"> H.OLHOS</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="/s">Sobre nós</Nav.Link>
                    <Nav.Link href="/c">Contato</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
       )
    
};

export  default Cabecalho;

