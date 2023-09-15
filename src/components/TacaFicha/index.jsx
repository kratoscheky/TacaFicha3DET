import frame from '../../images/CartaTacaFicha/Frame.png'
import poderIcon from '../../images/CartaTacaFicha/Icons/poderIcon.svg'
import acaoIcon from '../../images/CartaTacaFicha/Icons/acaoIcon.svg'
import habilidadeIcon from '../../images/CartaTacaFicha/Icons/habilidadeIcon.svg'
import manaIcon from '../../images/CartaTacaFicha/Icons/manaIcon.svg'
import vidaIcon from '../../images/CartaTacaFicha/Icons/vidaIcon.svg'
import resistenciaIcon from '../../images/CartaTacaFicha/Icons/resistenciaIcon.svg'
import vantagemIcon from '../../images/CartaTacaFicha/Icons/Vantagem.svg'
import desvantagemIcon from '../../images/CartaTacaFicha/Icons/Desvantagem.svg'
import Bottom from '../../images/CartaTacaFicha/Bottom.svg'
import Top from '../../images/CartaTacaFicha/Top.svg'

import {
  ArquetipoContainer,
  AtributosContainer, AtributosContainerHabilidade,
  AtributosContainerPoder, AtributosContainerresistencia,
  Baixo,
  Carta, Container, ContainerFrame, ContainerFramesTextos, ContainerNomePontos, ContainerText, DetalhesContainer,
  EscalaPoder,
  Frame,
  Meio, RecursosContainer, Svg, TagsPericias, TextoDesVanContainer,
  TextosContainer,
  Topo, VanDesContainer
} from "./styles";
import {useFicha} from "../../context/ficha.context";

export const TacaFicha = () => {
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
      <Carta id='tacaficha' style={{
        backgroundImage: `url(${imageBlob})`
      }}>
        <Frame src={frame} />
        <EscalaPoder>
          <Svg fillEscala={DefinirCorEscala(pontosTotais.toString())} width="175" height="59" viewBox="0 0 175 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_125_2)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M174.004 58.3936L-0.00610352 58.3616L27.7039 -0.000366211H143.434L174.004 31.3496V58.3936Z" fill="#00A6C1"/>
          </g>
          <defs>
            <clipPath id="clip0_125_2">
              <rect width="175" height="59" fill="white"/>
            </clipPath>
          </defs>
          </Svg>
        </EscalaPoder>
        <EscalaPoder />
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
            <img src={poderIcon} />
            <p>{atributos.poder}</p>
          </AtributosContainerPoder>
          <AtributosContainerHabilidade>
            <img src={habilidadeIcon} />
            <p>{atributos.habilidade}</p>
          </AtributosContainerHabilidade>
          <AtributosContainerresistencia>
            <img src={resistenciaIcon} />
            <p>{atributos.resistencia}</p>
          </AtributosContainerresistencia>
        </Meio>
        <TextosContainer>
          <ContainerFramesTextos>
            <div>
              <img src={Top} />
            </div>
            <TagsPericias>
              {
                pericias.map(p => <p style={{
                  backgroundColor: CoresPericias[p.Nome],
                }}>{p.Nome}</p>)
              }
            </TagsPericias>
          </ContainerFramesTextos>
          <ContainerText>
            <VanDesContainer>
              <div>
                <img src={vantagemIcon} />
              </div>
              <TextoDesVanContainer>
                {vantagens.map((v) => v.Nome + ".").join(" ")}
              </TextoDesVanContainer>
            </VanDesContainer>
            <div style={{
              width: '100%',
              height: '2px',
              background: '#00000040',
              margin: '8px 0'
            }} />
            <VanDesContainer>
              <div>
                <img src={desvantagemIcon} />
              </div>
              <TextoDesVanContainer>
                {desvantagens.map((v) => v.Nome + ".").join(" ")}
              </TextoDesVanContainer>
            </VanDesContainer>
          </ContainerText>
          <ContainerFramesTextos>
            <ContainerFrame>
              <img src={Bottom} />
              <div />
            </ContainerFrame>
            <DetalhesContainer>
              <p>{detalhes}</p>
            </DetalhesContainer>
          </ContainerFramesTextos>
        </TextosContainer>
        <Baixo>
          <RecursosContainer>
            <img src={acaoIcon} />
            <p>{recursosFinal.pontosDeAcao.toString().padStart(2, '0')}</p>
          </RecursosContainer>
          <RecursosContainer>
            <img src={manaIcon} />
            <p>{recursosFinal.pontosDeMana.toString().padStart(2, '0')}</p>
          </RecursosContainer>
          <RecursosContainer>
            <img src={vidaIcon} />
            <p>{recursosFinal.pontosDeVida.toString().padStart(2, '0')}</p>
          </RecursosContainer>
        </Baixo>
      </Carta>
    </Container>
  )
}