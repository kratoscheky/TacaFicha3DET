import React, {useEffect} from "react";
import {FichaSwiper} from "../../components/FichaSwiper";
import {Container} from "./styles";
import {useShare} from "../../context/share.context.jsx";
import {TacaFichaTCG} from "../../components/TacaFicha/index.jsx";
import {useParams} from "react-router-dom";
import {GetCarta} from "../../services/carta.service.js";

export const ShareView = () => {
  const {loadShareableString, getDaNuvem} = useShare();
  const params = useParams();

  useEffect(() => {
    if(params.id){
      getDaNuvem(params.id)
    }
    else{
      //Checa se o link de compartilhamento foi passado via URL
      const urlSearchParams = new URLSearchParams(window.location.search);
      const shareableData = urlSearchParams.get("share");

      if (shareableData) {
        try {
          loadShareableString(shareableData)
        } catch (error) {
          //Redireciona para a homepage sem o link na url
          window.location.href = window.location.origin
        }
      }
    }
  }, []);

  return (
    <Container>
      <TacaFichaTCG/>
    </Container>
  );
}