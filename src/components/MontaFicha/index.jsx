import React, { useState } from "react";
import { useFicha } from "../../context/ficha.context";
import { ContainerMontaFicha, TextArea } from "./styles";
import FichaInput from "../FichaInput";
import dadinho from "../../images/dadinhos.png";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ModalPericias from "../ModalPericias";
import ModalVantagens from "../ModalVantagens";
import ModalDesvantagens from "../ModalDesvantagens";

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
    periciais,
    setPericias,
    HandleAtributos,
    pontosTotais,
    setPontosTotais,
    arquetipo,
    setArquetipo,
    extras,
    setExtras
  } = useFicha();

  const [addPericiasOpen, setAddPericiasOpen] = useState(false);
  const [addVantagensOpen, setAddVantagensOpen] = useState(false);
  const [addDesvantagensOpen, setAddDesvantagensOpen] = useState(false);

  const SeparadorDadinho = () => <img src={dadinho} alt={"Dados"} />;

  return (
    <>
      <ContainerMontaFicha>
        <h1>Dados Basicos</h1>
        <FichaInput
          label={"Pontos Totais"}
          valor={pontosTotais}
          onEdit={(e) => setPontosTotais(e.target.value)}
        />
        <FichaInput
          label={"Nome"}
          valor={nome}
          onEdit={(e) => setNome(e.target.value)}
        />
        <FichaInput
          isTextArea
          label={"Descrição"}
          valor={detalhes}
          onEdit={(e) => setDetalhes(e.target.value)}
          maxLength={250}
        />
        <FichaInput
          label={"Arquetipo"}
          valor={arquetipo}
          onEdit={(e) => setArquetipo(e.target.value)}
        />
        <SeparadorDadinho />
        <h1>Atributos</h1>
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
        <SeparadorDadinho />
        <h1>Personalidade</h1>
        <div>
          <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            Perícias{" "}
            <InfoRoundedIcon
              style={{ width: "15px" }}
              onClick={() => setAddPericiasOpen(true)}
            />
            :
          </label>
          <TextArea
            value={periciais}
            onChange={(v) => setPericias(v.target.value)}
          ></TextArea>
        </div>
        <div>
          <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            Vantagens
            <InfoRoundedIcon
              style={{ width: "15px" }}
              onClick={() => setAddVantagensOpen(true)}
            />
            :
          </label>
          <TextArea
            value={vantagens}
            onChange={(v) => setVantagens(v.target.value)}
          ></TextArea>
        </div>
        <div>
          <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            Desvantagens{" "}
            <InfoRoundedIcon
              style={{ width: "15px" }}
              onClick={() => setAddDesvantagensOpen(true)}
            />
            :
          </label>
          <TextArea
            value={desvantagens}
            onChange={(v) => setDesvantagens(v.target.value)}
          ></TextArea>
        </div>
        <h1>Extras</h1>
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
      </ContainerMontaFicha>

      <ModalPericias
        open={addPericiasOpen}
        handleClose={() => setAddPericiasOpen(false)}
      />
      <ModalVantagens
        open={addVantagensOpen}
        handleClose={() => setAddVantagensOpen(false)}
      />
      <ModalDesvantagens
        open={addDesvantagensOpen}
        handleClose={() => setAddDesvantagensOpen(false)}
      />
    </>
  );
};
