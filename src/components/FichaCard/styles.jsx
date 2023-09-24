import styled from 'styled-components';

export const ContainerFicha = styled.div`
    margin-bottom: 16px;
    padding-bottom: 16px;
    background-color: #FFFFFF;
    color: #000;
    box-shadow: 4px 4px 9px 0px var(--drop-shadow);
    background-size: cover;
    zoom: 40%;
    -moz-transform: scale(0.5);
    width: 694px;
    border: 12px solid #000;
    border-radius: 8px;
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
    background-image: url("./assets/sparkles.webp"),
    url(./assets/holo.webp),
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