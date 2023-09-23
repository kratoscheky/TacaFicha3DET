import {TacaFicha} from "../index";
import {TacaFichaVerso} from "../TacaFichaVerso";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCards, Navigation} from 'swiper/modules';
import html2canvas from "html2canvas";
import {Button} from "./styles";
import SaveIcon from "@mui/icons-material/Save";
import {TacaCarta} from "../../TacaCarta";
import {TacaCola} from "../../TacaCola";
import {FichaCard} from "../../FichaCard";
import {FichaTCGMinimalista} from "../../FichaTCGMinimalista";
import Brightness5Icon from '@mui/icons-material/Brightness5';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import 'swiper/css/navigation';
import {useFicha} from "../../../context/ficha.context";

export function TacaFichaTCG() {
  const [swiper, setSwiper] = useState(null);
  const [actualCard, setActualCard] = useState('tacaficha')
  const {setSalvandoLoading, setImagemGerada, foil, setFoil} = useFicha();

  const captureAndSaveFicha = () => {
    setSalvandoLoading(true);
    const container = document.querySelector(`#${actualCard}`); // Use a classe do ContainerFicha real

    if (container) {
      html2canvas(container).then((canvas) => {
        // Convertendo o canvas para um URL de imagem
        const imgURL = canvas.toDataURL("image/png");

        // Criando um link para download
        const downloadLink = document.createElement("a");
        downloadLink.setAttribute('download', '')
        downloadLink.href = imgURL;
        downloadLink.download = "ficha.png";
        setImagemGerada(imgURL);
        downloadLink.click();
        setSalvandoLoading(false);
      }).catch(e => {
        alert(`Ocorreu um erro! ${e.message}`)
        setSalvandoLoading(false);
      });
    }

    if (foil)
      container.classList.add('foil');
  };

  const CartasIds = [
    'tacaficha',
    'tacaficha-verso',
    'container-ficha-taca-carta',
    'container-ficha-taca-cola',
    'container-ficha-tcg-minimalista',
    'container-ficha-card',
  ]

  const HandleCardAtivo = (index) => {
    setActualCard(CartasIds[index])
  }

  return <div style={{
    gap: "8px",
    overflow: "auto",
    padding: "20px",
    background: '#6F0062',
    borderRadius: '8px',
  }}>
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <h1 style={{color: '#FFBF22', paddingBottom: '20px'}}>TACA FICHA!</h1>
      <Button onClick={() => setFoil(f => !f)}>
        {
          foil ?
            <BrightnessHighIcon style={{color: '#FFF'}} />
            :
            <Brightness5Icon style={{color: '#FFF'}} />
        }
      </Button>
    </div>
    <Swiper
      navigation
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards, Navigation]}
      className="mySwiper"
      onSwiper={setSwiper}
      onSlideChange={e => HandleCardAtivo(e.activeIndex)}
    >
      <SwiperSlide><TacaFicha/></SwiperSlide>
      <SwiperSlide><TacaFichaVerso/></SwiperSlide>
      <SwiperSlide><TacaCarta/></SwiperSlide>
      <SwiperSlide><TacaCola/></SwiperSlide>
      <SwiperSlide><FichaTCGMinimalista/></SwiperSlide>
      <SwiperSlide><FichaCard/></SwiperSlide>
    </Swiper>
    <br/>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {
        actualCard === 'container-ficha-card' &&
        <>
          <p style={{color: '#FFF'}}>
            Modelo de ficha por{" "}
            <a style={{color: '#FFF'}} href="https://twitter.com/lukeskelington">@lukeskelington</a>
          </p>
          <br/>
        </>
      }
      <Button onClick={() => captureAndSaveFicha()}>
        <SaveIcon/>
        Salvar Imagem
      </Button>
    </div>
  </div>;
}