import React, {useState} from "react";
import {
  ArquetipoBar,
  ArquetipoText,
  AtributosIcones,
  AtributoTexto,
  Borda,
  Card,
  Container,
  ContainerAlinhamentoAHabilidade,
  ContainerAlinhamentoAPoder,
  ContainerAlinhamentoAResistencia,
  ContainerArquetipo,
  ContainerAtributos,
  ContainerBarras,
  ContainerDescricao,
  ContainerITAtributos,
  ContainerRecursos,
  ContainerRecursosTabs,
  ContainerTextos,
  ContainerVantagensDes,
  H1Descricao,
  Icon,
  NomeArquetipoContainer,
  NomePontoTexto,
  Nometexto,
  PDescricao,
  Pontotexto,
  RecursoTexto,
  SubIcon,
  TagRecursoAcao,
  TagRecursoMana,
  TagRecursoVida,
  TagsPericias,
  TopoNomePonto,
} from "./styles.jsx";
import ponto from "../../../images/tcgminimalista/bg_niverl.svg";
import name from "../../../images/tcgminimalista/bg_nme.svg";
import arquetipoImage from "../../../images/tcgminimalista/bg_arquetipo.svg";
import borda from "../../../images/tcgminimalista/borda.svg";
import poderIcon from "../../../images/minimalista/poder.svg";
import habilidadeIcon from "../../../images/minimalista/habilidade.svg";
import resistenciaIcon from "../../../images/minimalista/resistencia.svg";
import acaoIcon from "../../../images/minimalista/acao.svg";
import manaIcon from "../../../images/minimalista/mana.svg";
import vidaIcon from "../../../images/minimalista/vida.svg";
import html2canvas from "html2canvas";
import {useFicha} from "../../../context/ficha.context.jsx";
import tresdettag from "../../../images/tcg/3dettag.svg";
import throttle from 'lodash/throttle';
import {useBrowserContext} from "../../../context/browser.context.jsx";
import {useShare} from "../../../context/share.context.jsx";

export const TacaCarta = () => {
  const [rotation, setRotation] = useState({x: 0, y: 0});
  const [gradientDegree, setGradientDegree] = useState(125);

  const {isFirefox} = useBrowserContext();

  const {
    atributos,
    nome,
    detalhes,
    vantagens,
    desvantagens,
    pericias,
    pontosTotais,
    arquetipo,
    imageBlob,
    recursosFinal,
    foil,
    setFoil,
    setSalvandoLoading
  } = useFicha();

  const {isShareView} = useShare();

  const CoresPericias = {
    Animais: "#A6CEE3",
    Arte: "#1F78B4",
    Influência: "#B2DF8A",
    Esporte: "#33A02C",
    Luta: "#FB9A99",
    Manha: "#E31A1C",
    Máquinas: "#FDBF6F",
    Medicina: "#FF7F00",
    Mística: "#CAB2D6",
    Percepção: "#6A3D9A",
    Saber: "#F2C000",
    Sustento: "#B15928",
  };

  const handleMouseMove = throttle((e) => {
    const posX = e.nativeEvent.offsetX || (e.nativeEvent.touches && e.nativeEvent.touches[0].clientX);
    const posY = e.nativeEvent.offsetY || (e.nativeEvent.touches && e.nativeEvent.touches[0].clientY);
    const x = Math.abs(Math.floor(100 / e.target.offsetWidth * posX) - 100);
    const y = Math.abs(Math.floor(100 / e.target.offsetHeight * posY) - 100);

    const backgroundX = 50 + (x - 50) / 1.5;
    const backgroundY = 50 + (y - 50) / 1.5;

    const ty = ((backgroundY - 50) / 2) * -1;
    const tx = ((backgroundX - 50) / 1.5) * 0.5;
    setRotation({x: ty, y: tx});

    const _gradientDegree = 20 + Math.abs((50 - x) + (50 - y)) * 1.5;
    setGradientDegree(_gradientDegree);
  }, 100);

  const handleMouseLeave = () => {
    setRotation({x: 0, y: 0});
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          className={foil ? "foil" : ""}
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchEnd={handleMouseLeave}
          style={{
            backgroundImage: `url(${imageBlob ??
            "https://site.jamboeditora.com.br/wp-content/uploads/2023/07/3DeT-abertura-mobile.png"})`,
            transform: `${isFirefox ? 'scale(0.5)' : ''} rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          }}
          gradientDegree={gradientDegree}
          id="container-ficha-taca-carta"
        >
          <Borda src={borda}/>
          <ContainerBarras>
            <TopoNomePonto>
              <NomeArquetipoContainer>
                <img alt="Nome" src={name}/>
                <img alt="Ponto" src={ponto}/>
              </NomeArquetipoContainer>
              <NomePontoTexto>
                <Nometexto>{nome}</Nometexto>
                <Pontotexto>{pontosTotais}</Pontotexto>
              </NomePontoTexto>
            </TopoNomePonto>
            <ContainerArquetipo>
              <ArquetipoBar src={arquetipoImage}/>
              <ArquetipoText>{arquetipo}</ArquetipoText>
            </ContainerArquetipo>
          </ContainerBarras>
          <ContainerAtributos>
            <ContainerITAtributos>
              <ContainerAlinhamentoAPoder>
                <AtributosIcones>
                  <Icon src={poderIcon}/>
                  <AtributoTexto>{atributos.poder}</AtributoTexto>
                </AtributosIcones>
              </ContainerAlinhamentoAPoder>
            </ContainerITAtributos>
            <ContainerITAtributos>
              <ContainerAlinhamentoAHabilidade>
                <AtributosIcones>
                  <Icon src={habilidadeIcon}/>
                  <AtributoTexto>{atributos.habilidade}</AtributoTexto>
                </AtributosIcones>
              </ContainerAlinhamentoAHabilidade>
            </ContainerITAtributos>
            <ContainerITAtributos>
              <ContainerAlinhamentoAResistencia>
                <AtributosIcones>
                  <Icon src={resistenciaIcon}/>
                  <AtributoTexto>{atributos.resistencia}</AtributoTexto>
                </AtributosIcones>
              </ContainerAlinhamentoAResistencia>
            </ContainerITAtributos>
          </ContainerAtributos>
          <ContainerTextos>
            <ContainerVantagensDes>
              <div>
                <TagsPericias>
                  {pericias.map((p) => (
                    <p
                      style={{
                        backgroundColor: CoresPericias[p.Nome],
                      }}
                    >
                      {p.Nome}
                    </p>
                  ))}
                </TagsPericias>
                {vantagens.length > 0 && (
                  <>
                    <H1Descricao>Vantagens</H1Descricao>
                    <PDescricao>
                      {vantagens.map((v) => v.Nome + ".").join(" ")}
                    </PDescricao>
                  </>
                )}
              </div>
              <div>
                <div
                  style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#00000063",
                  }}
                />
                <div
                  style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#00000041",
                  }}
                />
              </div>
              {desvantagens.length > 0 && (
                <div>
                  <H1Descricao>Desvantagens</H1Descricao>
                  <PDescricao>
                    {desvantagens.map((v) => v.Nome + ".").join(" ")}
                  </PDescricao>
                </div>
              )}
            </ContainerVantagensDes>
            <ContainerDescricao>
              <p>{detalhes}</p>
            </ContainerDescricao>
          </ContainerTextos>
          <ContainerRecursos>
            <ContainerRecursosTabs>
              <TagRecursoAcao>
                <SubIcon src={acaoIcon}/>
                <RecursoTexto>{recursosFinal.pontosDeAcao}</RecursoTexto>
              </TagRecursoAcao>
              <TagRecursoMana>
                <SubIcon src={manaIcon}/>
                <RecursoTexto>{recursosFinal.pontosDeMana}</RecursoTexto>
              </TagRecursoMana>
              <TagRecursoVida>
                <SubIcon src={vidaIcon}/>
                <RecursoTexto>{recursosFinal.pontosDeVida}</RecursoTexto>
              </TagRecursoVida>
            </ContainerRecursosTabs>
            <img alt="Três dê e tê tag" src={tresdettag}/>
          </ContainerRecursos>
        </Card>
      </div>
    </Container>
  );
};
