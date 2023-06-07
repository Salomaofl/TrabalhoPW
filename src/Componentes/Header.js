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
                        <Nav.Link href="/s">Sobre Nós</Nav.Link>
                        <Nav.Link href="/c">Contato</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container>
                <Row>
                    <Col><Card title={"DOCUMENTOS"} text={"Area reservada para solicitar segunda via de qualque documento."} link={'/f'}/></Col>
                    <Col><Card title={"FINANCEIRO"} text={"Se precisa de Nota Fiscal, Nota Detalhada ou Reembolso."} link={'/f'}/></Col>
                    <Col><Card title={"EXAMES"} text={"Para laudos,imagens, segunda via de exames e laudos"} link={'/f'}/></Col>
                </Row>
            </Container>


        </div>
        <Outlet/>
    </>


    )
}

export default Header;
