import { Modal } from '@mui/material';
import styled from 'styled-components';

export const ContainerModal = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
`
export const ConteudoModal = styled.div`
    background: #6F0062;
    padding: 16px;
    border-radius: 8px;
    max-width: 500px;
    max-height: 500px;
    padding: 16px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    h1{
        color: #FFBF22;
    }
`

export const ContainerItens = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: #FFF;
    p{
        font-family: Roboto;
        padding: 8px 0;
    }
`

export const Titulo = styled.h3`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFF
` 

export const AdicionarButton = styled.span`
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 600;
    cursor: pointer;
    background: #FFBF22;
    border-radius: 8px;
    padding: 4px;
    color: #6F0062;
` 