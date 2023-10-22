import styled from 'styled-components';
import frame from '../../images/pdf/frame.png';

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
  background-image: url(${frame});
  background-size: cover;
  zoom: 40%;
`

export const PaddingInterno = styled.div`
  padding: 10mm;
  height: 100%;
`

export const EspacamentoTopo = styled.div`
  height: 20.2mm;
`
export const Colunas = styled.div`
  display: flex;
  gap: 10mm;
`

export const ColunaEsquerda = styled.div`
  width: 100%;
`

export const ColunaDireita = styled.div`
  width: 100%;
`

export const DadosBasicosTextos = styled.div`
  display: flex;
  flex-direction: column;
  div{
    display: flex;
  }
`

export const Texto = styled.p`
  font-size: 10pt;
  font-family: 'Roboto';
  font-weight: 400;
  color: #000;
  max-width: 800px;
  max-height: 11pt;
  overflow: hidden;
  min-height: 3.6mm;
`

export const TriadeDeDados = styled.div`
  display: grid !important;
  grid-template-columns: 45.7mm 20.7mm 23.7mm;
  margin-top: 12.5mm;
`

export const AtributosContainer = styled.div`
  display: grid;
  grid-template-columns: 27.7mm 27.7mm 27.7mm;
  grid-template-rows: 14.8mm 14.8mm;
  column-gap: 3.5mm;
  row-gap: 6.9mm;
  margin-top: 11.3mm;
`

export const TextoAtributo = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 3.4mm;
  font-family: Oxanium;
  font-size: 18.3pt;
  font-weight: 800;
  color: #000;
`

export const ContainerImagem = styled.div`
  margin-top: 12.8mm;
  margin-left: 1.5mm;
`

export const Imagem = styled.div`
  width: 87.3mm;
  height: 82.5mm;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const ContainerLinhas = styled.p`
  line-height: 2.4;
  font-size: 10pt;
  font-family: 'Roboto';
  font-weight: 400;
  color: #000;
  max-width: 800px;
  overflow: hidden;
`