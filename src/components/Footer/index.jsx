import React from "react";
import {Container, EsquerdaContainer, LinksUteis, RedesSociais} from "./styles.jsx";
import logo from '../../images/TacaFicha/Logo.svg'
import tresdet from '../../images/jambo/3DeT_HORIZONTAL_002.png'
import logojambo from '../../images/jambo/Logo-Jambo-Completo-Branco.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
  return (
    <>
      <Container>
        <EsquerdaContainer>
          <img src={logo} />
          <img src={tresdet} />
          <img src={logojambo} />
        </EsquerdaContainer>
        <LinksUteis>
          <h1>Links Úteis</h1>
          <a href='https://tacaficha.com.br/sobre'>Sobre</a>
          <a href='https://tacaficha.com.br/colaboradores'>Colaboradores</a>
          <a href='https://site.jamboeditora.com.br/3det/'>Loja da Jambô</a>
          <a href='https://jamboeditora.com.br/'>3DeT Victory!</a>
        </LinksUteis>
        <RedesSociais>
            <FacebookIcon />
            <TwitterIcon />
        </RedesSociais>
      </Container>
    </>
  )
}