import styled from 'styled-components';
import frame from '../../images/frame.png'

export const ContainerFicha = styled.div`
    margin-bottom: 16px;
    background-color: #FFFFFF;
    box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.25);
    zoom: 70%;
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
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
    }
    div div{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    div div b{
        color: #D11CE0;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-transform: uppercase;
        text-align: center;
    }
    div div p{
        padding-top: 4px;
        font-weight: 800;
        font-size: 16;
    }
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`
export const ContainerExtras = styled.div`
    padding: 0px 0px 16px 28px;
    div{
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding-bottom: 12px;
    }
    div b{
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-transform: uppercase;
    }
    div:nth-child(1) b{
        color: #3FA535;
    }
    div:nth-child(2) b{
        color: #0447BE;
    }
    div:nth-child(3) b{
        color: #E7017D;
    }   
    div p{
        margin-left: 8px;
        font-size: 16;
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