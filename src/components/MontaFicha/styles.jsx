import { TextareaAutosize } from '@mui/material';
import styled from 'styled-components';

export const ContainerMontaFicha = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    gap: 20px;
    width: 100%;
    margin-bottom: 16px;
    border-radius: 8px;

    div {
        display: flex;
        gap: 8px;
    }
    h1{
        color: #FFBF22;
        text-transform: uppercase;
    }
    div input{
        display: inline-block;
        line-height: 1;
        font-size: 15px;
        padding: 12px 24px;
        border-radius: 3px;
        color: var(--color-foreground);
        fill: var(--color-background);
        background-color: var(--color-background);
        transition: all .3s;
        border: 1px solid var(--input-border);
        width: 100%;
    }
` 

export const TextArea = styled(TextareaAutosize)`
    display: inline-block;
    line-height: 1;
    font-size: 15px;
    padding: 12px 24px;
    border-radius: 3px;
    color: var(--color-foreground);
    fill: var(--color-background);
    background-color: var(--color-background);
    transition: all .3s;
    border: 1px solid var(--input-border);
    width: 100%;
`

export const ButtonFicha = styled.button`
    font-weight: 600;
    text-shadow: 0 0 16px rgba(0,0,0,.53);
    background-color: #6F0062;
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

export const ButtonSecundario = styled.button`
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

export const ContainerInputs = styled.div`
    width: 100%;
    align-items: flex-end;
`

export const SessaoInputs = styled.div`
    padding: 16px;
    background: #6F0062;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
`

export const SessaoInputsAtributos = styled.div`
    background: #6F0062;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
`

export const InternoAtributos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const PainelPersonalidade = styled.div`
    width: 100%;
    padding: 16px;
    background-color: #6F0062;
    border-radius: 8px;
`

export const ContainerPersonalidade = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`

export const ContainerAtributos = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 0 16px 16px;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const AtributosImagem = styled.div`
    background-size: cover;
    background-position: center;
    width: 50%;
    background-image: url('https://site.jamboeditora.com.br/wp-content/uploads/2023/07/3DeT-faq.png');

    @media (max-width: 768px) {
        width: 0px;
    }
`