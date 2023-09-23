import Lottie from 'react-lottie';
import animationData from './animations/cardsanimation.json';
import {Container} from "./styles";
import {useFicha} from "../../context/ficha.context";
import {Button} from "../../pages/Ficha/styles";

export const LoadingSaveCard = () => {
  const {salvandoLoading, setImagemGerada, imagem} = useFicha();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  // if(imagem)
  //   return (
  //     <>
  //       <Container onClick={() => setImagemGerada(null)}>
  //         <a href={imagem} download><Button>Download</Button></a>
  //       </Container>
  //     </>
  //   )

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