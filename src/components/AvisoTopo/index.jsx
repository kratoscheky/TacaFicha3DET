import React from "react";
import {Container} from "./styles.jsx";
import jamboLogo from '../../images/jambo/Logo-Jambo-Completo-Branco.png'
import tresdetLogo from '../../images/jambo/3DeT_HORIZONTAL_004.png'

export const AvisoTopo = () => {
  return (
    <Container>
      <div>
        <h1>Atenção Menestreamers!</h1>
        <br/>
        <b>Para jogar com as regras completas, é preciso ter o Manual 3DeT Vitory (Playtest).</b>
        <br/>
        <br/>
        <p>
          A ficha de personagem está atualmente em fase de testes e por conta
          disso, erros e bugs podem ocorrer. Preencha a ficha do personagem, na
          sequência, até o final. Se você encontrar qualquer tipo de erro, por
          favor, entre em contato conosco através do email{" "}
          <b>contatotacaficha@gmail.com</b>
        </p>
        <br/>
        <p><b>3DeT</b> é um sistema de RPG produzido pela <a href='https://jamboeditora.com.br/'>
          <b>Jambô Editora.</b>
        </a></p>
        <br/>

      </div>
    </Container>
  );
};
