import React, { useRef, useState } from "react";
import { MontaFicha } from "../../components/MontaFicha";
import { FichaClassica } from "../../components/FichaClassica";
import { FichaCard } from "../../components/FichaCard";
import { Container, ContainerFichas, ImageInputContainer, ButtonUpload, Slide, ContainerButtons, ButtonFicha } from "./styles";
import { useFicha } from "../../context/ficha.context";
import { FichaMinimalista } from "../../components/FichaMinimalista";
import BackupIcon from '@mui/icons-material/Backup';
import dadinho from '../../images/dadinhos.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from 'swiper/react';
import { FichaTCGMinimalista } from "../../components/FichaTCGMinimalista";

export const Ficha = () => {
    const {handleInputChange} = useFicha();
    const [swiper, setSwiper] = useState(null);

    const hiddenFileInput = useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const SeparadorDadinho = () => <img src={dadinho} style={{width: '100%'}} alt={"Dados"} />;

    return (
        <>
            <MontaFicha />
            <SeparadorDadinho />
            <Container>
                <h1 style={{color: '#D11CE0'}}>Fichas:</h1>
                <p>Arraste para o lado para ver outras fichas!</p>
                <ContainerButtons>
                    <ButtonFicha onClick={() => swiper.slideTo(0)}>Clássico</ButtonFicha>
                    <ButtonFicha onClick={() => swiper.slideTo(1)}>TCG</ButtonFicha>
                    <ButtonFicha onClick={() => swiper.slideTo(2)}>Minimalista</ButtonFicha>
                </ContainerButtons>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSwiper={setSwiper}
                >
                    <SwiperSlide><FichaClassica /></SwiperSlide>
                    <SwiperSlide><FichaTCGMinimalista /></SwiperSlide>
                    <SwiperSlide><FichaCard /></SwiperSlide>
                    <SwiperSlide><FichaMinimalista /></SwiperSlide>
                </Swiper>
                <ImageInputContainer>
                    <label>Enviar Imagem Customizada:</label>
                    <ButtonUpload onClick={handleClick}>
                        <BackupIcon />
                        Enviar Uma Imagem
                    </ButtonUpload>
                    <input
                        type="file"
                        onChange={handleInputChange}
                        style={{
                            display: 'none'
                        }}
                        ref={hiddenFileInput}
                    />
                 </ImageInputContainer>
            </Container>
        </>
    )
}