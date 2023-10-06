import React from "react";
import {AdicionarButton, Caracteristica, Container, ContainerCaracteristicas, ContainerTitulo,} from "./styles";
import AddIcon from "@mui/icons-material/Add";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const ListaCaracteristicasAlpha = (props) => {
  const {caracteristicas, onAdicionarClick, onRemoverClick, titulo, testId} = props;

  return (
    <Container>
      <ContainerTitulo>
        <h1>{titulo}</h1>
        <AdicionarButton onClick={() => onAdicionarClick()} data-test-id={testId}>
          <p>Adicionar</p>
          <AddIcon style={{width: "15px"}}/>
        </AdicionarButton>
      </ContainerTitulo>

      <ContainerCaracteristicas>
        {caracteristicas.map((caracteristica, index) => (
          <Caracteristica>
            {caracteristica.Nome}
            <CloseRoundedIcon
              style={{width: "15px"}}
              onClick={() => onRemoverClick(caracteristica.Id)}
            />
          </Caracteristica>
        ))}
      </ContainerCaracteristicas>
    </Container>
  );
};
