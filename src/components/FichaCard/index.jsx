import React from "react";
import { useFicha } from "../../context/ficha.context";
import {
  ContainerAtributos,
  ContainerFicha,
  ContainerExtras,
  DadosPersonagem,
  Icon,
  Button,
  CamposTopo,
  IconSecundario,
  AtributoContainer,
  StatusContainer,
  SubStatusContainer,
  SubStatusTexto,
  PericiasTexto,
  VantagensTexto,
  DesvantagensTexto,
  Detalhes,
  AlinhamentoInfos,
  PontosTotais,
  SubAlinhamentos,
  ArquetipoTexto,
} from "./styles";
import poderIcon from "../../images/tcg/poder.svg";
import habilidadeIcon from "../../images/tcg/habilidade.svg";
import resistenciaIcon from "../../images/tcg/resistencia.svg";
import acaoIcon from "../../images/tcg/acao.svg";
import manaIcon from "../../images/tcg/mana.svg";
import vidaIcon from "../../images/tcg/vida.svg";
import topoImage from "../../images/tcg/topo.svg";
import barrinhaPreta from "../../images/tcg/barrinhapreta.svg";
import pontoBar from "../../images/tcg/ponto.svg";
import bottomBar from "../../images/tcg/bottombar.svg";
import cardrosa from "../../images/tcg/cardrosa.svg";
import html2canvas from "html2canvas";
import SaveIcon from "@mui/icons-material/Save";

export const FichaCard = () => {
  const {
    atributos,
    nome,
    detalhes,
    vantagens,
    desvantagens,
    pericias,
    pontosTotais,
    arquetipo,
    extras,
    imageBlob,
    recursosFinal,
    setSalvandoLoading
  } = useFicha();

  const captureAndSaveFicha = () => {
    const container = document.querySelector("#container-ficha-card"); // Use a classe do ContainerFicha real

    if (container) {
      setSalvandoLoading(true)
      html2canvas(container).then((canvas) => {
        // Convertendo o canvas para um URL de imagem
        const imgURL = canvas.toDataURL("image/png");

        // Criando um link para download
        const downloadLink = document.createElement("a");
        downloadLink.href = imgURL;
        downloadLink.download = "ficha.png";
        downloadLink.click();
        setSalvandoLoading(false)
      }).catch(e => {
        alert(`Ocorreu um erro! ${e.message}`)
        setSalvandoLoading(false);
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: 'space-between',
        height: '100%'
      }}
    >
      <div style={{
        display: 'flex',
        marginTop: "16px",
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h1 style={{color: '#FFF'}}>TCG</h1>
        <ContainerFicha
          style={{ backgroundImage: `url(${imageBlob})` }}
          id="container-ficha-card"
        >
          <DadosPersonagem>
            <CamposTopo>
              <h1>{nome}</h1>
              <PontosTotais>{pontosTotais}</PontosTotais>
              <img src={topoImage} />
              <img src={pontoBar} />
            </CamposTopo>
            <img
              src={bottomBar}
              style={{
                position: "absolute",
                top: "84px",
              }}
            />
            <ArquetipoTexto>{arquetipo}</ArquetipoTexto>
          </DadosPersonagem>
          <ContainerAtributos>
            <div>
              <StatusContainer>
                <AtributoContainer>
                  <Icon src={poderIcon} />
                  <p>{atributos.poder}</p>
                </AtributoContainer>
                <img src={cardrosa} />
              </StatusContainer>
              <SubStatusContainer>
                <SubStatusTexto>
                  <img src={barrinhaPreta} />
                  <SubAlinhamentos>
                    <IconSecundario src={acaoIcon} />
                    <p>
                      {recursosFinal.pontosDeAcao}
                    </p>
                  </SubAlinhamentos>
                </SubStatusTexto>
              </SubStatusContainer>
            </div>
            <div>
              <StatusContainer>
                <AtributoContainer>
                  <Icon src={habilidadeIcon} />
                  <p>{atributos.habilidade}</p>
                </AtributoContainer>
                <svg
                  width="156"
                  height="72"
                  viewBox="0 0 156 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_2_8)">
                    <path d="M0 0H149.5L132 65H0V0Z" fill="#EC42DA" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_2_8"
                      x="0"
                      y="0"
                      width="155.5"
                      height="72"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="6" dy="7" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2_8"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2_8"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </StatusContainer>
              <StatusContainer>
                <SubStatusTexto>
                  <img src={barrinhaPreta} />
                  <SubAlinhamentos>
                    <IconSecundario src={manaIcon} />
                    <p>
                      {recursosFinal.pontosDeMana}
                    </p>
                  </SubAlinhamentos>
                </SubStatusTexto>
              </StatusContainer>
            </div>
            <div>
              <StatusContainer>
                <AtributoContainer>
                  <Icon src={resistenciaIcon} />
                  <p>{atributos.resistencia}</p>
                </AtributoContainer>
                <svg
                  width="156"
                  height="72"
                  viewBox="0 0 156 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_2_8)">
                    <path d="M0 0H149.5L132 65H0V0Z" fill="#EC42DA" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_2_8"
                      x="0"
                      y="0"
                      width="155.5"
                      height="72"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="6" dy="7" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2_8"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2_8"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </StatusContainer>
              <StatusContainer>
                <SubStatusTexto>
                  <img src={barrinhaPreta} />
                  <SubAlinhamentos>
                    <IconSecundario src={vidaIcon} />
                    <p>
                      {recursosFinal.pontosDeVida}
                    </p>
                  </SubAlinhamentos>
                </SubStatusTexto>
              </StatusContainer>
            </div>
          </ContainerAtributos>
          <AlinhamentoInfos>
            <ContainerExtras>
              <PericiasTexto>
                <b>{pericias.map((v) => v.Nome + ".").join(" ")}</b>
              </PericiasTexto>
              <VantagensTexto>
                <p>{vantagens.map((v) => v.Nome + ".").join(" ")}</p>
              </VantagensTexto>
              <DesvantagensTexto>
                <p>{desvantagens.map((v) => v.Nome + ".").join(" ")}</p>
              </DesvantagensTexto>
            </ContainerExtras>
            <Detalhes>
              <p>{detalhes}</p>
            </Detalhes>
          </AlinhamentoInfos>
        </ContainerFicha>
        <p style={{color: '#FFF'}}>
          Modelo de ficha por{" "}
          <a style={{color: '#FFF'}} href="https://twitter.com/lukeskelington">@lukeskelington</a>
        </p>
        <br />
      </div>
      <Button onClick={captureAndSaveFicha}>
        <SaveIcon />
        Salvar Imagem
      </Button>
    </div>
  );
};
