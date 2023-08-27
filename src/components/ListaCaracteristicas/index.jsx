import React from "react";
import { ContainerCaracteristicas, Caracteristica, AdicionarButton } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const ListaCaracteristicas = (props) => {
  const { caracteristicas, onAdicionarClick, onRemoverClick } = props;

  return (
    <>
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
        <AdicionarButton onClick={() => onAdicionarClick()}>
          <AddIcon
            style={{ width: "15px" }}
          />
          Adicionar
        </AdicionarButton>
      </ContainerCaracteristicas>
    </>
  );
};
