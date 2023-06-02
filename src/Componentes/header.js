import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import C1 from './Card1';
import C2 from './Card2';
import C3 from './Card3';


function Header(){

return(


    <div>
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand  href="#home"> H.OLHOS</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contato">Sobre Nós</Nav.Link>
            <Nav.Link href="#pricing">Contato</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
     < C1/>
     <C2/>
     <C3/>
    </div>
    )
}

export default Header;