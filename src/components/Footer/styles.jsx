import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  align-items: center;
  background: #000;
  color: #FFFFFF;
  padding: 20px 8px;
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const EsquerdaContainer = styled.div`
  display: flex;
  gap: 18px;
  img{
    max-height: 40px;
  }
`

export const LinksUteis = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  a, p{
    cursor: pointer;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: #FFF;
    :visited{
      color: #fa0851;
    }
  p {
    color: #FFF;
    cursor: pointer;
   }
    
  }
`

export const RedesSociais = styled.div`
  display: flex;
  gap: 8px;
`