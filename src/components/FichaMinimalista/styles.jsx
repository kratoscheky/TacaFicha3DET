import styled from 'styled-components';
import frame from '../../images/frame.png'

export const ContainerFicha = styled.div`
    min-width: 300px;
    max-width: 400px;
    margin-bottom: 16px;
    background-color: #FFFFFF;
    box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.25);
`

export const DadosPersonagem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-image: url('${frame}');
    background-size: cover;
    background-position-y: bottom;
    padding: 0 40px 40px 40px;
    h1 {
        color: #D11CE0;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        width: 100%;
        text-align: center;
    }
    p{
        color: #000;
        text-align: justify;
        font-style: normal;
        font-weight: 400;
    }
`

export const ContainerAtributos = styled.div`
    padding: 0px 0px 16px 28px;
    div{
        display: flex;
        align-items: center;
        gap: 2px;
    }
    div b{
        color: #D11CE0;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-transform: uppercase;
        text-align: center;
    }
    div p{
        margin-left: 8px;
        font-weight: 800;
        font-size: 16;
    }
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
    padding: 2px;
`
export const ContainerExtras = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    div{
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding-bottom: 12px;
        border: 1px solid #FFF;
    }
    div b{
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-transform: uppercase;
    }
    div:nth-child(1) b{
        color: #c6eec2;
    }
    div:nth-child(2) b{
        color: #b7caec;
    }
    div:nth-child(3) b{
        color: #f3b9d7;
    }   
    div p{
        margin-left: 8px;
        font-size: 16;
    }
`
export const Container = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Button = styled.button`
    font-weight: 600;
    max-height: 48px;
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
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
`

export const ContainerCards = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    overflow: auto;
`

export const ContainerSessao = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8px;
    border: 1px solid #D11CE0;
    border-radius: 8px;
    max-width: 500px;
`

export const AvisoTexto = styled.p`
    color: #D11CE0;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    width: 100%;
`

export const Card = styled.div`
    width: 300px;
    border-radius: 8px;
    padding: 8px;
    background-image: ${(props) => props.backgroundImage && `url(${props.backgroundImage})`};
    box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 9px 0px;
    background-size: cover;
    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: space-between;
    border: 4px solid #000;
    margin-bottom: 10px;
`
export const InnerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    p {
        color: #D11CE0;
        font-weight: 900;
    }
`

export const NomeTopo = styled.div`
    background-color: #FFF;
    color: #D11CE0;
    font-weight: 900;
    padding: 6px;
    border-radius: 4px;
`

export const ContainerButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    background-color: #00000090;
    border-radius: 4px;
`

export const StatusContainer = styled.div`

width: fit-content;
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: #00000090;
    padding: 4px;
    border-radius: 4px;
    p{
        font-weight: 700;
        color: #FFF;
    }
    img {
        filter: brightness(0) invert(1);
        height: 20px;
        width: 20px;
    }
`

export const ContainerIcons = styled.div`
    display: flex;
    gap: 8px;
`

export const ExtraCard = styled.div`
    display: flex;
    width: 100%;
    gap: 4px;
    background-color: #00000090;
    padding: 4px;
    border-radius: 4px;
    p{
        font-weight: 700;
        color: #FFF;
        text-shadow: 1px 1px #000;
    }
    img {
        filter: brightness(0) invert(1);
        height: 20px;
        width: 20px;
    }
`

export const DescricaoMinimalista = styled.div`
    background-color: #00000090;
    text-shadow: 1px 1px #000;
    font-weight: 500;
    padding: 4px;
    border-radius: 4px;
    color: #FFF;
    border: 1px solid #FFF;
`

export const ArquetipoTexto = styled.div`
    background-color: #000000;
    padding: 4px;
    border-radius: 4px;
    width: fit-content;
    p {
        color: #FFF
    }
`