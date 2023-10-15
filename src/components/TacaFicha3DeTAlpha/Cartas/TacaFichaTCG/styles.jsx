import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  perspective: 2000px;
  position: relative;
  z-index: 1;
  transform: translate3d(0.1px, 0.1px, 0.1px)
`

export const Carta = styled.div`
  width: 750px;
  height: 1040px;
  display: grid;
  grid-template-rows: 129.8px 416.9px 402.7px 89px;
  background-size: cover;
  background-position: 50% 0;
  color: #FFF;
  zoom: 40%;




  // DAQUI PRA BAIXO É SÓ CODIGO ESTILO RELACIONADO AO FOIL

  --color1: #ec9bb6;
  --color2: #ccac6f;
  --color3: #69e4a5;
  --color4: #8ec5d6;
  --color5: #b98cce;
  
  position: relative;
  overflow: hidden;
  margin: 20px;
  overflow: hidden;
  z-index: 10;
  touch-action: none;
  
  
  //transition: transform 0.5s ease;
  will-change: transform, filter;
  
  //background-color: #040712;
  background-size: cover;
  background-repeat: no-repeat;
  //background-position: 50% 50%;
  transform-origin: center;

  &.foil {
    transition: transform 0.5s ease;
  }

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
    transition: all .33s ease;
  }

  &.foil:before {
    background-position: 50% 50%;
    background-size: 300% 300%;
    background-image: linear-gradient(
      115deg,
      transparent 0%,
      var(--color1) 25%,
      transparent 47%,
      transparent 53%,
      var(--color2) 75%,
      transparent 100%
    );
    opacity: .5;
    filter: brightness(.5) contrast(1);
    z-index: 1;
  }

  &.foil:after {
    opacity: 1;
    background-image: url("/assets/sparkles.webp"), 
      url("/assets/holo.webp"), 
      linear-gradient(125deg, #ff008450 15%, #fca40040 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%);
    background-position: 50% 50%;
    background-size: 160%;
    background-blend-mode: overlay;
    z-index: 2;
    filter: brightness(1) contrast(1);
    transition: all .33s ease;
    mix-blend-mode: color-dodge;
    opacity: .75;
  }

  &.foil:hover:after {
    filter: brightness(1) contrast(1);;
    opacity: 1;
  }

  &.foil:hover {
    animation: none;
    transition: box-shadow 0.1s ease-out;
  }

  &.foil:hover:before {
    animation: none;
    background-image: linear-gradient(
      115deg,
      transparent 20%,
      var(--color1) 36%,
      var(--color2) 43%,
      var(--color3) 50%,
      var(--color4) 57%,
      var(--color5) 64%,
      transparent 80%
    );
    background-position: 50% 50%;
    background-size: 250% 250%;
    opacity: .88;
    filter: brightness(.66) contrast(1.33);
    transition: none;
  }

  &.foil:hover:before,
  &.foil:hover:after {
    animation: none;
    transition: none;
  }

  &.foil.animated {
    transition: none;
    animation: holoCard 12s ease 0s 1;
    &:before { 
      transition: none;
      animation: holoGradient 12s ease 0s 1;
    }
    &:after {
      transition: none;
      animation: holoSparkle 12s ease 0s 1;
    }
  }
  
  @keyframes holoSparkle {
    0%, 100% {
      opacity: .75; background-position: 50% 50%; filter: brightness(1.2) contrast(1.25);
    }
    5%, 8% {
      opacity: 1; background-position: 40% 40%; filter: brightness(.8) contrast(1.2);
    }
    13%, 16% {
      opacity: .5; background-position: 50% 50%; filter: brightness(1.2) contrast(.8);
    }
    35%, 38% {
      opacity: 1; background-position: 60% 60%; filter: brightness(1) contrast(1);
    }
    55% {
      opacity: .33; background-position: 45% 45%; filter: brightness(1.2) contrast(1.25);
    }
  }
  
  @keyframes holoGradient {
    0%, 100% {
      opacity: 0.5;
      background-position: 50% 50%;
      filter: brightness(.5) contrast(1);
    }
    5%, 9% {
      background-position: 100% 100%;
      opacity: 1;
      filter: brightness(.75) contrast(1.25);
    }
    13%, 17% {
      background-position: 0% 0%;
      opacity: .88;
    }
    35%, 39% {
      background-position: 100% 100%;
      opacity: 1;
      filter: brightness(.5) contrast(1);
    }
    55% {
      background-position: 0% 0%;
      opacity: 1;
      filter: brightness(.75) contrast(1.25);
    }
  }
  
  @keyframes holoCard {
    0%, 100% {
      transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg);
    }
    5%, 8% {
      transform: rotateZ(0deg) rotateX(6deg) rotateY(-20deg);
    }
    13%, 16% {
      transform: rotateZ(0deg) rotateX(-9deg) rotateY(32deg);
    }
    35%, 38% {
      transform: rotateZ(3deg) rotateX(12deg) rotateY(20deg);
    }
    55% {
      transform: rotateZ(-3deg) rotateX(-12deg) rotateY(-27deg);
    }
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
  padding-top: 50px;
  padding-left: 36px;
`

export const Meio = styled.div`
    display: flex;
    grid-column: 1/2;
    grid-row: 2/3;
    font-weight: 900;
    align-items: flex-start;
    flex-direction: column;
    height: 428px;
    gap: 45px;
    padding-top: 20px;
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
    padding-right: 20px;
    padding-top: 6px;
  }
  div p{
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
  }
`

export const ArquetipoContainer = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 154px;
  p{
    font-size: 25px;
    font-weight: 600;
  }
`

export const Baixo = styled.div`
  grid-column: 1/2;
  grid-row: 4/5;
  display: flex;
  padding-top: 10px;
  width: 514px;
  align-items: center;
  font-weight: 900;
  padding-left: 40px;
  gap: 18px;
`

export const RecursosContainer = styled.div`
  width: 94px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  gap: 2px;
  align-items: center;
  h1{
    color: #5ACDFF;
    font-size: 28px;
    font-weight: 800;
  }
  p{
    font-size: 34px;
    font-weight: 400;
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
  width: 134px;
  h1{
    color: #5ACDFF;
    font-weight: 800;
  }
  p{
    font-size: 41px;
    font-weight: 400;
    
  }
`
export const AtributosContainerHabilidade = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 134px;
  h1{
    color: #5ACDFF;
    font-weight: 800;
  }
  p{
    font-size: 41px;
    font-weight: 400;
  }
`
export const AtributosContainerresistencia = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 134px;
  h1{
    color: #5ACDFF;
    font-weight: 800;
    padding-top: 4px;
  }
  p{
    font-size: 41px;
    font-weight: 400;
  }
`