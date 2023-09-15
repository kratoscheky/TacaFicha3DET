import {TacaFicha} from "../index";
import {TacaFichaVerso} from "../TacaFichaVerso";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';

import { EffectCards } from 'swiper/modules';
import html2canvas from "html2canvas";
import {Button} from "./styles";
import SaveIcon from "@mui/icons-material/Save";

export function TacaFichaTCG() {
  const [swiper, setSwiper] = useState(null);
  const [actualCard, setActualCard] = useState('tacaficha')

  const captureAndSaveFicha = () => {
    const container = document.querySelector(`#${actualCard}`); // Use a classe do ContainerFicha real

    if (container) {
      html2canvas(container).then((canvas) => {
        // Convertendo o canvas para um URL de imagem
        const imgURL = canvas.toDataURL("image/png");

        // Criando um link para download
        const downloadLink = document.createElement("a");
        downloadLink.href = imgURL;
        downloadLink.download = "ficha.png";
        downloadLink.click();
      });
    }
  };

  const HandleCardAtivo = (index) => {
    if(index == '0')
      setActualCard('tacaficha')
    else
      setActualCard('tacaficha-verso')
  }

  return <div style={{
    gap: "8px",
    overflow: "auto",
    padding: "20px",
    background: '#6F0062',
    borderRadius: '8px',
  }}>
    <h1 style={{color: '#FFBF22', paddingBottom: '20px'}}>TACA FICHA!</h1>
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      onSwiper={setSwiper}
      onSlideChange={e => HandleCardAtivo(e.activeIndex)}
    >
      <SwiperSlide><TacaFicha/></SwiperSlide>
      <SwiperSlide><TacaFichaVerso/></SwiperSlide>
    </Swiper>
    <br />
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Button onClick={() => captureAndSaveFicha()}>
        <SaveIcon />
        Salvar Imagem
      </Button>
    </div>
  </div>;
}