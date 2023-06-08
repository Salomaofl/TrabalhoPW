import Card from 'react-bootstrap/Card';
import Cabecalho from '../Componentes/Cabecalho';

function SobreNos() {
  
  return (
    
    <Card>
       <Cabecalho/>
      <Card.Header>Sobre Nós</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Quando pensar em oftalmologia, pense em um novo conceito de saúde ocular. Com duas unidades hospitalares, o H.Olhos conta com o que há de mais avançado em relação aos cuidados com a visão aliado a um atendimento humanizado, oferecendo tecnologias compatíveis com os maiores centros especializados do mundo.
Tudo isso para cuidar do que realmente importa para nós: você.{' '}
          </p>
          <footer className="blockquote-footer">
            H.Olhos <cite title="Source Title"></cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default SobreNos;