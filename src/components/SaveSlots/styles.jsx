import styled from 'styled-components';

export const ContainerCards = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    gap: 16px;
    overflow: auto;
`

export const ContainerSessao = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8px;
    border: 1px solid #D11CE0;
    border-radius: 8px;
`

export const AvisoTexto = styled.p`
    color: #D11CE0;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    width: 100%;
`

export const Card = styled.div`
    height: 200px;
    min-width: 160px;
    border-radius: 8px;
    padding: 8px;
    background: #5785FA;
    background-image: ${(props) => props.backgroundImage && `url(${props.backgroundImage})`};
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 4px solid #000;
`
export const InnerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    p {
        color: #D11CE0;
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