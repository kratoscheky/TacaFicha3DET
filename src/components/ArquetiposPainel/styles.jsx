import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    overflow: auto;
    padding: 16px 0;
    border-radius: 8px;
`

export const Painel = styled.div`
    border-radius: 8px;
    height: 250px;
    min-width: 200px;
    width: 200px;
    display: grid;
    grid-template-rows: 1fr;
    align-items: end;
    justify-content: center;
    justify-items: center;
    background: url(https://site.jamboeditora.com.br/wp-content/uploads/2023/07/3DeT-fundo-opacidade.png);
    background-size: cover;
    box-shadow: 4px 4px 9px 0px var(--drop-shadow);
    cursor: pointer;
    img {
        width: 100%;
        max-height: 250px;
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        border-radius: 8px;
    }
    p{
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        color: #FFBF22;
        font-weight: 900;
        font-size: 20px;
        text-transform: uppercase;
        width: 100%;
        text-align: center;
        padding: 8px;
        background: #000;
        border-radius: 0 0 8px 8px;
    }
`