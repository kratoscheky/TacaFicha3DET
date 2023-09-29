import styled from 'styled-components';

export const Container = styled.div`
  background: #00000050;
  color: #FFF;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2000;
  justify-content: center;
  top: 0;
  img{
    max-height: 400px;
  }
  h3{
    background: deeppink;
    border-radius: 8px;
    padding: 4px;
    text-align: justify;
    font-size: 12px;
    max-width: 300px;
  }
`

export const ModalCartaGerada = styled.div`
  background: #00000050;
  color: #FFF;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2000;
  justify-content: center;
  top: 0;
  padding: 20px;
  div{
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
  }
  b{
    color: #000000;
  }
`