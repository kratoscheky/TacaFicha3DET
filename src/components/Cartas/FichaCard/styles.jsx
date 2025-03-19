import styled from 'styled-components';

export const ContainerFicha = styled.div`
    margin-bottom: 16px;
    padding-bottom: 16px;
    background-color: #FFFFFF;
    color: #000;
    box-shadow: 4px 4px 9px 0px var(--drop-shadow);
    background-size: cover;
    -moz-transform: scale(0.5);
    width: 694px;
    border: 12px solid #000;
    border-radius: 8px;
    



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

export const PontosTotais = styled.h1`
    text-align: right;
    font-size: 50px;
    color: #6F0062;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    width: 100%;
    padding-right: 20px;
    top: 28px !important;
`

export const CamposTopo = styled.div`
    display: flex;
    padding-top: 20px;
    h1{
        position: absolute;
        color: #6F0062;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        width: 100%;
        top: 38px;
        left: 8px;
    }
`

export const AlinhamentoInfos = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
`

export const DadosPersonagem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-size: cover;
    background-position-y: bottom;
    height: 150px;
`

export const ContainerAtributos = styled.div`
    display: flex;
    gap: 28px;
    flex-direction: column;
    height: 444px;
`

export const StatusContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
`
export const SubStatusContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
`
export const SubStatusTexto = styled.div`
    display: grid;
    width: 100px;
    gap: 16px;
    grid-template-columns: 1fr;
    p {
        font-size: 36px;
        color: #5785FA;
        z-index: 2;
    }
    img {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }
`

export const SubAlinhamentos = styled.div`
    display: flex;
    gap: 16px;
    padding-top: 8px;
    padding-left: 4px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
`

export const SubStatusContainerValues = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
`

export const AtributoContainer = styled.div`
    position: absolute;
    display: flex;
    gap: 16px;
    align-items: center;
    height: 100%;
    top: -4px;
    left: 8px;
    p{
        padding-top: 4px;
        font-weight: 800;
        font-size: 52px;
        color: #FFF;
    }
`

export const Icon = styled.img`
    width: 50px;
    height: 50px;
`

export const IconSecundario = styled.img`
    width: 30px;
    height: 30px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
`

export const ContainerExtras = styled.div`
    width: 653px;
    height: 251px;
    background: rgba(255, 255, 255, 0.80);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 5px solid;
    border-image: linear-gradient(179deg, black, #ffa50000) 1;
`
export const PericiasTexto = styled.div`
    b{
        font-size: 26px;
        font-weight: 900;
    }
`

export const VantagensTexto = styled.div`
    p{
        font-size: 26px;
        font-weight: 600;
    }
`

export const DesvantagensTexto = styled.div`
    p{
        font-size: 26px;
        color: #71444B;
        font-weight: 600;
    }
`

export const Detalhes = styled.div`
    width: 653px;
    height: 135px;
    padding: 14px;
    border-radius: 0px 0px 13px 13px;
    background: rgba(36, 36, 36, 0.80);
    p {
        color: #FFF;
        font-size: 22px;
        text-align: justify;
    }
`

export const Button = styled.button`
    font-weight: 600;
    text-shadow: 0 0 16px rgba(0,0,0,.53);
    background-color: #ffb300;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
    font-size: 16px;
    padding: 15px 30px;
    border-radius: 4px;
    text-decoration: none;
    max-height: 48px;
    fill: #fff;
    text-align: center;
    transition: all .3s;
    border: none;
    flex-grow: 1;
    order: 10;
    display: inline-block;
    color: #fff;
    cursor: pointer;
    width: 100%;
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
`

export const ArquetipoTexto = styled.p`
    z-index: 1000;
    position: absolute;
    color: #FFF;
    font-size: 20px;
    bottom: 34px;
    left: 8px;
`

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  perspective: 2000px;
  position: relative;
  z-index: 1;
  transform: translate3d(0.1px, 0.1px, 0.1px )
`