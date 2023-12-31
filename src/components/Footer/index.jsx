import React from "react";
import {Container, EsquerdaContainer, LinksUteis, RedesSociais} from "./styles.jsx";
import logo from '../../images/TacaFicha/Logo.svg'
import tresdet from '../../images/jambo/3DeT_HORIZONTAL_002.png'
import logojambo from '../../images/jambo/Logo-Jambo-Completo-Branco.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useNavigate} from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <EsquerdaContainer>
          <a href='/'><img src={logo} /></a>
          <a href='https://site.jamboeditora.com.br/3det/'><img src={tresdet} /></a>
          <a href='https://jamboeditora.com.br/'><img src={logojambo} /></a>
        </EsquerdaContainer>
        <LinksUteis>
          <h1>Links Úteis</h1>
          <p onClick={() => navigate('/sobre')}>Sobre</p>
          <p onClick={() => navigate('/colaboradores')}>Colaboradores</p>
          <a href='https://site.jamboeditora.com.br/3det/'>3DeT Victory!</a>
          <a href='https://jamboeditora.com.br/'>Loja da Jambô</a>
        </LinksUteis>
        <RedesSociais>
          <a href='https://www.facebook.com/tacaficha'><FacebookIcon /></a>
          <a href='https://twitter.com/TacaFicha'><TwitterIcon /></a>
        </RedesSociais>
      </Container>
    </>
  )
}