import styled from 'styled-components';
import frame from '../../images/frame.png'

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
    background: #6F0062;
    padding: 20px;
    border-radius: 8px;
    h1 {
      color: #FFBF22;
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

export const ButtonUpload = styled.button`
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
    color: #fff;
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
    text-shadow: 0 0 16px rgba(0,0,0,.53);
    box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
    font-size: 16px;
    padding: 15px 30px;
    border-radius: 4px;
    text-decoration: none;
    fill: #fff;
    text-align: center;
    transition: all .3s;
    border: none;
    display: inline-block;
    color: #fff;
    cursor: pointer;
    width: 100%;
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    background: #ffb300;
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
        color: #6F0062;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        width: 100%;
        text-align: center;
    }
    p{
        color: #000;
        text-align: justify;
        font-style: normal;
        font-weight: 400;
    }
`

export const ContainerAtributos = styled.div`
    padding: 0px 0px 16px 28px;
    background-color: #FFFFFF;
    div{
        display: flex;
        align-items: center;
        gap: 2px;
    }
    div b{
        color: #6F0062;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-transform: uppercase;
        text-align: center;
    }
    div p{
        margin-left: 8px;
        font-weight: 800;
        font-size: 16;
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
`