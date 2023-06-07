import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from './Card1';
import { Outlet } from 'react-router-dom';
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";



function Header(){

return(
    <>
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

            <Container>
                <Row>
                    <Col><Card title={"Exemplo 1"} text={"<p>Aqui é um paragrafo</p>>"} link={'/f'}/></Col>
                    <Col><Card title={"Exemplo 1"} text={"<p>Aqui é um paragrafo</p>>"}/></Col>
                    <Col><Card title={"Exemplo 1"} text={"<p>Aqui é um paragrafo</p>>"}/></Col>
                </Row>
            </Container>


        </div>
        <Outlet/>
    </>


    )
}

export default Header;
