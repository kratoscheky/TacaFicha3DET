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
    max-width: 500px;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

export const ContainerTablet = styled.div`
    position: relative;
    img{
        position: absolute;
        position: absolute;
        right: -110px;
        top: -289px;
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
    }
    p{
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #FFF;
    }
`

export const Descricao = styled.div`
    max-width: 250px;
`

export const Button = styled.button`
    display: flex;
    background: #6F0062;
    border-radius: 10px;
    border: none;
    padding: 12px;
    align-items: center;
    b{
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: #FFF;
        text-transform: uppercase;
    }
`