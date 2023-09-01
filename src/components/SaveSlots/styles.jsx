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

export const AvisoTexto = styled.p`
    color: #6F0062;
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