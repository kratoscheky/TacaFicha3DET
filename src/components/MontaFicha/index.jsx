import React, {useState} from "react";
import {useFicha} from "../../context/ficha.context";
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
  ContainerAnotacoes,
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
import {ListaCaracteristicas} from "../ListaCaracteristicas";
import {useSlots} from "../../context/slots.context";
import {useImgur} from "../../context/imgur.context";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {ImageComponent} from "../../pages/Ficha";
import ModalTecnicas from "../ModalTecnicas/index.jsx";
import ModalInventario from "../ModalInventario/index.jsx";

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
    recursosFinal,
    recursos,
    anotacoes,
    setAnotacoes,
    tecnicas,
    setTecnicas,
    inventario,
    setInventario
  } = useFicha();

  const {SaveSlot} = useSlots();

  const {remainingUploadsToday} = useImgur();

  const [addPericiasOpen, setAddPericiasOpen] = useState(false);
  const [addVantagensOpen, setAddVantagensOpen] = useState(false);
  const [addDesvantagensOpen, setAddDesvantagensOpen] = useState(false);
  const [addTecnicasOpen, setAddTecnicasOpen] = useState(false);
  const [addInventarioOpen, setAddInventarioOpen] = useState(false);

  const SeparadorDadinho = () => (
    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
      <img style={{
        width: '100%',
        maxWidth: '500px',
      }} src={dadinho} alt={"Dados"}/>
    </div>
  );

  return (
    <>
      <ContainerMontaFicha>
        <SessaoInputs>
          <h1 id="monta-ficha-dados-basicos">Dados Basicos</h1>
          <ContainerInputs>
            <FichaInput
              label={"Nome"}
              valor={nome}
              onEdit={(e) => setNome(e.target.value)}
              testId="nome"
            />
            <FichaInput
              label={"Arquetipo"}
              valor={arquetipo}
              onEdit={(e) => setArquetipo(e.target.value)}
              testId="arquetipo"
            />
            <FichaInput
              label={"Pontos Totais"}
              valor={pontosTotais}
              width={"200px"}
              onEdit={(e) => setPontosTotais(e.target.value)}
              testId="pontos-totais"
            />
          </ContainerInputs>
          <FichaInput
            isTextArea
            label={"Descrição"}
            valor={detalhes}
            onEdit={(e) => setDetalhes(e.target.value)}
            maxLength={250}
            testId="descricao"
          />
        </SessaoInputs>
        <SessaoInputsAtributos>
          <div>
            <ContainerAtributos>
              <h1>Atributos</h1>
              <br/>
              <ContainerInputs>
                <FichaInput
                  type="number"
                  label={"Poder"}
                  valor={atributos.poder}
                  icon={poder}
                  onEdit={(v) => HandleAtributos(v.target.value, "poder")}
                  testId="poder"
                />
                <FichaInput
                  type="number"
                  label={"Habilidade"}
                  valor={atributos.habilidade}
                  icon={habilidade}
                  onEdit={(v) => HandleAtributos(v.target.value, "habilidade")}
                  testId="habilidade"
                />
                <FichaInput
                  type="number"
                  label={"Resistência"}
                  valor={atributos.resistencia}
                  icon={resistencia}
                  onEdit={(v) => HandleAtributos(v.target.value, "resistencia")}
                  testId="resistencia"
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
              <ContainerInputs>
                <FichaInput
                  type="number"
                  label={"Ação Atual"}
                  valor={extras.pontosDeAcao}
                  icon={pontosacaoplus}
                  onEdit={(e) =>
                    setExtras({...extras, pontosDeAcao: parseInt(e.target.value)})
                  }
                />
                <FichaInput
                  type="number"
                  label={"Mana Atual"}
                  valor={extras.pontosDeMana}
                  icon={pontosmanaplus}
                  onEdit={(e) =>
                    setExtras({...extras, pontosDeMana: parseInt(e.target.value)})
                  }
                />
                <FichaInput
                  type="number"
                  label={"Vida Atual"}
                  valor={extras.pontosDeVida}
                  icon={pontosvidaplus}
                  onEdit={(e) =>
                    setExtras({...extras, pontosDeVida: parseInt(e.target.value)})
                  }
                />
              </ContainerInputs>
            </ContainerAtributos>
            <AtributosImagem/>
          </div>
        </SessaoInputsAtributos>
        <ContainerPersonalidade>
          <PainelPersonalidade>
            <ListaCaracteristicas
              titulo="Pericias"
              caracteristicas={pericias}
              onAdicionarClick={() => setAddPericiasOpen(true)}
              onRemoverClick={(Id) =>
                setPericias(pericias.filter((v) => v.Id !== Id))
              }
              testId="btn-pericias"
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
              testId="btn-vantagens"
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
              testId="btn-desvantagens"
            />
          </PainelPersonalidade>
          <PainelPersonalidade>
            <ListaCaracteristicas
              titulo="Técnicas"
              caracteristicas={tecnicas}
              onAdicionarClick={() => setAddTecnicasOpen(true)}
              onRemoverClick={(Id) =>
                setTecnicas(tecnicas.filter((v) => v.Id !== Id))
              }
              testId="btn-tecnicas"
            />
          </PainelPersonalidade>
          <PainelPersonalidade>
            <ListaCaracteristicas
              titulo="Inventário"
              caracteristicas={inventario}
              onAdicionarClick={() => setAddInventarioOpen(true)}
              onRemoverClick={(Id) =>
                setInventario(inventario.filter((v) => v.Id !== Id))
              }
              testId="btn-inventario"
            />
          </PainelPersonalidade>
          <ImageComponent/>
        </ContainerPersonalidade>
        <SessaoInputs>
          <h1>Anotações</h1>
          <ContainerAnotacoes>
            <ReactQuill theme="snow" value={anotacoes} onChange={setAnotacoes}/>
          </ContainerAnotacoes>
        </SessaoInputs>
      </ContainerMontaFicha>

      <ModalPericias
        open={addPericiasOpen}
        handleClose={() => setAddPericiasOpen(false)}
        onAdicionarClick={(Nome) => {
          setPericias([...pericias, {Id: crypto.randomUUID(), Nome}]);
          setAddPericiasOpen(false);
        }}
      />
      <ModalVantagens
        open={addVantagensOpen}
        handleClose={() => setAddVantagensOpen(false)}
        onAdicionarClick={(Nome) => {
          setVantagens([...vantagens, {Id: crypto.randomUUID(), Nome}]);
          setAddVantagensOpen(false);
        }}
      />
      <ModalDesvantagens
        open={addDesvantagensOpen}
        handleClose={() => setAddDesvantagensOpen(false)}
        onAdicionarClick={(Nome) => {
          setDesvantagens([...desvantagens, {Id: crypto.randomUUID(), Nome}]);
          setAddDesvantagensOpen(false);
        }}
      />
      <ModalTecnicas
        open={addTecnicasOpen}
        handleClose={() => setAddTecnicasOpen(false)}
        onAdicionarClick={(Nome) => {
          setTecnicas([...tecnicas, {Id: crypto.randomUUID(), Nome}]);
          setAddTecnicasOpen(false);
        }}
      />
      <ModalInventario
        open={addInventarioOpen}
        handleClose={() => setAddInventarioOpen(false)}
        onAdicionarClick={(Nome) => {
          setInventario([...inventario, {Id: crypto.randomUUID(), Nome}]);
          setAddInventarioOpen(false);
        }}
      />
    </>
  );
};
