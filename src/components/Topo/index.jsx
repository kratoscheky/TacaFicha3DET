import React, { useState } from "react";
import logo from "../../images/TacaFicha/Logo.svg";
import tacaficha from "../../images/home/TacaFicha_Pdf.jpg"
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
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Topo = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <>
      <ContainerBarraSuperior>
        <ContainerLogo>
          <img style={{ height: "37px" }} src={logo} alt="3DeT TacaFicha" />
          <div />
          <img style={{ height: "37px" }} src={tresdetlogo} alt="TacaFicha" />
        </ContainerLogo>
        <DarkModeToggle />
      </ContainerBarraSuperior>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={setSwiper}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
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
                  href="https://blog.jamboeditora.com.br/wp-content/uploads/2023/08/3DeT_-_DEMO_-_Kit_Introdutorio.pdf"
                  target="_blank"
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
                <img
                  style={{
                    height: "500px",
                  }}
                  src={tablet}
                />
              </ContainerTablet>
            </ContainerTextoETablet>
          </ContainerBanner>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerBanner
            style={{
              backgroundImage: `url(${tacaficha})`,
            }}
          >
            <ContainerTextoETablet>
              <ContainerTexto>
                <Descricao style={{
                  background: '#6F0062',
                  padding: '18px',
                  borderRadius: '8px'
                }}>
                  <h1 style={{color: '#FFBF22'}}>Uma ficha completa!</h1>
                  <br />
                  <p style={{color: '#FFF'}}>
                    Confira nossa ficha em branco no formato pdf. É só <b>baixar e imprimir!</b>
                  </p>
                </Descricao>

                <a
                  href="https://drive.google.com/file/d/1MFfAR6sVmTt6yUc8J6EIl_4o-0gfG3Me/view"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button>
                    <b>Baixe a Ficha</b>
                    <DownloadIcon
                      style={{
                        color: "#FFF",
                      }}
                    />
                  </Button>
                </a>
              </ContainerTexto>
              <ContainerTablet>
                
              </ContainerTablet>
            </ContainerTextoETablet>
          </ContainerBanner>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
