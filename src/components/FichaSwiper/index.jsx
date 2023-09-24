import React, {useState} from "react";
import {FichaClassica} from "../../components/FichaClassica";
import {FichaCard} from "../Cartas/FichaCard";
import {Container} from "./styles";
import {FichaMinimalista} from "../../components/FichaMinimalista";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {FichaTCGMinimalista} from "../Cartas/FichaTCGMinimalista";
import {TacaCarta} from "../Cartas/TacaCarta";
import {TacaCola} from "../Cartas/TacaCola";

export const FichaSwiper = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <Container>
      <TacaCarta/>
      <TacaCola/>
      <FichaTCGMinimalista/>
      <FichaCard/>
      <FichaClassica/>
      <FichaMinimalista/>
    </Container>
  )
}