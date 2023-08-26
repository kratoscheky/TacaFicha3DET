import styled from 'styled-components';
import frame from '../../images/frame.png'

export const ContainerFicha = styled.div`
    margin-bottom: 16px;
    padding-bottom: 16px;
    background-color: #FFFFFF;
    box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.25);
    background-size: cover;
    zoom: 50%;
    width: 694px;
    border: 12px solid #000;
    border-radius: 8px;
`

export const PontosTotais = styled.h1`
    text-align: right;
    font-size: 50px;
    padding-right: 20px;
`

export const CamposTopo = styled.div`
    display: flex;
    padding-top: 20px;
    h1{
        position: absolute;
        color: #D11CE0;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        width: 100%;
        top: 30px;
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
    width: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    background-color: #000;
    padding: 8px 8px 8px 6px;
    &::after {
        background: black none repeat scroll 0 0;
        content: "";
        height: 52px;
        position: absolute;
        right: 561px;
        transform: skew(-20deg);
        width: 28px;
        z-index: 1;
    }
    p {
        font-size: 36px;
        color: #5785FA;
        z-index: 2;
    }
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
        font-size: 38px;
        color: #FFF;
    }
`

export const Icon = styled.img`
    width: 50px;
    height: 50px;
`

export const IconSecundario = styled.img`
    width: 20px;
    height: 20px;
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
`

export const ImageInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 0 16px 0;
`