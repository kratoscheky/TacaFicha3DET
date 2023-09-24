import {Container} from "./styles.jsx";

export const Sobre = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Container>
        <header>
          <h1>Sobre o TacaFicha</h1>
        </header>
        <br/>
        <p>Bem-vindo ao TacaFicha, a ferramenta de criação de fichas para o sistema de RPG de mesa chamado "3DeT Victory!". Com o nosso serviço, você pode criar fichas de personagens personalizadas e exportá-las como imagens PNG para uso em suas sessões de jogo.</p>
        <br/>
        <h2>Recursos Principais</h2>
        <ul>
          <li>Crie fichas de personagens com facilidade.</li>
          <li>Personalize detalhes como nome, raça, classe e estatísticas.</li>
          <li>Adicione uma imagem customizada para o seu personagem a partir da galeria do seu dispositivo.</li>
          <li>Exporte suas fichas como imagens PNG de alta qualidade.</li>
          <li>Salve seus personagens no site para uso posterior.</li>
        </ul>
        <br/>
        <h2>Contato</h2>
        <p>Se você tiver alguma dúvida ou precisar de suporte, não hesite em nos contatar no email <b>contatotacaficha@gmail.com</b>. Estamos aqui para ajudar!</p>
      </Container>
    </div>
  )
}