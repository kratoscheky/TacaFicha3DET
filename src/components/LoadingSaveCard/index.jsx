import Lottie from 'react-lottie';
import animationData from './animations/cardsanimation.json';
import {Container} from "./styles";
import {useFicha} from "../../context/ficha.context";

export const LoadingSaveCard = () => {
  const {salvandoLoading} = useFicha();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  if(!salvandoLoading)
    return null

  return (
    <Container>
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
      />
      <h1>Gerando Imagem...</h1>
    </Container>
  );
}