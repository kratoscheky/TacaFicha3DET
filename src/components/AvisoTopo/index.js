import React from "react";
import {Container} from "./styles";

export const AvisoTopo = () => {
  return (
    <Container>
      <div>
        <h1>Atenção Menestreamers!</h1>
        <br/>
        <b>Para jogar com as regras completas, é preciso ter o Manual 3DeT Vitory (Playtest).</b>
        <br/>
        <br/>
        <p style={{
          color: "var(--secondary-text)"
        }}>
          A ficha de personagem está atualmente em fase de testes e por conta
          disso, erros e bugs podem ocorrer. Preencha a ficha do personagem, na
          sequência, até o final. Se você encontrar qualquer tipo de erro, por
          favor, entre em contato conosco através do email{" "}
          <b>kratoscheky@gmail.com</b>
        </p>
        <br/>
        <p style={{
          color: "var(--secondary-text)"
        }}><b>3DeT</b> é um sistema de RPG produzido pela <b>Jambô Editora.</b></p>
        <br />
        <a href='https://jamboeditora.com.br/'>
          <img src='https://blog.jamboeditora.com.br/wp-content/uploads/2022/05/logo-jambo.png'/>
        </a>
      </div>
    </Container>
  );
};
