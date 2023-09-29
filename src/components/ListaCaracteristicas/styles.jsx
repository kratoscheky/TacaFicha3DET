import styled from 'styled-components';

export const ContainerCaracteristicas = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px 8px;
`

export const Caracteristica = styled.div`
    padding: 4px 0;
    align-items: center;
    width: 100%;
    color: #FFF;
    font-weight: 500;
    justify-content: space-between;
    border-bottom: 1px solid #FFF;

    svg {
        cursor: pointer;
    }
`

export const AdicionarButton = styled.span`
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 600;
    padding: 16px;
    background: #FFBF22;
    border-radius: 8px;
    color: #6F0062;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    p{
        padding-top: 4px;
    }
`

export const ContainerTitulo = styled.div`
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`