import Lottie from 'react-lottie';
import animationData from './animations/cardsanimation.json';
import {Container, ModalCartaGerada} from "./styles";
import {useFicha} from "../../context/ficha.context";
import {isMobile} from "react-device-detect";

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

  if(imagem)
    return (
      <ModalCartaGerada onClick={() => setImagemGerada(null)}>
        <div onClick={e => e.stopPropagation()}>
          <img src={imagem} style={{
            width: '300px',
          }} />
          <br />
          <b>Caso o download da carta não tenha iniciado, {isMobile ? 'toque e segure para salvar manualmente...' : 'Clique com o botão direito para salvar manualmente...'}</b>
        </div>
      </ModalCartaGerada>
    )

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