import {ButtonFicha, ButtonSecundario} from "../MontaFicha/styles";
import BookIcon from "@mui/icons-material/Book";
import BackspaceIcon from "@mui/icons-material/Backspace";
import React from "react";
import {useFicha} from "../../context/ficha.context";
import {useSlots} from "../../context/slots.context";
import {useImgur} from "../../context/imgur.context";
import {Container} from "./styles";

export const SalvarSlot = () => {
  const {LimparCampos} = useFicha();
  const {remainingUploadsToday} = useImgur();
  const {SaveSlot} = useSlots();

  return (
    <>
      <Container>
        <ButtonFicha onClick={async () => await SaveSlot()}>
          <BookIcon/>
          Salvar Ficha em Slot
        </ButtonFicha>
        <ButtonSecundario
          style={{maxWidth: "110px"}}
          onClick={() => LimparCampos()}
        >
          <BackspaceIcon/>
          Limpar Campos
        </ButtonSecundario>
      </Container>
      <h6 style={{textAlign: "center", color: "var(--secondary-text)", lineHeight: "12px"}}>
        Você pode salvar mais {remainingUploadsToday} fichas com imagem hoje
        <br/>Após isso as fichas serão salvas sem imagem
        <br/>Essa limitação permite que todos possam aproveitar o TacaFicha
      </h6>
    </>
  )
}