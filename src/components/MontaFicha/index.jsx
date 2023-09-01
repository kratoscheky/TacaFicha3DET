import React, { useState } from "react";
import { useFicha } from "../../context/ficha.context";
import poder from "../../images/home/poder.svg";
import habilidade from "../../images/home/habilidade.svg";
import resistencia from "../../images/home/resistencia.svg";
import pontosdemana from "../../images/home/pontosdemana.svg";
import pontosdevida from "../../images/home/pontosdevida.svg";
import pontosdeacao from "../../images/home/pontosdeacao.svg";
import pontosacaoplus from "../../images/home/pontosacaoplus.svg";
import pontosvidaplus from "../../images/home/pontosvidaplus.svg";
import pontosmanaplus from "../../images/home/pontosmanaplus.svg";
import {
  AtributosImagem,
  ButtonFicha,
  ButtonSecundario,
  ContainerAtributos,
  ContainerInputs,
  ContainerMontaFicha,
  ContainerPersonalidade,
  PainelPersonalidade,
  SessaoInputs,
  SessaoInputsAtributos,
} from "./styles";
import FichaInput from "../FichaInput";
import dadinho from "../../images/dadinhos.png";
import ModalPericias from "../ModalPericias";
import ModalVantagens from "../ModalVantagens";
import ModalDesvantagens from "../ModalDesvantagens";
import { ListaCaracteristicas } from "../ListaCaracteristicas";
import { useSlots } from "../../context/slots.context";
import BookIcon from "@mui/icons-material/Book";
import BackspaceIcon from "@mui/icons-material/Backspace";

export const MontaFicha = () => {
  const {
    atributos,
    detalhes,
    setDetalhes,
    setNome,
    nome,
    vantagens,
    setVantagens,
    desvantagens,
    setDesvantagens,
    pericias,
    setPericias,
    HandleAtributos,
    pontosTotais,
    setPontosTotais,
    arquetipo,
    setArquetipo,
    extras,
    setExtras,
    LimparCampos,
    recursos,
  } = useFicha();

  const { SaveSlot } = useSlots();

  const [addPericiasOpen, setAddPericiasOpen] = useState(false);
  const [addVantagensOpen, setAddVantagensOpen] = useState(false);
  const [addDesvantagensOpen, setAddDesvantagensOpen] = useState(false);

  const SeparadorDadinho = () => (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <img style={{
        width: '100%',
        maxWidth: '500px',
      }} src={dadinho} alt={"Dados"} />
    </div>
  );

  return (
    <>
      <ContainerMontaFicha>
        <SeparadorDadinho />
        <SessaoInputs>
          <h1>Dados Basicos</h1>
          <ContainerInputs>
            <FichaInput
              label={"Nome"}
              valor={nome}
              onEdit={(e) => setNome(e.target.value)}
            />
            <FichaInput
              label={"Arquetipo"}
              valor={arquetipo}
              onEdit={(e) => setArquetipo(e.target.value)}
            />
            <FichaInput
              label={"Pontos Totais"}
              valor={pontosTotais}
              width={"200px"}
              onEdit={(e) => setPontosTotais(e.target.value)}
            />
          </ContainerInputs>
          <FichaInput
            isTextArea
            label={"Descrição"}
            valor={detalhes}
            onEdit={(e) => setDetalhes(e.target.value)}
            maxLength={250}
          />
        </SessaoInputs>
        <SeparadorDadinho />
        <SessaoInputsAtributos>
          <div>
            <ContainerAtributos>
              <h1>Atributos</h1>
              <br />
              <ContainerInputs>
                <FichaInput
                  label={"Poder"}
                  valor={atributos.poder}
                  icon={poder}
                  onEdit={(v) => HandleAtributos(v.target.value, "poder")}
                />
                <FichaInput
                  label={"Habilidade"}
                  valor={atributos.habilidade}
                  icon={habilidade}
                  onEdit={(v) => HandleAtributos(v.target.value, "habilidade")}
                />
                <FichaInput
                  label={"Resistência"}
                  valor={atributos.resistencia}
                  icon={resistencia}
                  onEdit={(v) => HandleAtributos(v.target.value, "resistencia")}
                />
              </ContainerInputs>
              <ContainerInputs>
                <FichaInput
                  label={"+Ação"}
                  valor={extras.pontosDeAcao}
                  icon={pontosacaoplus}
                  onEdit={(e) =>
                    setExtras({ ...extras, pontosDeAcao: e.target.value })
                  }
                />
                <FichaInput
                  label={"+Mana"}
                  valor={extras.pontosDeMana}
                  icon={pontosmanaplus}
                  onEdit={(e) =>
                    setExtras({ ...extras, pontosDeMana: e.target.value })
                  }
                />
                <FichaInput
                  label={"+Vida"}
                  valor={extras.pontosDeVida}
                  icon={pontosvidaplus}
                  onEdit={(e) =>
                    setExtras({ ...extras, pontosDeVida: e.target.value })
                  }
                />
              </ContainerInputs>
              <ContainerInputs>
                <FichaInput
                  disabled
                  label={"Pontos de Ação"}
                  valor={recursos.pontosDeAcao}
                  icon={pontosdeacao}
                />
                <FichaInput
                  disabled
                  label={"Pontos de Mana"}
                  valor={recursos.pontosDeMana}
                  icon={pontosdemana}
                />
                <FichaInput
                  disabled
                  label={"Pontos de Vida"}
                  valor={recursos.pontosDeVida}
                  icon={pontosdevida}
                />
              </ContainerInputs>
            </ContainerAtributos>
            <AtributosImagem />
          </div>
        </SessaoInputsAtributos>
        <SeparadorDadinho />
        <ContainerPersonalidade>
          <PainelPersonalidade>
            <ListaCaracteristicas
              titulo="Pericias"
              caracteristicas={pericias}
              onAdicionarClick={() => setAddPericiasOpen(true)}
              onRemoverClick={(Id) =>
                setPericias(pericias.filter((v) => v.Id !== Id))
              }
            />
          </PainelPersonalidade>
          <PainelPersonalidade>
            <ListaCaracteristicas
              titulo="Vantagens"
              caracteristicas={vantagens}
              onAdicionarClick={() => setAddVantagensOpen(true)}
              onRemoverClick={(Id) =>
                setVantagens(vantagens.filter((v) => v.Id !== Id))
              }
            />
          </PainelPersonalidade>
          <PainelPersonalidade>
            <ListaCaracteristicas
              titulo="Desvantagens"
              caracteristicas={desvantagens}
              onAdicionarClick={() => setAddDesvantagensOpen(true)}
              onRemoverClick={(Id) =>
                setDesvantagens(desvantagens.filter((v) => v.Id !== Id))
              }
            />
          </PainelPersonalidade>
        </ContainerPersonalidade>
        <div>
          <ButtonFicha onClick={() => SaveSlot()}>
            <BookIcon />
            Salvar Ficha em Slot
          </ButtonFicha>
          <ButtonSecundario
            style={{ maxWidth: "110px" }}
            onClick={() => LimparCampos()}
          >
            <BackspaceIcon />
            Limpar Campos
          </ButtonSecundario>
        </div>
      </ContainerMontaFicha>

      <ModalPericias
        open={addPericiasOpen}
        handleClose={() => setAddPericiasOpen(false)}
        onAdicionarClick={(Nome) => {
          setPericias([...pericias, { Id: crypto.randomUUID(), Nome }]);
          setAddPericiasOpen(false);
        }}
      />
      <ModalVantagens
        open={addVantagensOpen}
        handleClose={() => setAddVantagensOpen(false)}
        onAdicionarClick={(Nome) => {
          setVantagens([...vantagens, { Id: crypto.randomUUID(), Nome }]);
          setAddVantagensOpen(false);
        }}
      />
      <ModalDesvantagens
        open={addDesvantagensOpen}
        handleClose={() => setAddDesvantagensOpen(false)}
        onAdicionarClick={(Nome) => {
          setDesvantagens([...desvantagens, { Id: crypto.randomUUID(), Nome }]);
          setAddDesvantagensOpen(false);
        }}
      />
    </>
  );
};
