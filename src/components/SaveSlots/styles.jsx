import styled from 'styled-components';

export const ContainerCards = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    overflow: auto;
`

export const ContainerSessao = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8px;
    border-radius: 8px;
    max-width: 1200px;
    padding: 16px;
    background: #6F0062;
    margin: 16px 0;
    h1{
        color: #FFBF22;
        text-transform: uppercase;
    }
`

export const ContainerModal = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 16px;
`

export const ContainerConteudoModal = styled.div`
    max-width: 500px;
    padding: 16px;
    background: #6F0062;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    h1{
        color: #FFBF22;
    }
    p{
        font-weight: 500;
        font-family: Roboto;
        color: #FFF;
    }
`

export const AvisoTexto = styled.p`
    color: #FFF;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    width: 100%;
`

export const DeleteButton = styled.div`
        font-weight: 600;
    text-shadow: 0 0 16px rgba(0,0,0,.53);
    background-color: crimson;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
    font-size: 16px;
    padding: 15px 30px;
    border-radius: 4px;
    text-decoration: none;
    fill: #fff;
    text-align: center;
    transition: all .3s;
    border: none;
    flex-grow: 1;
    order: 10;
    display: inline-block;
    color: #fff;
    cursor: pointer;
    width: 100%;
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
`

export const ConfirmButton = styled.div`
    font-weight: 600;
    text-shadow: 0 0 16px rgba(0,0,0,.53);
    background-color: #ffb300;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
    font-size: 16px;
    padding: 15px 30px;
    border-radius: 4px;
    text-decoration: none;
    fill: #fff;
    text-align: center;
    transition: all .3s;
    border: none;
    flex-grow: 1;
    order: 10;
    display: inline-block;
    color: #fff;
    cursor: pointer;
    width: 100%;
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
`

export const ButtonsFlex = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
`

export const Card = styled.div`
    height: 200px;
    min-width: 160px;
    border-radius: 8px;
    padding: 8px;
    background: #5785FA;
    background-image: ${(props) => props.backgroundImage && `url(${props.backgroundImage})`};
    box-shadow: var(--drop-shadow) 4px 4px 9px 0px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 4px solid #000;
    margin-bottom: 10px;
`
export const InnerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    p {
        color: #6F0062;
        font-weight: 900;
    }
`

export const NomeTopo = styled.div`
    background-color: #FFF;
    padding: 4px;
    border-radius: 4px;
`

export const ContainerButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    background-color: #00000090;
    border-radius: 4px;
`

export const StatusContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: #00000090;
    padding: 4px;
    border-radius: 4px;
    p{
        font-weight: 700;
        color: #FFF;
    }
    img {
        filter: brightness(0) invert(1);
        height: 20px;
        width: 20px;
    }
`