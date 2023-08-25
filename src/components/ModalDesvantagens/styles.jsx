import { Modal } from '@mui/material';
import styled from 'styled-components';

export const ContainerModal = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
`
export const ConteudoModal = styled.div`
    background: #FFF;
    max-width: 500px;
    max-height: 500px;
    padding: 16px;
    overflow: auto;
    display: flex;
    flex-direction: column;
`

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`