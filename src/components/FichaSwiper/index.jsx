import React, { useState } from "react";
import { FichaClassica } from "../../components/FichaClassica";
import { FichaCard } from "../../components/FichaCard";
import { ContainerButtons, ButtonFicha } from "./styles";
import { FichaMinimalista } from "../../components/FichaMinimalista";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from 'swiper/react';
import { FichaTCGMinimalista } from "../../components/FichaTCGMinimalista";
import { TacaCarta } from "../../components/TacaCarta";
import { TacaCola } from "../TacaCola";
import {TacaFicha} from "../TacaFicha";

export const FichaSwiper = () => {
    const [swiper, setSwiper] = useState(null);

    return (
        <>
            <ContainerButtons>
                <ButtonFicha onClick={() => swiper.slideTo(0)}>TacaCarta</ButtonFicha>
                <ButtonFicha onClick={() => swiper.slideTo(1)}>TacaCola</ButtonFicha>
                <ButtonFicha onClick={() => swiper.slideTo(2)}>TCG</ButtonFicha>
                <ButtonFicha onClick={() => swiper.slideTo(3)}>TCG Rounded</ButtonFicha>
                <ButtonFicha onClick={() => swiper.slideTo(4)}>Clássico</ButtonFicha>
                <ButtonFicha onClick={() => swiper.slideTo(5)}>Minimalista</ButtonFicha>
            </ContainerButtons>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={setSwiper}
            >
                <SwiperSlide><TacaFicha /></SwiperSlide>
                <SwiperSlide><TacaCarta /></SwiperSlide>
                <SwiperSlide><TacaCola /></SwiperSlide>
                <SwiperSlide><FichaCard /></SwiperSlide>
                <SwiperSlide><FichaTCGMinimalista /></SwiperSlide>
                <SwiperSlide><FichaClassica /></SwiperSlide>
                <SwiperSlide><FichaMinimalista /></SwiperSlide>
            </Swiper>
        </>
    )
}