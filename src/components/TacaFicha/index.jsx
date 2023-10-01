import {TacaFicha} from "../Cartas/TacaFichaTCG/index.jsx";
import {TacaFichaVerso} from "../Cartas/TacaFichaVerso/index.jsx";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCards, Navigation} from 'swiper/modules';
import html2canvas from "html2canvas";
import {Button} from "./styles.jsx";
import SaveIcon from "@mui/icons-material/Save";
import {TacaCarta} from "../Cartas/TacaCarta/index.jsx";
import {TacaCola} from "../Cartas/TacaCola/index.jsx";
import {FichaCard} from "../Cartas/FichaCard/index.jsx";
import {FichaTCGMinimalista} from "../Cartas/FichaTCGMinimalista/index.jsx";
import Brightness5Icon from '@mui/icons-material/Brightness5';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import 'swiper/css/navigation';
import {useFicha} from "../../context/ficha.context.jsx";

export function TacaFichaTCG() {
  const [swiper, setSwiper] = useState(null);
  const [actualCard, setActualCard] = useState('tacaficha')
  const {setSalvandoLoading, setImagemGerada, foil, setFoil} = useFicha();

  const captureAndSaveFicha = () => {
    setSalvandoLoading(true);
    const container = document.querySelector(`#${actualCard}`); // Use a classe do ContainerFicha real

    if (container) {
      var originalTransform = container.parentElement.style.transform
      console.log(originalTransform);
      container.parentElement.style.transform = 'translate3d(0px, 0px, 0px)';

      if (foil)
        container.classList.remove('foil');

      html2canvas(container).then((canvas) => {
        // Convertendo o canvas para um URL de imagem

        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const downloadLink = document.createElement("a");
          downloadLink.href = url;
          downloadLink.download = "ficha.png";
          downloadLink.click();
          setSalvandoLoading(false);
          setImagemGerada(url)
        }, 'image/png');
      }).catch(e => {
        alert(`Ocorreu um erro! ${e.message}`)
        setSalvandoLoading(false);
      }).finally(() => {
        container.parentElement.style.transform = originalTransform;
        if (foil)
          container.classList.add('foil');
      });
    }
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
      <SwiperSlide><TacaFicha disableMovement={actualCard != 'tacaficha'} disableFoilAnimation={actualCard != 'tacaficha'} /></SwiperSlide>
      <SwiperSlide><TacaFichaVerso disableMovement={actualCard != 'tacaficha-verso'} disableFoilAnimation={actualCard != 'tacaficha-verso'} /></SwiperSlide>
      <SwiperSlide><TacaCarta disableMovement={actualCard != 'container-ficha-taca-carta'} disableFoilAnimation={actualCard != 'container-ficha-taca-carta'} /></SwiperSlide>
      <SwiperSlide><TacaCola disableMovement={actualCard != 'container-ficha-taca-cola'} disableFoilAnimation={actualCard != 'container-ficha-taca-cola'} /></SwiperSlide>
      <SwiperSlide><FichaTCGMinimalista disableMovement={actualCard != 'container-ficha-tcg-minimalista'} disableFoilAnimation={actualCard != 'container-ficha-tcg-minimalista'} /></SwiperSlide>
      <SwiperSlide><FichaCard disableMovement={actualCard != 'container-ficha-card'} disableFoilAnimation={actualCard != 'container-ficha-card'} /></SwiperSlide>
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