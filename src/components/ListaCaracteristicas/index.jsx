import React from "react";
import {
  ContainerCaracteristicas,
  Caracteristica,
  AdicionarButton,
  ContainerTitulo,
  Container,
} from "./styles";
import AddIcon from "@mui/icons-material/Add";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const ListaCaracteristicas = (props) => {
  const { caracteristicas, onAdicionarClick, onRemoverClick, titulo } = props;

  return (
    <Container>
      <ContainerTitulo>
        <h1>{titulo}</h1>
        <AdicionarButton onClick={() => onAdicionarClick()}>
          <p>Adicionar</p>
          <AddIcon style={{ width: "15px" }} />
        </AdicionarButton>
      </ContainerTitulo>

      <ContainerCaracteristicas>
        {caracteristicas.map((caracteristica, index) => (
          <Caracteristica>
            {caracteristica.Nome}
            <CloseRoundedIcon
              style={{ width: "15px" }}
              onClick={() => onRemoverClick(caracteristica.Id)}
            />
          </Caracteristica>
        ))}
      </ContainerCaracteristicas>
    </Container>
  );
};
