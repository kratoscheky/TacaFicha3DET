import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 3000;
  width: 358px;
  height: 748px;
  border: 4px solid #FFF;
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
  }
  @media (max-height: 680px) {
    height: 100%;
    bottom: 0;
  }
`

export const ContainerButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 3000;
`

export const Icon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`

export const CloseI = styled(CloseIcon)`
  position: absolute;
  right: 8px;
  top: 8px;
  color: #FFF;
  background: crimson;
  cursor: pointer;
`