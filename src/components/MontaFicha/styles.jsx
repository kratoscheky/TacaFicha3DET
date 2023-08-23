import styled from 'styled-components';

export const ContainerMontaFicha = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    padding: 8px;
    gap: 20px;
    width: 100%;

    div {
        display: flex;
        gap: 8px;
    }
    div label{
        min-width: 110px;
    }
    div input, div textarea{
        text-shadow: 0 0 16px rgba(0,0,0,.53);
        box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
        display: inline-block;
        line-height: 1;
        font-size: 15px;
        padding: 12px 24px;
        border-radius: 3px;
        color: #000;
        fill: #fff;
        transition: all .3s;
        border: none;
        width: 100%;
    }
` 