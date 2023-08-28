import styled from 'styled-components';

export const ContainerFicha = styled.div`
    min-width: 350px;
    max-width: 350px;
    margin-bottom: 16px;
    background-color: #FFFFFF;
    box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.25);
`

export const Frame = styled.img`
    width: 100%;
    grid-column: 1 / 2;
    grid-row: 1/ 2;
`

export const DadosPersonagem = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    background-size: cover;
    background-position-y: bottom;
    div{
        grid-column: 1 / 2;
        grid-row: 1/ 2;
        padding: 4px 28px;
    }
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
export const Container = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: center;
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