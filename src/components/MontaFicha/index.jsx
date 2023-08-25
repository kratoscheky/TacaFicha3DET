import React, { useEffect, useState } from "react";
import { useFicha } from "../../context/ficha.context";
import { ContainerMontaFicha, TextArea } from "./styles";
import dadinho from '../../images/dadinhos.png'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ModalPericias from "../ModalPericias";

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
    HandleAtributos
  } = useFicha();

  const [addPericiasOpen, setAddPericiasOpen] = useState(false);

  return (
    <>
      <ContainerMontaFicha>
        <h1>Dados Basicos</h1>
        <div>
          <label>Nome:</label>
          <input value={nome} onChange={(e) => setNome(e.target.value)}></input>
        </div>
        <div>
          <label>Descrição:</label>
          <TextArea
            maxLength={250}
            value={detalhes}
            onChange={(e) => setDetalhes(e.target.value)}
          ></TextArea>
        </div>
        <img src={dadinho} />
        <h1>Atributos</h1>
        <div>
          <label>Poder:</label>
          <input
            value={atributos.poder}
            onChange={(v) => HandleAtributos(v.target.value, "poder")}
          ></input>
        </div>
        <div>
          <label>Habilidade:</label>
          <input
            value={atributos.habilidade}
            onChange={(v) => HandleAtributos(v.target.value, "habilidade")}
          ></input>
        </div>
        <div>
          <label>Resistência:</label>
          <input
            value={atributos.resistencia}
            onChange={(v) => HandleAtributos(v.target.value, "resistencia")}
          ></input>
        </div>
        <img src={dadinho} />
        <h1>Personalidade</h1>
        <div>
          <label style={{display: 'flex', alignItems: 'center', gap: '4px'}}>Perícias <InfoRoundedIcon style={{width: '15px'}} onClick={() => setAddPericiasOpen(true)} />:</label>
          <TextArea
            value={periciais}
            onChange={(v) => setPericias(v.target.value)}
          ></TextArea>
        </div>
        <div>
          <label>Vantagens:</label>
          <TextArea
            value={vantagens}
            onChange={(v) => setVantagens(v.target.value)}
          ></TextArea>
        </div>
        <div>
          <label>Desvantagens:</label>
          <TextArea
            value={desvantagens}
            onChange={(v) => setDesvantagens(v.target.value)}
          ></TextArea>
        </div>
      </ContainerMontaFicha>

      <ModalPericias open={addPericiasOpen} handleClose={() => setAddPericiasOpen(false)} />
    </>
  );
};
