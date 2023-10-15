import styled from 'styled-components';

export const ContainerTacaFicha = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-top: 1px solid #FFFFFF50;
`

export const Container = styled.div`
  background: #FFFFFF;
  width: 2483px;
  height: 3508px;
  color: #000;
  padding: 100px 101.5px 200px 101.5px;
  zoom: 10%;
`

export const PaddingInterno = styled.div`
  height: 100%;
  padding: 139.1px 135.6px;
  position: relative;
`

export const CantoEsquerdo = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`

export const CantoDireito = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`

export const Frame = styled.div`
  width: 935.9px;
  height: 1283.3px;
  margin-bottom: 40px;
  background-size: cover;
  background-position-x: center;
`

export const ContainerCamposDadosBasicos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  gap: 40px;
`

export const CamposDadosBasicos = styled.div`
display: inline;
  gap: 20px;
  p{
    display: inline;
    font-size: 28px;
  }
  h6{
    display: inline;
    font-size: 28px;
    text-transform: uppercase;
    padding-right: 16px;
  }
`

export const ContainerAtributos = styled.div`
  display: grid;
  grid-template-columns: 291.9px 291.9px 291.9px;
  grid-template-rows: 155.8px 155.8px;
  gap: 39.7px;
`

export const ContainerExtrasDireito = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 245px;
  height: 100%;
  width: 970px;
`

export const ContainerDadosExp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ExpExpacamento = styled.div`
  display: flex;
  gap: 50.6px;
  align-items: center;
  font-size: 30px;
`

export const ContainerExp = styled.div`
  width: 390.7px;
  height: 161px;
  display: flex;
  align-items: center;
  justify-content: center;
  h6{
      font-size: 100px;
  }
`

export const ContainerAnotacoes = styled.div`
  p{
      font-size: 20px;
  }
`

export const ContainerCamposExtras = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding: 70px 0;
  div{
      font-size: 40px;
  }
`

export const ContainerCampoAtributo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 130px;
  h6{
      font-size: 60px;
      margin: 0;
  }
`

export const ContainerTopo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 98.1px;
  h1{
      font-size: 130px;
      font-weight: bold;
      margin-left: 80px;
      text-transform: uppercase;
  }
`

export const LogoTresDeETe = styled.img`
  width: 362.4px;
  height: 175.1px;
`

export const ContainerColunas = styled.div`
  display: flex;
  gap: 160px;
  height: 94%;
`

export const TituloCampo = styled.h1`
  font-size: 39.1px;
  font-weight: bold;
  text-transform: uppercase;
`