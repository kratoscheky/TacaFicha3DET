import styled from 'styled-components'

export const Card = styled.div`
    display: grid;
    grid-template-rows: 180px 370px 378px 116px;
    width: 760px;
    background-color: #00000050;
    zoom: 40%;
    -moz-transform: scale(0.5);
    color: #000;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 0%;
    transform-origin: center;

    &:before,
    &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-repeat: no-repeat;
        opacity: .5;
        mix-blend-mode: color-dodge;
        // transition: all .33s ease;
        filter: brightness(.66) contrast(1.33);
    }

    &.foil:before {
        background-position: 50% 50%;
        background-size: cover;
        background-image: linear-gradient(125deg, #ff008450 15%, #fca40040 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%);
        opacity: 0.5;
        filter: brightness(.66) contrast(1.33);
        z-index: 1;
    }

    &.foil:after {
        opacity: 1;
        background-image: url("assets/sparkles.webp"), 
            url(assets/holo.webp), 
            linear-gradient(125deg, #ff008450 15%, #fca40040 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%);
        background-position: 50% 50%;
        background-size: cover;
        background-blend-mode: overlay;
        z-index: 2;
        filter: brightness(1) contrast(1);
        transition: all .33s ease;
        mix-blend-mode: color-dodge;
        opacity: .75;
    }

    &.foil.active:after,
    &.foil:hover:after {
        filter: brightness(1) contrast(1);
        opacity: 1;
    }

    &.foil.active,
    &.foil:hover {
        animation: none;
        transition: box-shadow 0.1s ease-out;
    }

    &.foil.active:before,
    &.foil:hover:before {
        animation: none;
        background: linear-gradient(${(props) => props.gradientDegree ? props.gradientDegree : '125'}deg, #ff008450 15%, #fca40040 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%);
        background-position: 50% 50%;
        background-size: 100% 100%;
        opacity: .88;
        filter: brightness(.66) contrast(1.33);
        transition: background 0.3s ease-in-out !important;
    }
`

export const ContainerBarras = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
`

export const ContainerRecursos = styled.div`
    display: flex;
    grid-row: 4/5;
    grid-column: 1/2;
    justify-content: space-between;
    align-items: flex-end;
    color: #FFF;
`

export const ContainerRecursosTabs = styled.div`
    padding-left: 52px;
    display: flex;
    gap: 15px;
`

export const TagRecursoAcao = styled.div`
    width: 122px;
    height: 70px;
    border-radius: 25px 25px 0 0;
    background-color: #FF9E00;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
`

export const TagRecursoMana = styled.div`
    width: 122px;
    height: 70px;
    border-radius: 25px 25px 0 0;
    background-color: #894EC6;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
`

export const TagRecursoVida = styled.div`
    width: 122px;
    height: 70px;
    border-radius: 25px 25px 0 0;
    background-color: #5EB05D;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
`

export const Icon = styled.img`
    height: 42px;
`

export const SubIcon = styled.img`
    height: 25px;
`

export const AtributoTexto = styled.p`
    color: #FFF;
    font-size: 44px;
    font-weight: 700;
`

export const RecursoTexto = styled.p`
    color: #FFF;
    font-weight: 700;
    font-size: 28px;
`

export const AtributosIcones = styled.div`
    display: flex;
    gap: 14px;
    align-items: center;
    justify-content: space-between;
`

export const RecursosIcones = styled.div`
    display: flex;
    gap: 14px;
    align-items: center;
`

export const ContainerAlinhamentoAPoder = styled.div`
    width: 100px;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    padding: 22px 14px;
    gap: 12px;
    border-radius: 0 15px 15px 0;
    background-color: #FF9E00;
`

export const ContainerAlinhamentoAHabilidade = styled.div`
    width: 100px;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    padding: 22px 14px;
    gap: 12px;
    border-radius: 0 15px 15px 0;
    background-color: #894EC6;
`

export const ContainerAlinhamentoAResistencia = styled.div`
    width: 100px;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    padding: 22px 14px;
    gap: 12px;
    border-radius: 0 15px 15px 0;
    background-color: #5EB05D;
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
    font-family: Oxanium;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const PDescricao = styled.p`
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    line-height: normal;
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
    padding: 0 50px;
`

export const ContainerVantagensDes = styled.div`
    border-radius: 28px 28px 0px 0px;
    background: rgba(255, 255, 255, 0.82);
    height: 256px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
`

export const TagsPericias = styled.div`
    display: flex;
    gap: 10px;
    p{
        padding: 8px 16px;
        margin-bottom: 10px;
        color: #FFF;
        font-family: Roboto;
        font-size: 24px;
        border-radius: 10px;
    }
`

export const ContainerDescricao = styled.div`
    border-radius: 0px 0px 28px 28px;
    background: #131313;
    height: 122px;
    color: #FFF;
    padding: 18px 20px;
    p{
        font-family: Roboto;
        font-size: 20px;
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