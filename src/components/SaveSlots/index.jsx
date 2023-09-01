import React from "react";
import { useSlots } from "../../context/slots.context";
import {
  AvisoTexto,
  ButtonsFlex,
  Card,
  ConfirmButton,
  ContainerButtons,
  ContainerCards,
  ContainerConteudoModal,
  ContainerModal,
  ContainerSessao,
  DeleteButton,
  InnerCard,
  NomeTopo,
  StatusContainer,
} from "./styles";
import poder from "../../images/poder.svg";
import habilidade from "../../images/habilidade.svg";
import resistencia from "../../images/resistencia.svg";
import IconButton from "@mui/material/IconButton";
import SimCardDownloadRoundedIcon from "@mui/icons-material/SimCardDownloadRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { Modal } from "@mui/material";

const ModalConfirmarDelete = ({ open, onClose, onDelete }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ContainerModal onClick={onClose}>
        <ContainerConteudoModal>
          <h1>TU VAI DELETA MANO!</h1>
          <p>
            Cara, tu tem certeza mesmo que quer deletar teu personagem? Tipo, se
            vai perder ele sabe! PRA SEMPRE! Você ainda quer deletar ele?
          </p>
          <ButtonsFlex>
            <ConfirmButton onClick={onClose}><p>Eu desisto! Não quero mais</p></ConfirmButton>
            <DeleteButton onClick={onDelete}><p>Deleta logo!</p></DeleteButton>
          </ButtonsFlex>
        </ContainerConteudoModal>
      </ContainerModal>
    </Modal>
  );
};

export const SaveSlots = () => {
  const { slots, DeleteSlot, LoadSlot } = useSlots();
  const [open, setOpen] = React.useState(false);
  const [actualIndex, setActualIndex] = React.useState();

  if (!slots.length) {
    return (
      <ContainerSessao>
        <p style={{ color: "#d11ce0" }}>BETA</p>
        <h1>Personagens Salvos</h1>
        <AvisoTexto>Você ainda não tem nenhum personagem salvo!</AvisoTexto>
      </ContainerSessao>
    );
  }

  const handleOpen = (index) => {
    setActualIndex(index);
    setOpen(true);
  };

  const deleteSlot = () => {
    DeleteSlot(actualIndex);
    setOpen(false);
  };

  return (
    <ContainerSessao>
      <p style={{ color: "#fff" }}>BETA</p>
      <h1>Personagens Salvos</h1>
      <br />
      <ContainerCards>
        {slots.map((s, index) => (
          <Card
            key={index + s.nome}
            backgroundImage={
              s.imageUrl ??
              "https://site.jamboeditora.com.br/wp-content/uploads/2023/07/3DeT-abertura-mobile.png"
            }
          >
            <InnerCard>
              <NomeTopo>
                <p>{s.nome}</p>
              </NomeTopo>
              <StatusContainer>
                <img alt="Poder Icone" src={poder} />
                <p>{s.atributos.poder}</p>
              </StatusContainer>
              <StatusContainer>
                <img alt="Habilidade Icone" src={habilidade} />
                <p>{s.atributos.habilidade}</p>
              </StatusContainer>
              <StatusContainer>
                <img alt="Resistencia Icone" src={resistencia} />
                <p>{s.atributos.resistencia}</p>
              </StatusContainer>
            </InnerCard>
            <ContainerButtons>
              <IconButton onClick={() => handleOpen(index)}>
                <DeleteForeverRoundedIcon style={{ color: "Crimson" }} />
              </IconButton>
              <IconButton onClick={() => LoadSlot(s)}>
                <SimCardDownloadRoundedIcon style={{ color: "#FFF" }} />
              </IconButton>
            </ContainerButtons>
          </Card>
        ))}
      </ContainerCards>
      <ModalConfirmarDelete
        open={open}
        onClose={() => setOpen(false)}
        onDelete={() => deleteSlot()}
      />
    </ContainerSessao>
  );
};
