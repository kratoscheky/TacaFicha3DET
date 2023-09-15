import React, {useRef, useState} from "react";
import { MontaFicha } from "../../components/MontaFicha";
import {
  Container,
  ImageInputContainer,
  ButtonUpload,
  ButtonCut,
  ContainerButtons,
  CropContainer,
  ContainerLegado
} from "./styles";
import { useFicha } from "../../context/ficha.context";
import BackupIcon from '@mui/icons-material/Backup';
import dadinho from '../../images/dadinhos.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CropComponent } from "../../components/CropComponent";
import { FichaSwiper } from "../../components/FichaSwiper";
import {TacaFichaTCG} from "../../components/TacaFicha/TacaFichaTCG";
import ContentCutIcon from '@mui/icons-material/ContentCut';
import * as PropTypes from "prop-types";

export const Ficha = () => {
    const {handleFileChange} = useFicha();

    const hiddenFileInput = useRef(null);
    const [viewCrop, setViewCrop] = useState(false)

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const SeparadorDadinho = () => <img src={dadinho} style={{width: '100%', maxWidth: '500px'}} alt={"Dados"} />;

    return (
        <>
          <MontaFicha/>
          <SeparadorDadinho/>
          <Container>
            <TacaFichaTCG/>
            <br />
            <ContainerLegado>
              <h1 style={{color: '#FFBF22'}}>FICHAS LEGADO:</h1>
              <p style={{color: '#FFF'}}>Arraste para o lado para ver outras fichas!</p>
              <FichaSwiper/>
            </ContainerLegado>
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