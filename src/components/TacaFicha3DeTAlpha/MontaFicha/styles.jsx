import {TextareaAutosize} from '@mui/material';
import styled from 'styled-components';
import frame from '../../../images/CartaTacaFicha/Frame.png'

export const ContainerMontaFicha = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    gap: 20px;
    width: 100%;
    margin-bottom: 16px;
    border-radius: 8px;

    div {
        display: flex;
        gap: 8px;
    }
    h1{
        color: #FFFFFF;
        text-transform: uppercase;
    }
    div input{
        display: inline-block;
        line-height: 1;
        font-size: 15px;
        padding: 12px 24px;
        border-radius: 3px;
        color: var(--color-foreground);
        fill: var(--color-background);
        background-color: var(--color-background);
        transition: all .3s;
        border: 1px solid var(--input-border);
        width: 100%;
    }
`

export const TextArea = styled(TextareaAutosize)`
    display: inline-block;
    line-height: 1;
    font-size: 15px;
    padding: 12px 24px;
    border-radius: 3px;
    color: var(--color-foreground);
    fill: var(--color-background);
    background-color: var(--color-background);
    transition: all .3s;
    border: 1px solid var(--input-border);
    width: 100%;
`

export const ButtonFicha = styled.button`
  font-weight: 600;
  text-shadow: 0 0 16px rgba(0, 0, 0, .53);
  background-color: #1f5388;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .5);
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

export const ButtonSecundario = styled.button`
    font-weight: 600;
    text-shadow: 0 0 16px rgba(0,0,0,.53);
    background-color: #FFFFFF;
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

export const ContainerInputs = styled.div`
    width: 100%;
    align-items: flex-end;
`

export const SessaoInputs = styled.div`
    padding: 16px;
    background: #1F5388FF;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
`

export const SessaoInputsAtributos = styled.div`
    background: #1F5388FF;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
`

export const InternoAtributos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const PainelPersonalidade = styled.div`
    width: 100%;
    padding: 16px;
    background-color: #1F5388FF;
    border-radius: 8px;
`

export const ContainerPersonalidade = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`

export const ContainerAtributos = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 0 16px 16px;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const AtributosImagem = styled.div`
    background-size: cover;
    background-position: center;
    width: 50%;
    background-image: url('https://i.imgur.com/DkU1luf.png');

    @media (max-width: 768px) {
        width: 0px;
    }
`

export const ContainerAnotacoes = styled.div`
  display: block !important;
  width: 100%;
  background: #1F5388FF;
  color: #FFF;
  svg{
    filter: brightness(0) invert(1);
  }
  .ql-picker-options{
    background: #1F5388FF;
  }
  span{
    color: #FFF;
  }
  div {
    display: block;
  }
`

export const ContainerFicha = styled.div`
    min-width: 300px;
    max-width: 400px;
    margin-bottom: 16px;
    background-color: #FFFFFF;
    box-shadow: 4px 4px 9px 0px var(--drop-shadow);
`

export const ImageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 1200px;
  background: #1f5186;
  padding: 20px;
  border-radius: 8px;

  h1 {
    color: #ffffff;
    text-transform: uppercase;
  }
`

export const Container = styled.div`
    width: 100%;
  max-width: 1200px;
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 8px;
`

export const CropContainer = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 2000;
  background: #00000090;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContainerLegado = styled.div`
  padding: 20px;
  background: #1f5186;
  border-radius: 8px;
`

export const ButtonUpload = styled.button`
  font-weight: 600;
  text-shadow: 0 0 16px rgba(0, 0, 0, .53);
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .5);
  font-size: 16px;
  padding: 15px 30px;
  border-radius: 4px;
  text-decoration: none;
  fill: #fff;
  text-align: center;
  transition: all .3s;
  border: none;
  color: #1f5085;
  cursor: pointer;
  width: 100%;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ButtonCut = styled.button`
  font-weight: 600;
  text-shadow: 0 0 16px rgba(0, 0, 0, .53);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .5);
  font-size: 16px;
  padding: 15px 30px;
  border-radius: 4px;
  text-decoration: none;
  fill: #fff;
  text-align: center;
  transition: all .3s;
  border: none;
  display: inline-block;
  color: #1f5186;
  cursor: pointer;
  width: 100%;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  max-width: 80px;
`

export const DadosPersonagem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-image: url('${frame}');
  background-size: cover;
  background-position-y: bottom;
  padding: 0 40px 40px 40px;

  h1 {
    color: #1f5186;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
  }

  p {
    color: #000;
    text-align: justify;
    font-style: normal;
    font-weight: 400;
  }
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`
export const ContainerExtras = styled.div`
    padding: 0px 0px 16px 28px;
    background-color: #FFFFFF;
    div{
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding-bottom: 12px;
    }
    div b{
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-transform: uppercase;
    }
    div:nth-child(1) b{
        color: #3FA535;
    }
    div:nth-child(2) b{
        color: #0447BE;
    }
    div:nth-child(3) b{
        color: #E7017D;
    }   
    div p{
        margin-left: 8px;
        font-size: 16;
    }
`

export const Button = styled.button`
  font-weight: 600;
  text-shadow: 0 0 16px rgba(0, 0, 0, .53);
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .5);
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
`