import styled from 'styled-components';

export const ContainerBarraSuperior = styled.div`
    width: 100%;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 16px;

    button {
        margin-right: 8px;
    }
`

export const ContainerLogo = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    div{
        height: 40px;
        border: 1px solid #FFF;
    }
`

export const ContainerBanner = styled.div`
    width: 100%;
    height: 578px;
    display: flex;
    justify-content: center;
    background-size: auto;
    border-bottom: 10px solid #6F0062;
`

export const ContainerTextoETablet = styled.div`
    padding: 8px;
    display: flex;
    max-width: 1200px;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

export const ContainerTablet = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`

export const ContainerTexto = styled.div`
display: flex;
flex-direction: column;
gap: 70px;
    h1{
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: #FFF;
        font-size: 40px;
    }
    p{
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #FFF;
        font-size: 20px;
    }
`

export const Descricao = styled.div`
    max-width: 400px;
`

export const Button = styled.button`
    display: flex;
    background: #6F0062;
    border-radius: 10px;
    border: none;
    padding: 12px;
    align-items: center;
    cursor: pointer;
    b{
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: #FFF;
        text-transform: uppercase;
    }
`