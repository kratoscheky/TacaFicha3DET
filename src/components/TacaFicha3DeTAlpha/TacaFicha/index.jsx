import {TacaFicha} from "../Cartas/TacaFichaTCG/index.jsx";
import {TacaFichaVerso} from "../Cartas/TacaFichaVerso/index.jsx";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCards, Navigation} from 'swiper/modules';
import html2canvas from "html2canvas";
import {Button} from "./styles.jsx";
import SaveIcon from "@mui/icons-material/Save";
import Brightness5Icon from '@mui/icons-material/Brightness5';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import 'swiper/css/navigation';
import {useFichaAlpha} from "../../../context/fichaAlpha.context.jsx";

export function TacaFichaTCGAlpha() {
  const [swiper, setSwiper] = useState(null);
  const [actualCard, setActualCard] = useState('tacafichaAlpha')
  const {setSalvandoLoading, setImagemGerada, foil, setFoil} = useFichaAlpha();

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
    'tacafichaAlpha',
    'tacaficha-versoAlpha',
  ]

  const HandleCardAtivo = (index) => {
    setActualCard(CartasIds[index])
  }

  return <div style={{
    gap: "8px",
    overflow: "auto",
    padding: "20px",
    background: '#1f5287',
    borderRadius: '8px',
  }}>
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <h1 style={{color: '#ffffff', paddingBottom: '20px'}}>TACA FICHA!</h1>
      <Button onClick={() => setFoil(f => !f)}>
        {
          foil ?
            <BrightnessHighIcon style={{color: '#1f5186'}} />
            :
            <Brightness5Icon style={{color: '#1f5186'}} />
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
      <SwiperSlide><TacaFicha disableMovement={actualCard != 'tacafichaAlpha'} disableFoilAnimation={actualCard != 'tacafichaAlpha'} /></SwiperSlide>
      {/*<SwiperSlide><TacaFichaVerso disableMovement={actualCard != 'tacaficha-versoAlpha'} disableFoilAnimation={actualCard != 'tacaficha-versoAlpha'} /></SwiperSlide>*/}
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
        <SaveIcon />
        Salvar Imagem
      </Button>
    </div>
  </div>;
}