import styled from 'styled-components';

export const ContainerCaracteristicas = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px 8px;
` 

export const Caracteristica = styled.div`
    background-color: var(--color-background);
    box-shadow: 1px 1px 4px 0px var(--drop-shadow);
    padding: 10px 14px;
    align-items: center;

    svg {
        cursor: pointer;
    }
` 

export const AdicionarButton = styled.span`
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 600;
    cursor: pointer;
` 