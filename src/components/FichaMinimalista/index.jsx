import React from "react";
import { useFicha } from "../../context/ficha.context";
import {
  ContainerExtras,
  Icon,
  Button,
  Container,
  Card,
  InnerCard,
  NomeTopo,
  StatusContainer,
  ContainerIcons,
  ExtraCard,
  DescricaoMinimalista,
  ArquetipoTexto
} from "./styles";
import poderIcon from "../../images/poder.svg";
import habilidadeIcon from "../../images/habilidade.svg";
import resistenciaIcon from "../../images/resistencia.svg";
import acaoIcon from "../../images/acao.svg";
import manaIcon from "../../images/mana.svg";
import vidaIcon from "../../images/vida.svg";
import html2canvas from "html2canvas";

export const FichaMinimalista = () => {
  const {
    atributos,
    recursos,
    nome,
    arquetipo,
    detalhes,
    vantagens,
    desvantagens,
    pericias,
    extras,
    inputValue
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
    const container = document.querySelector("#container-ficha-minimalista"); // Use a classe do ContainerFicha real

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
      <h1>Minimalista</h1>
      <Card
        id="container-ficha-minimalista"
        style={{
          backgroundImage:
          `url(${inputValue ?? 'https://site.jamboeditora.com.br/wp-content/uploads/2023/07/3DeT-abertura-mobile.png'})`,
        }}
      >
        <NomeTopo>
          <p>{nome}</p>
        </NomeTopo>
        <ArquetipoTexto>
          <p>{arquetipo}</p>
        </ArquetipoTexto>
        <ContainerIcons>
          <InnerCard>
            <StatusContainer>
              <Icon src={poderIcon} />
              <p>{atributos.poder}</p>
            </StatusContainer>
            <StatusContainer>
              <Icon src={habilidadeIcon} />
              <p>{atributos.habilidade}</p>
            </StatusContainer>
            <StatusContainer>
              <Icon src={resistenciaIcon} />
              <p>{atributos.resistencia}</p>
            </StatusContainer>
          </InnerCard>
          <InnerCard>
            <StatusContainer>
              <Icon src={acaoIcon} />
              <p>
                {recursos.pontosDeVida != 0
                  ? recursosFinal.pontosDeAcao
                  : recursosFinal.pontosDeAcao + 1}
              </p>
            </StatusContainer>
            <StatusContainer>
              <Icon src={manaIcon} />
              <p>
                {recursos.pontosDeMana != 0
                  ? recursosFinal.pontosDeMana
                  : recursosFinal.pontosDeMana + 1}
              </p>
            </StatusContainer>
            <StatusContainer>
              <Icon src={vidaIcon} />
              <p>
                {recursos.pontosDeVida != 0
                  ? recursosFinal.pontosDeVida
                  : recursosFinal.pontosDeVida + 1}
              </p>
            </StatusContainer>
          </InnerCard>
          <ContainerExtras>
            <ExtraCard>
              <b>Perícias</b>
              <p>{pericias.map((v) => v.Nome + ".").join(" ")}</p>
            </ExtraCard>
            <ExtraCard>
              <b>Vantagens</b>
              <p>{vantagens.map((v) => v.Nome + ".").join(" ")}</p>
            </ExtraCard>
            <ExtraCard>
              <b>Desvantagens</b>
              <p>{desvantagens.map((v) => v.Nome + ".").join(" ")}</p>
            </ExtraCard>
          </ContainerExtras>
        </ContainerIcons>
        <DescricaoMinimalista>
          <p>{detalhes}</p>
        </DescricaoMinimalista>
      </Card>

      <Button onClick={captureAndSaveFicha}>Salvar Imagem</Button>
    </Container>
  );
};