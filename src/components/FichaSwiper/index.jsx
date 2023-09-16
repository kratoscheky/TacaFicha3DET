import React, {useState} from "react";
import {FichaClassica} from "../../components/FichaClassica";
import {FichaCard} from "../../components/FichaCard";
import {Container} from "./styles";
import {FichaMinimalista} from "../../components/FichaMinimalista";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {FichaTCGMinimalista} from "../../components/FichaTCGMinimalista";
import {TacaCarta} from "../../components/TacaCarta";
import {TacaCola} from "../TacaCola";

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