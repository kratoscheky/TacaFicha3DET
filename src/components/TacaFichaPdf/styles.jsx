import styled from 'styled-components';

export const ContainerTacaFicha = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #FFFFFF;
  padding-top: 20px;
  *{
    font-family: Oxanium;
    box-sizing: border-box;
  }
`

export const Container = styled.div`
  width: 210mm;
  height: 297mm;
  background-color: #FFF;
  zoom: 40%;
`

export const PaddingInterno = styled.div`
  padding: 11mm;
  position: relative;
  height: 100%;
`

export const CantoEsquerdo = styled.img`
  width: 72mm;
  height: 67.4mm;
  position: absolute;
`

export const CantoDireito = styled.img`
  width: 75mm;
  height: 70.3mm;
  position: absolute;
  bottom: 11mm;
  right: 11mm;
`

export const Frame = styled.div`
  width: 79.2mm;
  height: 108.7mm;
  background-size: cover;
  img{
    width: 79.2mm;
    height: 108.7mm;
    padding: 4.1mm;
  }
`

export const ContainerCamposDadosBasicos = styled.div`
  padding: 7mm 0 7mm 0;
  display: flex;
  flex-direction: column;
  gap: 4mm;
`

export const CamposDadosBasicos = styled.div`
  display: inline-block;
  p{
    color: #000;
    display: inline-block;
  }
  h6{
    font-size: unset;
    color: #000;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    padding-right: 1mm;
  }
`

export const ContainerAtributos = styled.div`
  display: grid;
  grid-template-columns: 24.7mm 24.7mm 24.7mm;
  grid-template-rows: 13.2mm 13.2mm;
  gap: 3.4mm;
`

export const ContainerExtrasDireito = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 7.2mm;
`

export const ContainerDadosExp = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-items: flex-end;
  justify-content: space-between;
`

export const ExpExpacamento = styled.div`
  display: flex;
  gap: 4.3mm;
  align-items: center;
  color: #000;
  h1{
    font-size: 3.3mm;
  }
`

export const ContainerExp = styled.div`
  width: 33.1mm;
  height: 13.6mm;
  background-size: cover;
  h6{

  }
`

export const ContainerCamposDireito = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4mm;
`

export const ContainerAnotacoes = styled.div`
  p{

  }
`

export const ContainerCamposExtras = styled.div`
  color: #000;
  text-transform: uppercase;
  font-weight: 700;
  div{
    display: flex;
    flex-direction: column;
    gap: 1mm;
  }
`

export const ContainerCampoAtributo = styled.div`
  background-size: cover;
  h6{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 8mm;
    padding-left: 8mm;
  }
`

export const ContainerTopo = styled.div`
  padding: 11.8mm;
  display: flex;
  align-items: center;
  h1{
    color: #000;
    font-size: 8.9mm;
    text-transform: uppercase;
    padding-left: 6.5mm;
  }
`

export const LogoTresDeETe = styled.img`
  width: 30.7mm;
  height: 14.8mm;
`

export const ContainerColunas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 11.6mm;
  height: calc(100% - 42mm);
  gap: 12mm;
`

export const TituloCampo = styled.h1`

`