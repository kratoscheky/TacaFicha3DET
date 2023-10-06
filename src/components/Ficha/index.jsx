import React, {useRef, useState} from "react";
import {MontaFicha} from "../MontaFicha/index.jsx";
import {ButtonCut, ButtonUpload, Container, ContainerButtons, CropContainer, ImageInputContainer} from "./styles.jsx";
import {useFicha} from "../../context/ficha.context.jsx";
import BackupIcon from '@mui/icons-material/Backup';
import dadinho from '../../images/dadinhos.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {CropComponent} from "../CropComponent/index.jsx";
import {TacaFichaTCG} from "../TacaFicha/index.jsx";
import ContentCutIcon from '@mui/icons-material/ContentCut';

export const Ficha = () => {
  const hiddenFileInput = useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <MontaFicha/>
      <Container>
        <TacaFichaTCG/>
      </Container>
    </>
  )
}

export function ImageComponent() {
  const [viewCrop, setViewCrop] = useState(false)
  const hiddenFileInput = useRef(null);
  const {handleFileChange} = useFicha();
  const handleClick = event => {
    hiddenFileInput.current.click();
    setViewCrop(true);
  };

  return <ImageInputContainer>
    <h1>Imagem</h1>
    <ContainerButtons>
      <ButtonUpload onClick={() => handleClick()}>
        <BackupIcon/>
        Enviar Uma Imagem
      </ButtonUpload>
      <input
        type="file"
        onChange={handleFileChange}
        style={{
          display: "none"
        }}
        ref={hiddenFileInput}
        data-test-id="imagem-customizada"
      />
      <ButtonCut onClick={() => setViewCrop(true)}><ContentCutIcon/></ButtonCut>
    </ContainerButtons>
    {viewCrop &&
      <CropContainer onClick={() => setViewCrop(false)}>
        <CropComponent Fechar={() => setViewCrop(false)}/>
      </CropContainer>
    }
  </ImageInputContainer>;
}