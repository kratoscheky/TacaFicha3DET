import React from "react";
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

export const TacaCarta = () => {
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
    inputValue,
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
        <p style={{ color: "#d11ce0" }}>BETA</p>
        <Card
          style={{
            backgroundImage: `url(${
              inputValue ??
              "https://site.jamboeditora.com.br/wp-content/uploads/2023/07/3DeT-abertura-mobile.png"
            })`,
          }}
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
