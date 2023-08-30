import React from "react";
import logo from "../../images/TacaFicha/Logo.svg";
import bannerPng from "../../images/TacaFicha/Banner.png";
import tresdetlogo from "../../images/TacaFicha/logo 3DeT.svg";
import tablet from "../../images/TacaFicha/tablet.png";
import { DarkModeToggle } from "../DarkModeToggle";
import {
  Button,
  ContainerBanner,
  ContainerBarraSuperior,
  ContainerLogo,
  ContainerTablet,
  ContainerTexto,
  ContainerTextoETablet,
  Descricao,
} from "./styles";
import DownloadIcon from "@mui/icons-material/Download";

export const Topo = () => {
  return (
    <>
      <ContainerBarraSuperior>
        <ContainerLogo>
          <img style={{ height: "37px" }} src={logo} alt="3DeT TacaFicha" />
          <div />
          <img
            style={{ height: "37px" }}
            src={tresdetlogo}
            alt="3DeT TacaFicha"
          />
        </ContainerLogo>
        <DarkModeToggle />
      </ContainerBarraSuperior>
      <ContainerBanner
        style={{
          backgroundImage: `url(${bannerPng})`,
        }}
      >
        <ContainerTextoETablet>
          <ContainerTexto>
            <Descricao>
              <h1>Olá aventureiro!</h1>
              <br />
              <p>
                Este é um site não oficial para auxiliar na criação de
                personagens no sistema <b>3DeT Victory</b>.
              </p>
            </Descricao>

            <a
              href="https://blog.jamboeditora.com.br/wp-content/uploads/2023/08/3DeT-DEMO-Kit-Introdutorio.pdf"
              style={{ textDecoration: "none" }}
            >
              <Button>
                <b>Baixe a versão demo</b>
                <DownloadIcon
                  style={{
                    color: "#FFF",
                  }}
                />
              </Button>
            </a>
          </ContainerTexto>
          <ContainerTablet>
            {/* <img src={tablet} /> */}
          </ContainerTablet>
        </ContainerTextoETablet>
      </ContainerBanner>
    </>
  );
};
