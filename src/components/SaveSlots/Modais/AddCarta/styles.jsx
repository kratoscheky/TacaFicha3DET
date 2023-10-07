import styled from "styled-components";

export const ContainerModal = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 16px;
`

export const ContainerConteudoModal = styled.div`
    max-width: 500px;
    padding: 16px;
    background: #6F0062;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    h1{
        color: #FFBF22;
    }
    p{
        font-weight: 500;
        font-family: Roboto;
        color: #FFF;
    }
    input{
        border-radius: 4px;
        padding: 8px;
        border: none;
        width: fit-content;
        border-radius: 4px 0 0 4px;
        display: inline-block;
        line-height: 1;
        font-size: 15px;
        padding: 12px 24px;
        border-radius: 3px;
        color: var(--color-foreground);
        fill: var(--color-background);
        background-color: var(--color-background);
        transition: all .3s;
        width: 100%;
    }
`

export const AvisoTexto = styled.p`
    color: #FFF;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    width: 100%;
`

export const DeleteButton = styled.div`
        font-weight: 600;
    text-shadow: 0 0 16px rgba(0,0,0,.53);
    background-color: crimson;
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

export const ConfirmButton = styled.div`
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
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
`

export const ButtonsFlex = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
`