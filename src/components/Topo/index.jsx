import React from "react";
import logo from "../../images/TacaFicha/Logo.svg";
import tacaficha from "../../images/home/TacaFicha_Pdf.jpg"
import bannerPng from "../../images/TacaFicha/Banner.png";
import tresdetlogo from "../../images/TacaFicha/logo 3DeT.svg";
import tablet from "../../images/TacaFicha/tablet.png";
import {DarkModeToggle} from "../DarkModeToggle";
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
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {AvisoTopo} from "../AvisoTopo/index.jsx";
import {Navigate, useNavigate} from "react-router-dom";

export const Topo = (props) => {
  const {showSwiper = true} = props;

  return (
    <>
      {showSwiper && (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
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
                backgroundImage: `url(https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/project/uploaded_image/178305/db3b6b9a-a485-4638-8a8c-83508f0a123e.png)`,
                backgroundPositionX: 'right'
              }}
            >
              <ContainerTextoETablet>
                <ContainerTexto>
                  <Descricao style={{
                    background: '#6F0062',
                    padding: '18px',
                    borderRadius: '8px'
                  }}>
                    <h1 style={{color: '#FFBF22'}}>Jornada Heroica: Guerra Artoniana</h1>
                    <br/>
                    <p style={{color: '#FFF'}}>
                      Junte-se às tropas de Arton — e ajude as vítimas de uma catástrofe real. <br /> <br /> <b>O valor arrecadado para doação</b> será destinado a <b>colaboradores da Jambô</b> que tiveram perdas pela enchente no Rio Grande do Sul.
                    </p>
                  </Descricao>

                  <a
                    href="https://www.catarse.me/guerraartoniana"
                    target="_blank"
                    style={{textDecoration: "none"}}
                    rel="noreferrer"
                  >
                    <Button>
                      <b>Apoiar Campanha</b>
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
          <SwiperSlide>
            <ContainerBanner
              style={{
                backgroundImage: `url(${bannerPng})`
              }}
            >
              <ContainerTextoETablet>
                <ContainerTexto>
                  <Descricao>
                    <h1>Olá aventureiro!</h1>
                    <br/>
                    <p>
                      Este é um site não oficial para auxiliar na criação de
                      personagens no sistema <b>3DeT Victory</b>.
                    </p>
                  </Descricao>

                  <a
                    href="https://blog.jamboeditora.com.br/wp-content/uploads/2023/08/3DeT_-_DEMO_-_Kit_Introdutorio.pdf"
                    target="_blank"
                    style={{textDecoration: "none"}}
                    rel="noreferrer"
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
                    alt=""
                  />
                </ContainerTablet>
              </ContainerTextoETablet>
            </ContainerBanner>
          </SwiperSlide>
        </Swiper>
      )}
      <AvisoTopo />
    </>
  );
};

export const BarraSuperior = () => {
  const navigate = useNavigate();

  return (
    <>
      <ContainerBarraSuperior>
        <ContainerLogo onClick={() => navigate('/')}>
          <img style={{height: "37px"}} src={logo} alt="3DeT TacaFicha"/>
          <div/>
          <img style={{height: "37px"}} src={tresdetlogo} alt="TacaFicha"/>
        </ContainerLogo>
        <DarkModeToggle/>
      </ContainerBarraSuperior>
    </>
  )
}
