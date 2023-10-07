import React, {useEffect, useRef} from "react";
import {useFicha} from "../../../context/ficha.context.jsx";
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
  InnerContainer,
} from "./styles.jsx";
import poderIcon from "../../../images/tcg/poder.svg";
import habilidadeIcon from "../../../images/tcg/habilidade.svg";
import resistenciaIcon from "../../../images/tcg/resistencia.svg";
import acaoIcon from "../../../images/tcg/acao.svg";
import manaIcon from "../../../images/tcg/mana.svg";
import vidaIcon from "../../../images/tcg/vida.svg";
import topoImage from "../../../images/tcg/topo.svg";
import barrinhaPreta from "../../../images/tcg/barrinhapreta.svg";
import pontoBar from "../../../images/tcg/ponto.svg";
import bottomBar from "../../../images/tcg/bottombar.svg";
import cardrosa from "../../../images/tcg/cardrosa.svg";
import html2canvas from "html2canvas";
import {useBrowserContext} from "../../../context/browser.context.jsx";
import {ContadorPericiaVantagemDesvantagem} from "../../../utils/contador.js";

export const FichaCard = (props) => {
  const { disableMovement = false, disableFoilAnimation = false } = props;

  const animatedTimeout = useRef(null);

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
    foil
  } = useFicha();

  const {isFirefox} = useBrowserContext();

  const handleMove = (e) => {
    if (disableMovement) return;

    // normalise touch/mouse
    var pos = [
      e.nativeEvent.offsetX || (e.nativeEvent.touches && e.nativeEvent.touches[0].clientX),
      e.nativeEvent.offsetY || (e.nativeEvent.touches && e.nativeEvent.touches[0].clientY)
    ];

    e.preventDefault();

    var card = e.target;

    // math for mouse position
    var l = pos[0] * 2.5;
    var t = pos[1] * 2.5;
    var h = card.offsetHeight;
    var w = card.offsetWidth;
    var px = Math.abs(Math.floor(100 / w * l)-100);
    var py = Math.abs(Math.floor(100 / h * t)-100);
    var pa = (50-px)+(50-py);

    // math for gradient / background positions
    var lp = (50+(px - 50)/1.5);
    var tp = (50+(py - 50)/1.5);
    var px_spark = (50+(px - 50)/7);
    var py_spark = (50+(py - 50)/7);
    var p_opc = 20+(Math.abs(pa)*1.5);
    var ty = ((tp - 50)/2) * -1;
    var tx = ((lp - 50)/1.5) * .5;

    // css to apply for active card
    var grad_pos = `background-position: ${lp}% ${tp}% !important;`
    var sprk_pos = `background-position: ${px_spark}% ${py_spark}% !important;`
    var opc = `opacity: ${p_opc/100};`
    var tf = `${isFirefox ? 'scale(0.5)' : ''} rotateX(${ty}deg) rotateY(${tx}deg)`

    // need to use a <style> tag for psuedo elements
    var style = `
      .foil:hover:before { ${grad_pos} }  /* gradient */
      .foil:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
    `
  
    // set styles
    card.style.transform = tf;
    document.getElementById("card-foil-hover").innerHTML = style;
    
    card.classList.remove('animated');

    if ( e.type === "touchmove" ) {
      return false; 
    }

    clearTimeout(animatedTimeout.current)
  }

  const handleEnd = (e) => {
    if (disableMovement) return;

    // remove css, apply custom animation on end
    var card = e.target;
    card.style.transform = `${isFirefox ? 'scale(0.5)' : ''}`;
    document.getElementById("card-foil-hover").innerHTML = '';
    animatedTimeout.current = setTimeout(function() {
      card.classList.add('animated');
    },2500);
  };

  useEffect(() => {
    if (disableFoilAnimation)
      clearTimeout(animatedTimeout.current);
  }, [disableFoilAnimation]);

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
      <InnerContainer>
        <ContainerFicha
          className={foil ? `foil ${!disableFoilAnimation ? 'animated' : ''}` : ''}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseLeave={handleEnd}
          onTouchEnd={handleEnd}
          style={{ backgroundImage: `url(${imageBlob})` }}
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
                <p>{ContadorPericiaVantagemDesvantagem(vantagens).map((v) => v.Nome + (v.Total === 1 ? '' :  ` (${v.Total}x)`) + ".").join(" ")}</p>
              </VantagensTexto>
              <DesvantagensTexto>
                <p>{ContadorPericiaVantagemDesvantagem(desvantagens).map((v) => v.Nome + (v.Total === 1 ? '' :  ` (${v.Total}x)`) + ".").join(" ")}</p>
              </DesvantagensTexto>
            </ContainerExtras>
            <Detalhes>
              <p>{detalhes}</p>
            </Detalhes>
          </AlinhamentoInfos>
        </ContainerFicha>
      </InnerContainer>
    </div>
  );
};
