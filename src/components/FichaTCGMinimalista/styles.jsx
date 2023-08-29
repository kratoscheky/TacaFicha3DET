import styled from 'styled-components'

export const Card = styled.div`
    display: grid;
    grid-template-rows: 177px 411px 450px;
    width: 760px;
    background-color: #00000050;
    color: #000;
    zoom: 50%;
    background-size: cover;
`

export const ContainerBarras = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
`

export const Icon = styled.img`
    height: 42px;
`

export const SubIcon = styled.img`
    height: 24px;
`

export const AtributoTexto = styled.p`
    color: #FFF;
    font-size: 44px;
    font-weight: 700;
`

export const RecursoTexto = styled.p`
    color: #FFF;
    font-weight: 700;
    font-size: 32px;
`

export const AtributosIcones = styled.div`
    display: flex;
    gap: 14px;
    align-items: center;
`

export const RecursosIcones = styled.div`
    display: flex;
    gap: 14px;
    align-items: center;
`

export const ContainerAlinhamentoA = styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 14px;
    gap: 12px;
`

export const NomePontoTexto = styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 46px;
`

export const TopoNomePonto = styled.div`
    display: grid;
    grid-template-rows: 1fr;
`
export const FundoAtributos = styled.img`
    grid-row: 1 / 2;
    grid-column: 1 / 2;
`

export const ContainerITAtributos = styled.div`
    display: grid;
    grid-template-rows: 1fr;
`

export const ContainerArquetipo = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    align-items: center;
`

export const ArquetipoBar = styled.img`
    grid-row: 1 / 2;
    grid-column: 1 / 2;
`

export const ArquetipoText = styled.p`
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    color: #FFF;
    font-weight: 500;
    padding: 0 46px;
    font-family: Oxanium;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const H1Descricao = styled.h1`
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const PDescricaoPericias = styled.p`
    font-family: Roboto;
    font-size: 26px;
    font-weight: 900;
    font-style: normal;
    line-height: normal;
`

export const PDescricaoVantagens = styled.p`
    font-family: Roboto;
    font-weight: 500;
    font-size: 26px;
    font-style: normal;
    line-height: normal;
`

export const PDescricaoDesvantagens = styled.p`
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    line-height: normal;
    font-weight: 900;
    color: #E31A1C;
`

export const NomeArquetipoContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
`

export const ContainerAtributos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
`

export const ContainerTextos = styled.div`
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    padding: 0 50px 25px 50px;
`

export const ContainerVantagensDes = styled.div`
    border-radius: 28px 28px 0px 0px;
    background: rgba(255, 255, 255, 0.82);
    height: 60%;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
`

export const ContainerDescricao = styled.div`
    border-radius: 0px 0px 28px 28px;
    background: #131313;
    height: 40%;
    color: #FFF;
    padding: 18px 20px;
    p{
        font-family: Roboto;
        font-size: 24px;
        text-align: justify;
    }
`

export const Borda = styled.img`
    grid-row: 1 / 5;
    grid-column: 1 / 2;
`

export const Nometexto = styled.p`
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Pontotexto = styled.p`
    font-size: 42.852px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const Button = styled.button`
    font-weight: 600;
    max-height: 48px;
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

export const Container = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: center;
`