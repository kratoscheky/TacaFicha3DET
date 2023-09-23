import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Carta = styled.div`
  width: 750px;
  height: 1040px;
  display: grid;
  grid-template-rows: 167.8px 360.9px 421.7px 89px;
  background-size: cover;
  background-position: center;
  color: #FFF;
  zoom: 40%;
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-repeat: no-repeat;
    opacity: .5;
    mix-blend-mode: color-dodge;
    // transition: all .33s ease;
    filter: brightness(.66) contrast(1.33);
  }

  &.foil:before {
    background-position: 50% 50%;
    background-size: cover;
    background-image: linear-gradient(125deg, #ff008450 15%, #fca40040 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%);
    opacity: 0.5;
    filter: brightness(.66) contrast(1.33);
    z-index: 1;
  }

  &.foil:after {
    opacity: 1;
    background-image: url("https://tacaficha.com.br/assets/sparkles.webp"),
    url(https://tacaficha.com.br/assets/holo.webp),
    linear-gradient(125deg, #ff008450 15%, #fca40040 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%);
    background-position: 50% 50%;
    background-size: cover;
    background-blend-mode: overlay;
    z-index: 2;
    filter: brightness(1) contrast(1);
    transition: all .33s ease;
    mix-blend-mode: color-dodge;
    opacity: .75;
  }

  &.foil.active:after,
  &.foil:hover:after {
    filter: brightness(1) contrast(1);
    opacity: 1;
  }

  &.foil.active,
  &.foil:hover {
    animation: none;
    transition: box-shadow 0.1s ease-out;
  }

  &.foil.active:before,
  &.foil:hover:before {
    animation: none;
    background: linear-gradient(${(props) => props.gradientDegree ? props.gradientDegree : '125'}deg, #ff008450 15%, #fca40040 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%);
    background-position: 50% 50%;
    background-size: 100% 100%;
    opacity: .88;
    filter: brightness(.66) contrast(1.33);
    transition: background 0.3s ease-in-out !important;
  }
`

export const EscalaPoder = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding-top: 25px;
  padding-right: 24px;
`

export const Frame = styled.img`
  grid-row: 1/5;
  grid-column: 1/2;
`

export const Topo = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  padding: 25px;
`

export const Meio = styled.div`
  display: flex;
  grid-column: 1/2;
  grid-row: 2/3;
  font-weight: 900;
  align-items: flex-start;
  flex-direction: column;
  height: 342px;
  justify-content: space-around;
`

export const TextosContainer = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: flex-end;
  padding: 0 54px;
  max-width: 754px;
`

export const ContainerText = styled.div`
  background: #FFFFFF99;
  width: 100%;
  padding: 8px 20px;
  h1{
    color: #000;
  }
`

export const VanDesContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TagsPericias = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 0 20px;
    p{
        padding: 8px 16px;
        color: #FFF;
        font-family: Roboto;
        font-size: 20px;
        font-weight: 600;
        border-radius: 10px;
    }
`

export const TextoDesVanContainer = styled.div`
  display: flex;
  gap: 4px;
  height: 100%;
  align-items: center;
  padding: 0 12px;
  color: #2a2a2a;
  font-size: 24px;
  font-weight: bold;
`
export const Svg = styled.svg`
  path{
    fill: ${props => props.fillEscala};
  }
`

export const ContainerFramesTextos = styled.div`
  display: grid;
  div{
    grid-row: 1/2;
    grid-column: 1/2;
  }
  img{
    display: flex;
    width: 100%;
  }
`

export const ContainerFrame = styled.div`
  
`

export const DetalhesContainer = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-size: 20px;
  }
`

export const ContainerNomePontos = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 58px;
  align-items: center;
  padding-left: 20px;
  p{
    font-size: 32px;
    font-weight: 600;
    color: #000;
  }
  div{
    width: 174px;
    display: flex;
    justify-content: center;
  }
  div p{
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
  }
`

export const ArquetipoContainer = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  p{
    font-size: 25px;
    font-weight: 600;
  }
`

export const Baixo = styled.div`
  grid-column: 1/2;
  grid-row: 4/5;
  display: flex;
  padding-left: 52px;
  padding-top: 10px;
  width: 452px;
  align-items: center;
  justify-content: space-between;
  font-weight: 900;
`

export const RecursosContainer = styled.div`
  width: 116px;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: end;
  p{
    font-size: 34px;
  }
`
export const RecursosContainerMana = styled.div`

`
export const RecursosContainerVida = styled.div`

`

export const AtributosContainer = styled.div`
  display: flex;
  gap: 16px;
  p{
    font-size: 41px;
  }
`
export const AtributosContainerPoder = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 122px;
  p{
    font-size: 41px;
  }
`
export const AtributosContainerHabilidade = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 122px;
  p{
    font-size: 41px;
  }
`
export const AtributosContainerresistencia = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 122px;
  p{
    font-size: 41px;
  }
`