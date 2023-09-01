import React, { useState } from "react";
import {
  ArquetipoBar,
  ArquetipoText,
  AtributoTexto,
  AtributosIcones,
  Borda,
  Button,
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
} from "./styles";
import ponto from "../../images/tcgminimalista/bg_niverl.svg";
import name from "../../images/tcgminimalista/bg_nme.svg";
import arquetipoImage from "../../images/tcgminimalista/bg_arquetipo.svg";
import borda from "../../images/tcgminimalista/borda.svg";
import poderIcon from "../../images/minimalista/poder.svg";
import habilidadeIcon from "../../images/minimalista/habilidade.svg";
import resistenciaIcon from "../../images/minimalista/resistencia.svg";
import acaoIcon from "../../images/minimalista/acao.svg";
import manaIcon from "../../images/minimalista/mana.svg";
import vidaIcon from "../../images/minimalista/vida.svg";
import html2canvas from "html2canvas";
import { useFicha } from "../../context/ficha.context";
import tresdettag from "../../images/tcg/3dettag.svg";
import throttle from 'lodash/throttle';

export const TacaCarta = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [gradientDegree, setGradientDegree] = useState(125);
  const [foil, setFoil] = useState(false);

  const {
    atributos,
    recursos,
    nome,
    detalhes,
    vantagens,
    desvantagens,
    pericias,
    pontosTotais,
    arquetipo,
    extras,
    imageBlob,
  } = useFicha();

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

  const recursosFinal = {
    pontosDeAcao:
      parseInt(recursos.pontosDeAcao) + parseInt(extras.pontosDeAcao),
    pontosDeMana:
      parseInt(recursos.pontosDeMana) + parseInt(extras.pontosDeMana),
    pontosDeVida:
      parseInt(recursos.pontosDeVida) + parseInt(extras.pontosDeVida),
  };

  const captureAndSaveFicha = () => {
    const container = document.querySelector("#container-ficha-taca-carta"); // Use a classe do ContainerFicha real

    if (foil)
      container.classList.remove('foil');

    if (container) {
      html2canvas(container).then((canvas) => {
        // Convertendo o canvas para um URL de imagem
        const imgURL = canvas.toDataURL("image/png");

        // Criando um link para download
        const downloadLink = document.createElement("a");
        downloadLink.href = imgURL;
        downloadLink.download = "ficha.png";
        downloadLink.click();
      });
    }

    if (foil)
      container.classList.add('foil');
  };

  const handleMouseMove = throttle((e) => {
    console.log(e.nativeEvent.offsetX);
    console.log(e.nativeEvent.touches);
    const posX = e.nativeEvent.offsetX || (e.nativeEvent.touches && e.nativeEvent.touches[0].clientX);
    const posY = e.nativeEvent.offsetY || (e.nativeEvent.touches && e.nativeEvent.touches[0].clientY);
    const x = Math.abs(Math.floor(100 / e.target.offsetWidth * posX) - 100);
    const y = Math.abs(Math.floor(100 / e.target.offsetHeight * posY) - 100);
    
    const backgroundX = 50 + (x - 50) / 1.5;
    const backgroundY = 50 + (y - 50) / 1.5;

    const ty = ((backgroundY - 50) / 2) * -1;
    const tx = ((backgroundX - 50) / 1.5) * 0.5;
    setRotation({ x: ty, y: tx });

    const _gradientDegree = 20 + Math.abs((50 - x) + (50 - y)) * 1.5;
    setGradientDegree(_gradientDegree);
  }, 100);

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
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
        <h1>TacaCarta</h1>
        <p style={{ color: "#6F0062" }}>BETA</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              paddingTop: "4px",
              paddingBottom: "8px",
            }}
          >
            <input type="checkbox" id="check-foil" onChange={(e) => setFoil(!foil)} checked={foil}/>
            <label htmlFor="check-foil">Holográfica (apenas visualização)</label>
        </div>
        <Card
          className={foil ? "foil" : ""}
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchEnd={handleMouseLeave}
          style={{ 
            backgroundImage: `url(${imageBlob ??
                              "https://site.jamboeditora.com.br/wp-content/uploads/2023/07/3DeT-abertura-mobile.png"})`,
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          }}
          gradientDegree={gradientDegree}
          id="container-ficha-taca-carta"
        >
          <Borda src={borda} />
          <ContainerBarras>
            <TopoNomePonto>
              <NomeArquetipoContainer>
                <img alt="Nome" src={name} />
                <img alt="Ponto" src={ponto} />
              </NomeArquetipoContainer>
              <NomePontoTexto>
                <Nometexto>{nome}</Nometexto>
                <Pontotexto>{pontosTotais}</Pontotexto>
              </NomePontoTexto>
            </TopoNomePonto>
            <ContainerArquetipo>
              <ArquetipoBar src={arquetipoImage} />
              <ArquetipoText>{arquetipo}</ArquetipoText>
            </ContainerArquetipo>
          </ContainerBarras>
          <ContainerAtributos>
            <ContainerITAtributos>
              <ContainerAlinhamentoAPoder>
                <AtributosIcones>
                  <Icon src={poderIcon} />
                  <AtributoTexto>{atributos.poder}</AtributoTexto>
                </AtributosIcones>
              </ContainerAlinhamentoAPoder>
            </ContainerITAtributos>
            <ContainerITAtributos>
              <ContainerAlinhamentoAHabilidade>
                <AtributosIcones>
                  <Icon src={habilidadeIcon} />
                  <AtributoTexto>{atributos.habilidade}</AtributoTexto>
                </AtributosIcones>
              </ContainerAlinhamentoAHabilidade>
            </ContainerITAtributos>
            <ContainerITAtributos>
              <ContainerAlinhamentoAResistencia>
                <AtributosIcones>
                  <Icon src={resistenciaIcon} />
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
                <SubIcon src={acaoIcon} />
                <RecursoTexto>{recursosFinal.pontosDeAcao !== 0
                  ? recursosFinal.pontosDeAcao
                  : extras.pontosDeAcao + 1}</RecursoTexto>
              </TagRecursoAcao>
              <TagRecursoMana>
                <SubIcon src={manaIcon} />
                <RecursoTexto>{recursosFinal.pontosDeMana !== 0
                  ? recursosFinal.pontosDeMana
                  : extras.pontosDeMana + 1}</RecursoTexto>
              </TagRecursoMana>
              <TagRecursoVida>
                <SubIcon src={vidaIcon} />
                <RecursoTexto>{recursosFinal.pontosDeVida !== 0
                  ? recursosFinal.pontosDeVida
                  : extras.pontosDeVida + 1}</RecursoTexto>
              </TagRecursoVida>
            </ContainerRecursosTabs>
            <img alt="Três dê e tê tag" src={tresdettag} />
          </ContainerRecursos>
        </Card>
        <br />
        <p>
          Modelo de ficha por{" "}
          <a href="https://www.facebook.com/groups/161485003862799/user/100086200497493/">
            Lungas Neto
          </a>
        </p>
        <br />
      </div>
      <Button onClick={() => captureAndSaveFicha()}>Salvar</Button>
    </Container>
  );
};
