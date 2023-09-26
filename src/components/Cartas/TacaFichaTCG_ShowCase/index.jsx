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
import {useState} from "react";
import {useBrowserContext} from "../../../context/browser.context.jsx";
import throttle from "lodash/throttle";

export const TacaFichaShowcase = ({carta}) => {
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
      <Carta className={carta.foil ? "foil" : ""}
             onMouseMove={handleMouseMove}
             onTouchMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
             onTouchEnd={handleMouseLeave}
             id='tacaficha'
             style={{
                backgroundImage: `url(${carta.imageUrl})`,
                transform: `${isFirefox ? 'scale(0.5)' : ''} rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
              }}
             gradientDegree={gradientDegree}
      >
        <Frame src={frame} />
        <EscalaPoder>
          <Svg fillEscala={DefinirCorEscala(carta.pontosTotais.toString())} width="175" height="59" viewBox="0 0 175 59"
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
            <p>{carta.nome}</p>
            <div><p>{carta.pontosTotais}</p></div>
          </ContainerNomePontos>
          <ArquetipoContainer>
            <p>{carta.arquetipo}</p>
          </ArquetipoContainer>
        </Topo>
        <Meio>
          <AtributosContainerPoder>
            <img src={poderIcon}/>
            <p>{carta.atributos.poder}</p>
          </AtributosContainerPoder>
          <AtributosContainerHabilidade>
            <img src={habilidadeIcon}/>
            <p>{carta.atributos.habilidade}</p>
          </AtributosContainerHabilidade>
          <AtributosContainerresistencia>
            <img src={resistenciaIcon}/>
            <p>{carta.atributos.resistencia}</p>
          </AtributosContainerresistencia>
        </Meio>
        <TextosContainer>
          <ContainerFramesTextos>
            <div>
              <img src={Top}/>
            </div>
            <TagsPericias>
              {
                carta.pericias.map(p => <p style={{
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
                {carta.vantagens.map((v) => v.Nome + ".").join(" ")}
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
                {carta.desvantagens.map((v) => v.Nome + ".").join(" ")}
              </TextoDesVanContainer>
            </VanDesContainer>
          </ContainerText>
          <ContainerFramesTextos>
            <ContainerFrame>
              <img src={Bottom}/>
              <div/>
            </ContainerFrame>
            <DetalhesContainer>
              <p>{carta.detalhes}</p>
            </DetalhesContainer>
          </ContainerFramesTextos>
        </TextosContainer>
        <Baixo>
          <RecursosContainer>
            <img src={acaoIcon}/>
            <p>{carta.extras.pontosDeAcao.toString().padStart(2, '0')}</p>
          </RecursosContainer>
          <RecursosContainer>
            <img src={manaIcon}/>
            <p>{carta.extras.pontosDeMana.toString().padStart(2, '0')}</p>
          </RecursosContainer>
          <RecursosContainer>
            <img src={vidaIcon}/>
            <p>{carta.extras.pontosDeVida.toString().padStart(2, '0')}</p>
          </RecursosContainer>
        </Baixo>
      </Carta>
    </Container>
  )
}