import React from "react";
import { useSlots } from "../../context/slots.context";
import {
  AvisoTexto,
  ButtonsFlex,
  Card,
  ConfirmButton,
  ContainerBotoesImportar,
  ContainerButtons,
  ContainerCards,
  ContainerCodigoColecao,
  ContainerConteudoModal,
  ContainerInteracoesIdportar,
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
import { Modal, Tooltip } from "@mui/material";
import { useShare } from "../../context/share.context";
import LinkIcon from '@mui/icons-material/Link';
import { Button } from "../TacaFicha/styles";
import { GetCarta, GetColecao } from "../../services/carta.service";
import { ModalConfirmarDelete } from "./Modais/Delete";
import { ModalAddCarta } from "./Modais/AddCarta";
import { ModalAddColecao } from "./Modais/AddColecao";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { set } from "lodash";

export const SaveSlots = () => {
  const { slots, DeleteSlot, LoadSlot, LoadSlots } = useSlots();
  const [open, setOpen] = React.useState(false);
  const [addCartaOpen, setAddCartaOpen] = React.useState(false);
  const [addColecaoOpen, setAddColecaoOpen] = React.useState(false);
  const [copyTooltip, setCopyTooltip] = React.useState("Copiar link de compartilhamento");
  const [copyCartaTooltip, setCopyCartaTooltip] = React.useState("Copiar Id da Carta");
  const [actualIndex, setActualIndex] = React.useState();

  const { copyShareableLinkToClipboard } = useShare();

  const ImportarCarta = async (id) => {
    const carta = await GetCarta(id).then(carta => JSON.parse(carta.data.json));

    const slotsAtual = JSON.parse(localStorage.getItem("slots")) ?? [];

    slotsAtual.push(carta)

    localStorage.setItem("slots", JSON.stringify(slotsAtual));
    LoadSlots();

    setAddCartaOpen(false);
  }

  const ImportarColecao = async (id) => {
    const slotsAtual = JSON.parse(localStorage.getItem("slots")) ?? [];
    const cartas = await GetColecao(id);

    cartas.forEach(carta => {
      slotsAtual.push({ ...JSON.parse(carta.json), id: carta.id })
    });

    localStorage.setItem("slots", JSON.stringify(slotsAtual));
    LoadSlots();
    setAddColecaoOpen(false);
  }

  if (!slots.length) {
    return (
      <ContainerSessao>
        <p style={{ color: "#d11ce0" }}>BETA</p>
        <h1>Personagens Salvos</h1>
        <ContainerBotoesImportar>
          <Button onClick={() => setAddCartaOpen(true)}>Importar Carta</Button>
          <Button onClick={() => setAddColecaoOpen(true)}>Importar Coleção</Button>
        </ContainerBotoesImportar>
        <AvisoTexto>Você ainda não tem nenhum personagem salvo!</AvisoTexto>
        <ModalConfirmarDelete
          open={open}
          onClose={() => setOpen(false)}
          onDelete={() => deleteSlot()}
        />

        <ModalAddCarta
          open={addCartaOpen}
          onClose={() => setAddCartaOpen(false)}
          onAdd={ImportarCarta}
        />

        <ModalAddColecao
          open={addColecaoOpen}
          onClose={() => setAddColecaoOpen(false)}
          onAdd={ImportarColecao}
        />
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
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  const handleCopyIdCarta = (id) => {
    navigator.clipboard.writeText(id)
    setCopyTooltip("Link copiado!");
    setTimeout(() => {
      setCopyTooltip("Copiar Id da Carta");
    }, 2000);
  }

  return (
    <ContainerSessao>
      <p style={{ color: "#fff" }}>BETA</p>
      <h1>Personagens Salvos</h1>
      <br />

      <ContainerInteracoesIdportar>
        {
          localStorage.getItem("uuid") &&
          <ContainerCodigoColecao>
            <label><b>Seu Id de Coleção:</b></label>
            <div>
              <input value={localStorage.getItem("uuid")} readOnly /> <ContentCopyIcon onClick={() => navigator.clipboard.writeText(localStorage.getItem("uuid"))} style={{ cursor: "pointer", color: 'var(--color-foreground)' }} />
            </div>
          </ContainerCodigoColecao>
        }
        <ContainerBotoesImportar>
          <Button onClick={() => setAddCartaOpen(true)}>Importar Carta</Button>
          <Button onClick={() => setAddColecaoOpen(true)}>Importar Coleção</Button>
        </ContainerBotoesImportar>
      </ContainerInteracoesIdportar>

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
              <Tooltip title="Deletar">
                <IconButton onClick={() => handleOpen(index)}>
                  <DeleteForeverRoundedIcon style={{ color: "Crimson" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Editar">
                <IconButton onClick={() => handleEdit(s)}>
                  <SimCardDownloadRoundedIcon style={{ color: "#FFF" }} />
                </IconButton>
              </Tooltip>
              {
                !s.id &&
                <Tooltip title={copyTooltip}>
                  <IconButton onClick={() => handleCopyLinkToClipboard(s)}>
                    <ShareIcon style={{ color: "#FFF" }} />
                  </IconButton>
                </Tooltip>
              }
              {
                s.id &&
                <>
                  <Tooltip title={copyTooltip}>
                    <IconButton onClick={() => handleCopyLinkNuvem(s.id)}>
                      <LinkIcon style={{ color: "#FFF" }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={copyCartaTooltip}>
                    <IconButton onClick={() => handleCopyIdCarta(s.id)}>
                      <ContentCopyIcon style={{ color: "#FFF" }} />
                    </IconButton>
                  </Tooltip>
                </>
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

      <ModalAddCarta
        open={addCartaOpen}
        onClose={() => setAddCartaOpen(false)}
        onAdd={ImportarCarta}
      />

      <ModalAddColecao
        open={addColecaoOpen}
        onClose={() => setAddColecaoOpen(false)}
        onAdd={ImportarColecao}
      />
    </ContainerSessao>
  );
};
