import styled from 'styled-components';

export const Carta = styled.div`
  width: 750px;
  height: 1040px;
  display: grid;
  grid-template-rows: 167.8px 360.9px 396.7px 1fr;
  background-size: cover;
  background-position: center;
  color: #FFF;
  zoom: 50%;
`

export const EscalaPoder = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding-top: 25px;
  padding-right: 24px;
`

export const Frame = styled.img`
  grid-row: 1/5;
  grid-column: 1/2;
`

export const Topo = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  padding: 25px;
`

export const Meio = styled.div`
  display: flex;
  grid-column: 1/2;
  grid-row: 1/4;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 900;
  padding: 140px 60px 40px 60px;
  text-align: justify;
  h1{
    margin: 8px 0;
  }
  p{
    font-weight: 200;
    font-size: 20px;
    margin: 4px 0;
  }
  b{
    font-weight: bold;
  }
`

export const TextosContainer = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: flex-end;
  padding: 0 54px;
  max-width: 754px;
`

export const ContainerText = styled.div`
  background: #FFFFFF99;
  width: 100%;
  padding: 8px 20px;
  h1{
    color: #000;
  }
`

export const VanDesContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TagsPericias = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 0 20px;
    p{
        padding: 8px 16px;
        color: #FFF;
        font-family: Roboto;
        font-size: 20px;
        font-weight: 600;
        border-radius: 10px;
    }
`

export const TextoDesVanContainer = styled.div`
  display: flex;
  gap: 4px;
  height: 100%;
  align-items: center;
  padding: 0 12px;
  color: #2a2a2a;
  font-size: 24px;
  font-weight: bold;
`
export const Svg = styled.svg`
  path{
    fill: ${props => props.fillEscala};
  }
`

export const ContainerFramesTextos = styled.div`
  display: grid;
  div{
    grid-row: 1/2;
    grid-column: 1/2;
  }
  img{
    display: flex;
    width: 100%;
  }
`

export const ContainerFrame = styled.div`
  
`

export const DetalhesContainer = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-size: 20px;
  }
`

export const ContainerNomePontos = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 58px;
  align-items: center;
  padding-left: 20px;
  p{
    font-size: 32px;
    font-weight: 600;
    color: #000;
  }
  div{
    width: 174px;
    display: flex;
    justify-content: center;
  }
  div p{
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
  }
`

export const ArquetipoContainer = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  p{
    font-size: 25px;
    font-weight: 600;
  }
`

export const Baixo = styled.div`
  grid-column: 1/2;
  grid-row: 4/5;
  display: flex;
  padding-left: 82px;
  width: 482px;
  align-items: center;
  justify-content: space-between;
  font-weight: 900;
`

export const RecursosContainer = styled.div`
  width: 116px;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  p{
    font-size: 30px;
  }
`
export const RecursosContainerMana = styled.div`

`
export const RecursosContainerVida = styled.div`

`

export const AtributosContainer = styled.div`
  display: flex;
  gap: 16px;
  p{
    font-size: 30px;
  }
`
export const AtributosContainerPoder = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 122px;
  p{
    font-size: 30px;
  }
`

export const ContainerAtrRec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-top: 8px;
`
export const AtributosContainerHabilidade = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 122px;
  p{
    font-size: 30px;
  }
`
export const AtributosContainerresistencia = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 122px;
  p{
    font-size: 30px;
  }
`