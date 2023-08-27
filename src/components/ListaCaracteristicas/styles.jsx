import styled from 'styled-components';

export const ContainerCaracteristicas = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px 8px;
` 

export const Caracteristica = styled.div`
    background-color: #FFFFFF;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
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