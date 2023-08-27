import { TextareaAutosize } from '@mui/material';
import styled from 'styled-components';

export const ContainerMontaFicha = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    padding: 8px 0px;
    gap: 20px;
    width: 100%;
    margin-bottom: 16px;

    div {
        display: flex;
        gap: 8px;
    }
    h1{
        color: #D11CE0;
    }
    div input{
        display: inline-block;
        line-height: 1;
        font-size: 15px;
        padding: 12px 24px;
        border-radius: 3px;
        color: #000;
        fill: #fff;
        transition: all .3s;
        border: 1px solid #00000050;
        width: 100%;
    }
` 

export const TextArea = styled(TextareaAutosize)`
    display: inline-block;
    line-height: 1;
    font-size: 15px;
    padding: 12px 24px;
    border-radius: 3px;
    color: #000;
    fill: #fff;
    transition: all .3s;
    border: 1px solid #00000050;
    width: 100%;
`

export const ButtonFicha = styled.button`
    font-weight: 600;
    text-shadow: 0 0 16px rgba(0,0,0,.53);
    background-color: #D11CE0;
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