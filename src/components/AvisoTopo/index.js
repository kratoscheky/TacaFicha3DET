import React from "react";
import { Container } from "./styles";

export const AvisoTopo = () => {
  return (
    <Container>
      <div>
        <h1>Atenção Menestreamers!</h1>
        <br />
        <p>
          A ficha de personagem está atualmente em fase de testes e por conta
          disso, erros e bugs podem ocorrer. Preencha a ficha do personagem, na
          sequência, até o final. Se você encontrar qualquer tipo de erro, por
          favor, entre em contato conosco através do email{" "}
          <b>kratoscheky@gmail.com</b>
        </p>
      </div>
    </Container>
  );
};
