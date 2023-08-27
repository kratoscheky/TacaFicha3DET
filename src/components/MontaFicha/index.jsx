import React, { useState } from "react";
import { useFicha } from "../../context/ficha.context";
import { ButtonFicha, ContainerInputs, ContainerMontaFicha } from "./styles";
import FichaInput from "../FichaInput";
import dadinho from "../../images/dadinhos.png";
import ModalPericias from "../ModalPericias";
import ModalVantagens from "../ModalVantagens";
import ModalDesvantagens from "../ModalDesvantagens";
import { ListaCaracteristicas } from "../ListaCaracteristicas";
import { useSlots } from "../../context/slots.context";
import BookIcon from '@mui/icons-material/Book';

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
    setExtras
  } = useFicha();

  const {SaveSlot} = useSlots();

  const [addPericiasOpen, setAddPericiasOpen] = useState(false);
  const [addVantagensOpen, setAddVantagensOpen] = useState(false);
  const [addDesvantagensOpen, setAddDesvantagensOpen] = useState(false);

  const SeparadorDadinho = () => <img src={dadinho} alt={"Dados"} />;

  return (
    <>
      <ContainerMontaFicha>
        <h1>Dados Basicos</h1>
        <FichaInput
          label={"Nome"}
          valor={nome}
          onEdit={(e) => setNome(e.target.value)}
        />
        <ContainerInputs>
          <FichaInput
            label={"Arquetipo"}
            valor={arquetipo}
            onEdit={(e) => setArquetipo(e.target.value)}
          />
          <FichaInput
            label={"Pontos Totais"}
            valor={pontosTotais}
            width={'110px'}
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
        <SeparadorDadinho />
        <h1>Atributos</h1>
        <ContainerInputs>
          <FichaInput
            label={"Poder"}
            valor={atributos.poder}
            onEdit={(v) => HandleAtributos(v.target.value, "poder")}
          />
          <FichaInput
            label={"Habilidade"}
            valor={atributos.habilidade}
            onEdit={(v) => HandleAtributos(v.target.value, "habilidade")}
          />
          <FichaInput
            label={"Resistência"}
            valor={atributos.resistencia}
            onEdit={(v) => HandleAtributos(v.target.value, "resistencia")}
          />
        </ContainerInputs>
        <SeparadorDadinho />
        <h1>Personalidade</h1>
        <div>
          <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            Perícias:
          </label>
          <ListaCaracteristicas
            caracteristicas={pericias}
            onAdicionarClick={() => setAddPericiasOpen(true)}
            onRemoverClick={(Id) => setPericias(pericias.filter((v) => v.Id !== Id))}
          />
        </div>
        <div>
          <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            Vantagens:
          </label>
          <ListaCaracteristicas
            caracteristicas={vantagens}
            onAdicionarClick={() => setAddVantagensOpen(true)}
            onRemoverClick={(Id) => setVantagens(vantagens.filter((v) => v.Id !== Id))}
          />
        </div>
        <div>
          <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            Desvantagens:
          </label>
          <ListaCaracteristicas
            caracteristicas={desvantagens}
            onAdicionarClick={() => setAddDesvantagensOpen(true)}
            onRemoverClick={(Id) => setDesvantagens(desvantagens.filter((v) => v.Id !== Id))}
          />
        </div>
        <SeparadorDadinho />
        <h1>Extras</h1>
        <ContainerInputs>
          <FichaInput
            label={"+Pontos de Ação"}
            valor={extras.pontosDeAcao}
            onEdit={(e) => setExtras({...extras, pontosDeAcao: e.target.value})}
          />
          <FichaInput
            label={"+Pontos de Mana"}
            valor={extras.pontosDeMana}
            onEdit={(e) => setExtras({...extras, pontosDeMana: e.target.value})}
          />
          <FichaInput
            label={"+Pontos de Vida"}
            valor={extras.pontosDeVida}
            onEdit={(e) => setExtras({...extras, pontosDeVida: e.target.value})}
          />
        </ContainerInputs>
        <ButtonFicha onClick={() => SaveSlot()}>
          <BookIcon />
          Salvar Ficha em Slot
        </ButtonFicha>
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
