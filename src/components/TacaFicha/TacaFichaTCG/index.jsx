import {TacaFicha} from "../index";
import {TacaFichaVerso} from "../TacaFichaVerso";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';

import { EffectCards } from 'swiper/modules';

export function TacaFichaTCG() {
  const [swiper, setSwiper] = useState(null);

  return <div style={{
    display: "flex",
    gap: "8px",
    overflow: "auto",
    padding: "20px"
  }}>
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      onSwiper={setSwiper}
    >
      <SwiperSlide><TacaFicha/></SwiperSlide>
      <SwiperSlide><TacaFichaVerso/></SwiperSlide>
    </Swiper>
  </div>;
}