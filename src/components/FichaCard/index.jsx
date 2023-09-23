import React, {useState} from "react";
import {useFicha} from "../../context/ficha.context";
import {
  AlinhamentoInfos,
  ArquetipoTexto,
  AtributoContainer,
  CamposTopo,
  ContainerAtributos,
  ContainerExtras,
  ContainerFicha,
  DadosPersonagem,
  DesvantagensTexto,
  Detalhes,
  Icon,
  IconSecundario,
  PericiasTexto,
  PontosTotais,
  StatusContainer,
  SubAlinhamentos,
  SubStatusContainer,
  SubStatusTexto,
  VantagensTexto,
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
import {useBrowserContext} from "../../context/browser.context";
import throttle from "lodash/throttle";

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
    foil,
    setSalvandoLoading
  } = useFicha();

  const [rotation, setRotation] = useState({x: 0, y: 0});
  const [gradientDegree, setGradientDegree] = useState(125);

  const {isFirefox} = useBrowserContext();

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
        <ContainerFicha
          className={foil ? "foil" : ""}
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchEnd={handleMouseLeave}
          style={{
            backgroundImage: `url(${imageBlob})`,
            transform: `${isFirefox ? 'scale(0.5)' : ''} rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          }}
          gradientDegree={gradientDegree}
          id="container-ficha-card"
        >
          <DadosPersonagem>
            <CamposTopo>
              <h1>{nome}</h1>
              <PontosTotais>{pontosTotais}</PontosTotais>
              <img src={topoImage}/>
              <img src={pontoBar}/>
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
                  <Icon src={poderIcon}/>
                  <p>{atributos.poder}</p>
                </AtributoContainer>
                <img src={cardrosa}/>
              </StatusContainer>
              <SubStatusContainer>
                <SubStatusTexto>
                  <img src={barrinhaPreta}/>
                  <SubAlinhamentos>
                    <IconSecundario src={acaoIcon}/>
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
                  <Icon src={habilidadeIcon}/>
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
                    <path d="M0 0H149.5L132 65H0V0Z" fill="#EC42DA"/>
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
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="6" dy="7"/>
                      <feComposite in2="hardAlpha" operator="out"/>
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
                  <img src={barrinhaPreta}/>
                  <SubAlinhamentos>
                    <IconSecundario src={manaIcon}/>
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
                  <Icon src={resistenciaIcon}/>
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
                    <path d="M0 0H149.5L132 65H0V0Z" fill="#EC42DA"/>
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
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="6" dy="7"/>
                      <feComposite in2="hardAlpha" operator="out"/>
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
                  <img src={barrinhaPreta}/>
                  <SubAlinhamentos>
                    <IconSecundario src={vidaIcon}/>
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
      </div>
    </div>
  );
};
