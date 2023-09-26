import React from "react";
import {useSlots} from "../../context/slots.context";
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
import ShareIcon from '@mui/icons-material/Share';
import {Modal, Tooltip} from "@mui/material";
import {useShare} from "../../context/share.context";
import LinkIcon from '@mui/icons-material/Link';

const ModalConfirmarDelete = ({open, onClose, onDelete}) => {
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
            Cara, tem certeza mesmo que quer deletar teu personagem?
            Tipo, cê vai perder ele, sabe? PRA SEMPRE! Ainda quer deletar ele?
          </p>
          <ButtonsFlex>
            <ConfirmButton onClick={onClose}><p>Eu desisto! Não quero mais.</p></ConfirmButton>
            <DeleteButton onClick={onDelete}><p>Deleta logo!</p></DeleteButton>
          </ButtonsFlex>
        </ContainerConteudoModal>
      </ContainerModal>
    </Modal>
  );
};

export const SaveSlots = () => {
  const {slots, DeleteSlot, LoadSlot} = useSlots();
  const [open, setOpen] = React.useState(false);
  const [copyTooltip, setCopyTooltip] = React.useState("Copiar link de compartilhamento");
  const [actualIndex, setActualIndex] = React.useState();

  const {copyShareableLinkToClipboard} = useShare();

  if (!slots.length) {
    return (
      <ContainerSessao>
        <p style={{color: "#d11ce0"}}>BETA</p>
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

  const handleEdit = (slot) => {
    LoadSlot(slot);
    const anchor = document.querySelector('#monta-ficha-dados-basicos');
    anchor.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  const handleCopyLinkToClipboard = (slot) => {
    copyShareableLinkToClipboard(slot);
    setCopyTooltip("Link copiado!");
    setTimeout(() => {
      setCopyTooltip("Copiar link de compartilhamento");
    }, 2000);
  }

  const handleCopyLinkNuvem = (id) => {
    navigator.clipboard.writeText(`${window.location.origin}/shareview/${id}`)
    setCopyTooltip("Link copiado!");
    setTimeout(() => {
      setCopyTooltip("Copiar link de compartilhamento");
    }, 2000);
  }

  return (
    <ContainerSessao>
      <p style={{color: "#fff"}}>BETA</p>
      <h1>Personagens Salvos</h1>
      <br/>
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
                <img alt="Poder Icone" src={poder}/>
                <p>{s.atributos.poder}</p>
              </StatusContainer>
              <StatusContainer>
                <img alt="Habilidade Icone" src={habilidade}/>
                <p>{s.atributos.habilidade}</p>
              </StatusContainer>
              <StatusContainer>
                <img alt="Resistencia Icone" src={resistencia}/>
                <p>{s.atributos.resistencia}</p>
              </StatusContainer>
            </InnerCard>
            <ContainerButtons>
              <Tooltip title="Deletar">
                <IconButton onClick={() => handleOpen(index)}>
                  <DeleteForeverRoundedIcon style={{color: "Crimson"}}/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Editar">
                <IconButton onClick={() => handleEdit(s)}>
                  <SimCardDownloadRoundedIcon style={{color: "#FFF"}}/>
                </IconButton>
              </Tooltip>
              <Tooltip title={copyTooltip}>
                <IconButton onClick={() => handleCopyLinkToClipboard(s)}>
                  <ShareIcon style={{color: "#FFF"}}/>
                </IconButton>
              </Tooltip>
              {
                s.id &&
                <Tooltip title={copyTooltip}>
                  <IconButton onClick={() => handleCopyLinkNuvem(s.id)}>
                    <LinkIcon style={{color: "#FFF"}}/>
                  </IconButton>
                </Tooltip>
              }
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
