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
    height: 200px;
    min-width: 100px;
    display: grid;
    grid-template-rows: 1fr;
    align-items: end;
    justify-content: center;
    justify-items: center;
    background: #FFFFFF20;
    cursor: pointer;
    img {
        width: 100%;
        max-height: 200px;
        grid-row: 1 / 2;
        grid-column: 1 / 2;
    }
    p{
        text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000,
               1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        color: #FFBF22;
        font-weight: 900;
        text-transform: uppercase;
    }
`