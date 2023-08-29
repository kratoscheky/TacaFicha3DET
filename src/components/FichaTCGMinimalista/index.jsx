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
  ContainerAlinhamentoA,
  ContainerArquetipo,
  ContainerAtributos,
  ContainerBarras,
  ContainerDescricao,
  ContainerITAtributos,
  ContainerTextos,
  ContainerVantagensDes,
  FundoAtributos,
  H1Descricao,
  Icon,
  NomeArquetipoContainer,
  NomePontoTexto,
  Nometexto,
  PDescricao,
  PDescricaoDesvantagens,
  PDescricaoPericias,
  PDescricaoVantagens,
  Pontotexto,
  RecursoTexto,
  RecursosIcones,
  SubIcon,
  TopoNomePonto,
} from "./styles";
import ponto from "../../images/tcgminimalista/bg_niverl.svg";
import name from "../../images/tcgminimalista/bg_nme.svg";
import arquetipoImage from "../../images/tcgminimalista/bg_arquetipo.svg";
import poder from "../../images/tcgminimalista/bg_poder.svg";
import habilidade from "../../images/tcgminimalista/bg_habilidade.svg";
import resistencia from "../../images/tcgminimalista/bg_defesa.svg";
import borda from "../../images/tcgminimalista/borda.svg";
import poderIcon from "../../images/minimalista/poder.svg";
import habilidadeIcon from "../../images/minimalista/habilidade.svg";
import resistenciaIcon from "../../images/minimalista/resistencia.svg";
import acaoIcon from "../../images/minimalista/acao.svg";
import manaIcon from "../../images/minimalista/mana.svg";
import vidaIcon from "../../images/minimalista/vida.svg";
import html2canvas from "html2canvas";
import { useFicha } from "../../context/ficha.context";

export const FichaTCGMinimalista = () => {
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

  const recursosFinal = {
    pontosDeAcao:
      parseInt(recursos.pontosDeAcao) + parseInt(extras.pontosDeAcao),
    pontosDeMana:
      parseInt(recursos.pontosDeMana) + parseInt(extras.pontosDeMana),
    pontosDeVida:
      parseInt(recursos.pontosDeVida) + parseInt(extras.pontosDeVida),
  };

  const captureAndSaveFicha = () => {
    const container = document.querySelector(
      "#container-ficha-tcg-minimalista"
    ); // Use a classe do ContainerFicha real

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
        <h1>TCG Rounded</h1>
        <p style={{ color: "#d11ce0" }}>BETA</p>
        <Card
          style={{
            backgroundImage: `url(${
              inputValue ??
              "https://site.jamboeditora.com.br/wp-content/uploads/2023/07/3DeT-abertura-mobile.png"
            })`,
          }}
          id="container-ficha-tcg-minimalista"
        >
          <Borda src={borda} />
          <ContainerBarras>
            <TopoNomePonto>
              <NomeArquetipoContainer>
                <img src={name} />
                <img src={ponto} />
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
              <FundoAtributos src={poder} />
              <ContainerAlinhamentoA>
                <AtributosIcones>
                  <Icon src={poderIcon} />
                  <AtributoTexto>{atributos.poder}</AtributoTexto>
                </AtributosIcones>
                <RecursosIcones>
                  <SubIcon src={acaoIcon} />
                  <RecursoTexto>{recursosFinal.pontosDeAcao}</RecursoTexto>
                </RecursosIcones>
              </ContainerAlinhamentoA>
            </ContainerITAtributos>
            <ContainerITAtributos>
              <FundoAtributos src={habilidade} />
              <ContainerAlinhamentoA>
                <AtributosIcones>
                  <Icon src={habilidadeIcon} />
                  <AtributoTexto>{atributos.habilidade}</AtributoTexto>
                </AtributosIcones>
                <RecursosIcones>
                  <SubIcon src={manaIcon} />
                  <RecursoTexto>{recursosFinal.pontosDeMana}</RecursoTexto>
                </RecursosIcones>
              </ContainerAlinhamentoA>
            </ContainerITAtributos>
            <ContainerITAtributos>
              <FundoAtributos src={resistencia} />
              <ContainerAlinhamentoA>
                <AtributosIcones>
                  <Icon src={resistenciaIcon} />
                  <AtributoTexto>{atributos.resistencia}</AtributoTexto>
                </AtributosIcones>
                <RecursosIcones>
                  <SubIcon src={vidaIcon} />
                  <RecursoTexto>{recursosFinal.pontosDeVida}</RecursoTexto>
                </RecursosIcones>
              </ContainerAlinhamentoA>
            </ContainerITAtributos>
          </ContainerAtributos>
          <ContainerTextos>
            <ContainerVantagensDes>
                <div>
                  <PDescricaoPericias>
                    {pericias.map((v) => v.Nome + ".").join(" ")}
                  </PDescricaoPericias>
                </div>
              {vantagens.length > 0 && (
                <div>
                  <PDescricaoVantagens>
                    {vantagens.map((v) => v.Nome + ".").join(" ")}
                  </PDescricaoVantagens>
                </div>
              )}

              {desvantagens.length > 0 && (
                <div>
                  <PDescricaoDesvantagens>
                    {desvantagens.map((v) => v.Nome + ".").join(" ")}
                  </PDescricaoDesvantagens>
                </div>
              )}
            </ContainerVantagensDes>
            <ContainerDescricao>
              <p>{detalhes}</p>
            </ContainerDescricao>
          </ContainerTextos>
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
