import React, { useState } from "react";
import { useFicha } from "../../context/ficha.context";
import { ContainerMontaFicha, TextArea } from "./styles";
import FichaInput from '../FichaInput'
import dadinho from '../../images/dadinhos.png'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
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
    HandleAtributos
  } = useFicha();

  const [addPericiasOpen, setAddPericiasOpen] = useState(false);
  const [addVantagensOpen, setAddVantagensOpen] = useState(false);
  const [addDesvantagensOpen, setAddDesvantagensOpen] = useState(false);

  const SeparadorDadinho = () => <img src={dadinho} alt={'Dados'} />;

  return (
    <>
      <ContainerMontaFicha>
        <h1>Dados Basicos</h1>
        <FichaInput label={'Nome'} valor={nome} onEdit={(e) => setNome(e.target.value)} />
        <FichaInput label={'Descrição'} valor={detalhes} onEdit={(e) => setDetalhes(e.target.value)} maxLength={250} />
        <SeparadorDadinho />
        <h1>Atributos</h1>
        <FichaInput label={'Poder'} valor={atributos.poder} onEdit={(v) => HandleAtributos(v.target.value, "poder")} />
        <FichaInput label={'Habilidade'} valor={atributos.habilidade} onEdit={(v) => HandleAtributos(v.target.value, "habilidade")} />
        <FichaInput label={'Resistência'} valor={atributos.resistencia} onEdit={(v) => HandleAtributos(v.target.value, "resistencia")} />
        <SeparadorDadinho />
        <h1>Personalidade</h1>
        <div>
          {/* <label style={{display: 'flex', alignItems: 'center', gap: '4px'}}>Perícias <InfoRoundedIcon style={{width: '15px'}} onClick={() => setAddPericiasOpen(true)} />:</label> */}
          <TextArea
            value={periciais}
            onChange={(v) => setPericias(v.target.value)}
          ></TextArea>
        </div>
        <div>
          {/* <label style={{display: 'flex', alignItems: 'center', gap: '4px'}}>Vantagens <InfoRoundedIcon style={{width: '15px'}} onClick={() => setAddVantagensOpen(true)} />:</label> */}
          <TextArea
            value={vantagens}
            onChange={(v) => setVantagens(v.target.value)}
          ></TextArea>
        </div>
        <div>
          {/* <label style={{display: 'flex', alignItems: 'center', gap: '4px'}}>Desvantagens <InfoRoundedIcon style={{width: '15px'}} onClick={() => setAddDesvantagensOpen(true)} />:</label> */}
          <TextArea
            value={desvantagens}
            onChange={(v) => setDesvantagens(v.target.value)}
          ></TextArea>
        </div>
      </ContainerMontaFicha>

      <ModalPericias open={addPericiasOpen} handleClose={() => setAddPericiasOpen(false)} />
      <ModalVantagens open={addVantagensOpen} handleClose={() => setAddVantagensOpen(false)} />
      <ModalDesvantagens open={addDesvantagensOpen} handleClose={() => setAddDesvantagensOpen(false)} />
    </>
  );
};
