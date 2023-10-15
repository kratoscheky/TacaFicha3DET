import React, {useRef, useState} from "react";
import poder from "../../../images/home/poder.svg";
import habilidade from "../../../images/home/habilidade.svg";
import resistencia from "../../../images/home/resistencia.svg";
import pontosdemana from "../../../images/home/pontosdemana.svg";
import pontosdevida from "../../../images/home/pontosdevida.svg";
import pontosdeacao from "../../../images/home/pontosdeacao.svg";
import pontosacaoplus from "../../../images/home/pontosacaoplus.svg";
import pontosvidaplus from "../../../images/home/pontosvidaplus.svg";
import pontosmanaplus from "../../../images/home/pontosmanaplus.svg";
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
import FichaInput from "../../FichaInput";
import dadinho from "../../../images/dadinhos.png";
import {useSlots} from "../../../context/slots.context";
import {useImgur} from "../../../context/imgur.context";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useFichaAlpha} from "../../../context/fichaAlpha.context.jsx";
import {ListaCaracteristicasAlpha} from "../ListaCaracteristicasAlpha/index.jsx";
import ModalPericiasAlpha from "../ModalPericias/index.jsx";
import ModalVantagensAlpha from "../ModalVantagens/index.jsx";
import ModalDesvantagensAlpha from "../ModalDesvantagens/index.jsx";
import {useFicha} from "../../../context/ficha.context.jsx";
import {ButtonCut, ButtonUpload, ContainerButtons, CropContainer, ImageInputContainer} from "./styles.jsx";
import BackupIcon from "@mui/icons-material/Backup.js";
import ContentCutIcon from "@mui/icons-material/ContentCut.js";
import {CropComponent} from "../../CropComponent/index.jsx";

export const MontaFichaAlpha = () => {
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
    anotacoes,
    setAnotacoes
  } = useFichaAlpha();

  const {SaveSlot} = useSlots();

  const {remainingUploadsToday} = useImgur();

  const [addPericiasOpen, setAddPericiasOpen] = useState(false);
  const [addVantagensOpen, setAddVantagensOpen] = useState(false);
  const [addDesvantagensOpen, setAddDesvantagensOpen] = useState(false);

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
              label={"Pontos"}
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
                  label={"Força"}
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
                <FichaInput
                    type="number"
                    label={"Armadura"}
                    valor={atributos.armadura}
                    icon={resistencia}
                    onEdit={(v) => HandleAtributos(v.target.value, "armadura")}
                    testId="poder"
                />
                <FichaInput
                    type="number"
                    label={"PdF"}
                    valor={atributos.poderDeFogo}
                    icon={poder}
                    onEdit={(v) => HandleAtributos(v.target.value, "poderDeFogo")}
                    testId="poder"
                />
              </ContainerInputs>
              <ContainerInputs>
                <FichaInput
                  type="number"
                  label={"Pontos de Vida"}
                  valor={extras.pontosDeVida}
                  icon={pontosdevida}
                  onEdit={(e) =>
                    setExtras({...extras, pontosDeVida: parseInt(e.target.value)})
                  }
                />
                <FichaInput
                  type="number"
                  label={"Pontos de Magia"}
                  valor={extras.pontosDeMana}
                  icon={pontosdemana}
                  onEdit={(e) =>
                    setExtras({...extras, pontosDeMana: parseInt(e.target.value)})
                  }
                />
              </ContainerInputs>
            </ContainerAtributos>
            <AtributosImagem/>
          </div>
        </SessaoInputsAtributos>
        <ContainerPersonalidade>
          <PainelPersonalidade>
            <ListaCaracteristicasAlpha
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
            <ListaCaracteristicasAlpha
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
            <ListaCaracteristicasAlpha
              titulo="Desvantagens"
              caracteristicas={desvantagens}
              onAdicionarClick={() => setAddDesvantagensOpen(true)}
              onRemoverClick={(Id) =>
                setDesvantagens(desvantagens.filter((v) => v.Id !== Id))
              }
              testId="btn-desvantagens"
            />
          </PainelPersonalidade>
        </ContainerPersonalidade>
        <SessaoInputs>
          <h1>Anotações</h1>
          <ContainerAnotacoes>
            <ReactQuill theme="snow" value={anotacoes} onChange={setAnotacoes}/>
          </ContainerAnotacoes>
        </SessaoInputs>
        <ImageComponent/>
      </ContainerMontaFicha>

      <ModalPericiasAlpha
        open={addPericiasOpen}
        handleClose={() => setAddPericiasOpen(false)}
        onAdicionarClick={(Nome) => {
          setPericias([...pericias, {Id: crypto.randomUUID(), Nome}]);
          setAddPericiasOpen(false);
        }}
      />
      <ModalVantagensAlpha
        open={addVantagensOpen}
        handleClose={() => setAddVantagensOpen(false)}
        onAdicionarClick={(Nome) => {
          setVantagens([...vantagens, {Id: crypto.randomUUID(), Nome}]);
          setAddVantagensOpen(false);
        }}
      />
      <ModalDesvantagensAlpha
        open={addDesvantagensOpen}
        handleClose={() => setAddDesvantagensOpen(false)}
        onAdicionarClick={(Nome) => {
          setDesvantagens([...desvantagens, {Id: crypto.randomUUID(), Nome}]);
          setAddDesvantagensOpen(false);
        }}
      />
    </>
  );
};

export function ImageComponent() {
  const [viewCrop, setViewCrop] = useState(false)
  const hiddenFileInput = useRef(null);
  const {handleFileChange} = useFicha();
  const handleClick = event => {
    hiddenFileInput.current.click();
    setViewCrop(true);
  };

  return <ImageInputContainer>
    <h1>Imagem</h1>
    <ContainerButtons>
      <ButtonUpload onClick={() => handleClick()}>
        <BackupIcon />
        Enviar Uma Imagem
      </ButtonUpload>
      <input
          type="file"
          onChange={handleFileChange}
          style={{
            display: "none"
          }}
          ref={hiddenFileInput}
          data-test-id="imagem-customizada"
      />
      <ButtonCut onClick={() => setViewCrop(true)}><ContentCutIcon/></ButtonCut>
    </ContainerButtons>
    {viewCrop &&
        <CropContainer onClick={() => setViewCrop(false)}>
          <CropComponent Fechar={() => setViewCrop(false)}/>
        </CropContainer>
    }
  </ImageInputContainer>;
}
