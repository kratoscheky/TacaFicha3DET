import React from "react";
import {Button, Container} from "./styles.jsx";

export const AvisoTopoAlpha = () => {
  return (
    <Container>
      <div>
        <h1>Atenção Heróis!</h1>
        <br/>
        <b>Para jogar com as regras completas, é preciso ter o Manual 3DeT Alpha que é completamente Gratuito no site da Jambo Editora.</b>
        <br/>
        <br/>
        <p>
          A ficha de personagem está atualmente em fase de testes e por conta
          disso, erros e bugs podem ocorrer. A revisão ainda não foi completamente realizada, você pode e irá encontrar coisas incompletas ou fora do lugar. Preencha a ficha do personagem, na
          sequência, até o final. Se você encontrar qualquer tipo de erro, por
          favor, entre em contato conosco através do email{" "}
          <b>contatotacaficha@gmail.com</b>
        </p>
        <br/>
        <p><b>3DeT Alpha</b> é um sistema de RPG produzido pela <a href='https://jamboeditora.com.br/'>
          <b>Jambô Editora.</b>
        </a></p>
        <br />
        <Button><a href='https://jamboeditora.com.br/produto/manual-3det-alpha-edicao-revisada-digital/'>Baixe as Regras</a></Button>
        <br/>

      </div>
    </Container>
  );
};
