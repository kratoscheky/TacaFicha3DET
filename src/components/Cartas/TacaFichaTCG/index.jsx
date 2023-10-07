import frame from '../../../images/CartaTacaFicha/Frame.png'
import poderIcon from '../../../images/CartaTacaFicha/Icons/poderIcon.svg'
import acaoIcon from '../../../images/CartaTacaFicha/Icons/acaoIcon.svg'
import habilidadeIcon from '../../../images/CartaTacaFicha/Icons/habilidadeIcon.svg'
import manaIcon from '../../../images/CartaTacaFicha/Icons/manaIcon.svg'
import vidaIcon from '../../../images/CartaTacaFicha/Icons/vidaIcon.svg'
import resistenciaIcon from '../../../images/CartaTacaFicha/Icons/resistenciaIcon.svg'
import vantagemIcon from '../../../images/CartaTacaFicha/Icons/Vantagem.svg'
import desvantagemIcon from '../../../images/CartaTacaFicha/Icons/Desvantagem.svg'
import Bottom from '../../../images/CartaTacaFicha/Bottom.svg'
import Top from '../../../images/CartaTacaFicha/Top.svg'

import {
  ArquetipoContainer,
  AtributosContainerHabilidade,
  AtributosContainerPoder,
  AtributosContainerresistencia,
  Baixo,
  Carta,
  Container,
  ContainerFrame,
  ContainerFramesTextos,
  ContainerNomePontos,
  ContainerText,
  DetalhesContainer,
  EscalaPoder,
  Frame,
  Meio,
  RecursosContainer,
  Svg,
  TagsPericias,
  TextoDesVanContainer,
  TextosContainer,
  Topo,
  VanDesContainer
} from "./styles.jsx";
import {useFicha} from "../../../context/ficha.context.jsx";
import {useEffect, useRef} from "react";
import {useBrowserContext} from "../../../context/browser.context.jsx";
import { ContadorPericiaVantagemDesvantagem } from '../../../utils/contador'

export const TacaFicha = (props) => {
  const { disableMovement = false, disableFoilAnimation = false } = props;

  const animatedTimeout = useRef(null);

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

  const DefinirCorEscala = (escala) => {
    if (escala.includes('Ni')) {
      return '#00A6F0';
    } else if (escala.includes('S')) {
      return '#7CBA01';
    } else if (escala.includes('Ka')) {
      return '#EF5121';
    } else if (escala.includes('K')) {
      return '#FFB901';
    } else if (escala.includes('Ch')) {
      return '#FFB901';
    } else if (escala.includes('N')) {
      return '#00A6F0';
    } else if (escala.includes('Mu')) {
      return '#00A6F0';
    } else {
      return '#00A6C1';
    }
  }

  return (
    <Container>
      <Carta className={foil ? `foil ${!disableFoilAnimation ? 'animated' : ''}` : ''}
             onMouseMove={handleMove}
             onTouchMove={handleMove}
             onMouseLeave={handleEnd}
             onTouchEnd={handleEnd}
             id='tacaficha'
             style={{ backgroundImage: `url(${imageBlob})` }}
      >
        <Frame src={frame} />
        <EscalaPoder>
          <Svg fillEscala={DefinirCorEscala(pontosTotais.toString())} width="175" height="59" viewBox="0 0 175 59"
               fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_125_2)">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M174.004 58.3936L-0.00610352 58.3616L27.7039 -0.000366211H143.434L174.004 31.3496V58.3936Z"
                    fill="#00A6C1"/>
            </g>
            <defs>
              <clipPath id="clip0_125_2">
                <rect width="175" height="59" fill="white"/>
              </clipPath>
            </defs>
          </Svg>
        </EscalaPoder>
        <EscalaPoder/>
        <Topo>
          <ContainerNomePontos>
            <p>{nome}</p>
            <div><p>{pontosTotais}</p></div>
          </ContainerNomePontos>
          <ArquetipoContainer>
            <p>{arquetipo}</p>
          </ArquetipoContainer>
        </Topo>
        <Meio>
          <AtributosContainerPoder>
            <img src={poderIcon}/>
            <p>{atributos.poder}</p>
          </AtributosContainerPoder>
          <AtributosContainerHabilidade>
            <img src={habilidadeIcon}/>
            <p>{atributos.habilidade}</p>
          </AtributosContainerHabilidade>
          <AtributosContainerresistencia>
            <img src={resistenciaIcon}/>
            <p>{atributos.resistencia}</p>
          </AtributosContainerresistencia>
        </Meio>
        <TextosContainer>
          <ContainerFramesTextos>
            <div>
              <img src={Top}/>
            </div>
            <TagsPericias>
              {
                pericias.map(p => <p style={{
                  backgroundColor: CoresPericias[p.Nome] ?? "#ff0068",
                }}>{p.Nome}</p>)
              }
            </TagsPericias>
          </ContainerFramesTextos>
          <ContainerText>
            <VanDesContainer>
              <div>
                <img src={vantagemIcon}/>
              </div>
              <TextoDesVanContainer>
                {ContadorPericiaVantagemDesvantagem(vantagens).map((v) => v.Nome + (v.Total === 1 ? '' :  ` (${v.Total}x)`) + ".").join(" ")}
              </TextoDesVanContainer>
            </VanDesContainer>
            <div style={{
              width: '100%',
              height: '2px',
              background: '#00000040',
              margin: '8px 0'
            }}/>
            <VanDesContainer>
              <div>
                <img src={desvantagemIcon}/>
              </div>
              <TextoDesVanContainer>
                {ContadorPericiaVantagemDesvantagem(desvantagens).map((v) => v.Nome + (v.Total === 1 ? '' :  ` (${v.Total}x)`) + ".").join(" ")}
              </TextoDesVanContainer>
            </VanDesContainer>
          </ContainerText>
          <ContainerFramesTextos>
            <ContainerFrame>
              <img src={Bottom}/>
              <div/>
            </ContainerFrame>
            <DetalhesContainer>
              <p>{detalhes}</p>
            </DetalhesContainer>
          </ContainerFramesTextos>
        </TextosContainer>
        <Baixo>
          <RecursosContainer>
            <img src={acaoIcon}/>
            <p>{recursosFinal.pontosDeAcao.toString().padStart(2, '0')}</p>
          </RecursosContainer>
          <RecursosContainer>
            <img src={manaIcon}/>
            <p>{recursosFinal.pontosDeMana.toString().padStart(2, '0')}</p>
          </RecursosContainer>
          <RecursosContainer>
            <img src={vidaIcon}/>
            <p>{recursosFinal.pontosDeVida.toString().padStart(2, '0')}</p>
          </RecursosContainer>
        </Baixo>
      </Carta>
    </Container>
  )
}