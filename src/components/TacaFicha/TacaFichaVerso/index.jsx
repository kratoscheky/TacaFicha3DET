import frame from '../../../images/CartaTacaFicha/versoFrame.png'
import poderIcon from '../../../images/CartaTacaFicha/Icons/poderIcon.svg'
import acaoIcon from '../../../images/CartaTacaFicha/Icons/acaoIcon.svg'
import habilidadeIcon from '../../../images/CartaTacaFicha/Icons/habilidadeIcon.svg'
import manaIcon from '../../../images/CartaTacaFicha/Icons/manaIcon.svg'
import vidaIcon from '../../../images/CartaTacaFicha/Icons/vidaIcon.svg'
import resistenciaIcon from '../../../images/CartaTacaFicha/Icons/resistenciaIcon.svg'

import {
  ArquetipoContainer,
  AtributosContainerHabilidade,
  AtributosContainerPoder,
  AtributosContainerresistencia,
  Baixo,
  Carta,
  ContainerAtrRec,
  ContainerNomePontos,
  EscalaPoder,
  Frame,
  Meio,
  RecursosContainer,
  Svg,
  Topo
} from "./styles";
import {useFicha} from "../../../context/ficha.context";
import React, {useState} from "react";
import {Container} from "../styles";
import {useBrowserContext} from "../../../context/browser.context";
import throttle from "lodash/throttle";

export const TacaFichaVerso = () => {
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
    anotacoes
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
      <Carta className={foil ? "foil" : ""}
             onMouseMove={handleMouseMove}
             onTouchMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
             onTouchEnd={handleMouseLeave}
             id='tacaficha'
             style={{
               backgroundImage: `url(${imageBlob})`,
               transform: `${isFirefox ? 'scale(0.5)' : ''} rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
             }}
             gradientDegree={gradientDegree}
             id='tacaficha-verso'>
        <Frame src={frame}/>
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
          <div dangerouslySetInnerHTML={{__html: anotacoes}}/>
        </Meio>
        <Baixo>
          <ContainerAtrRec>
            <AtributosContainerPoder>
              <img src={poderIcon}/>
              <p>{atributos.poder.toString().padStart(2, '0')}</p>
            </AtributosContainerPoder>
            <RecursosContainer>
              <img src={acaoIcon}/>
              <p>{recursosFinal.pontosDeAcao.toString().padStart(2, '0')}</p>
            </RecursosContainer>
          </ContainerAtrRec>
          <ContainerAtrRec>
            <AtributosContainerHabilidade>
              <img src={habilidadeIcon}/>
              <p>{atributos.habilidade.toString().padStart(2, '0')}</p>
            </AtributosContainerHabilidade>
            <RecursosContainer>
              <img src={manaIcon}/>
              <p>{recursosFinal.pontosDeMana.toString().padStart(2, '0')}</p>
            </RecursosContainer>
          </ContainerAtrRec>
          <ContainerAtrRec>
            <AtributosContainerresistencia>
              <img src={resistenciaIcon}/>
              <p>{atributos.resistencia.toString().padStart(2, '0')}</p>
            </AtributosContainerresistencia>
            <RecursosContainer>
              <img src={vidaIcon}/>
              <p>{recursosFinal.pontosDeVida.toString().padStart(2, '0')}</p>
            </RecursosContainer>
          </ContainerAtrRec>
        </Baixo>
      </Carta>
    </Container>
  )
}