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
    div label{
        min-width: 110px;
    }
    div input, div textarea{
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