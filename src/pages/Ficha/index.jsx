import React, { useRef } from "react";
import { MontaFicha } from "../../components/MontaFicha";
import { Container, ImageInputContainer, ButtonUpload } from "./styles";
import { useFicha } from "../../context/ficha.context";
import BackupIcon from '@mui/icons-material/Backup';
import dadinho from '../../images/dadinhos.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CropComponent } from "../../components/CropComponent/indes";
import { FichaSwiper } from "../../components/FichaSwiper";

export const Ficha = () => {
    const {handleFileChange, imageBlob} = useFicha();

    const hiddenFileInput = useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const SeparadorDadinho = () => <img src={dadinho} style={{width: '100%', maxWidth: '500px'}} alt={"Dados"} />;

    return (
        <>
            <MontaFicha />
            <SeparadorDadinho />
            <Container>
                <h1 style={{color: '#6F0062'}}>Fichas:</h1>
                <p>Arraste para o lado para ver outras fichas!</p>
                <FichaSwiper />
                <ImageInputContainer>
                    <label>Enviar Imagem Customizada:</label>
                    <ButtonUpload onClick={handleClick}>
                        <BackupIcon />
                        Enviar Uma Imagem
                    </ButtonUpload>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        style={{
                            display: 'none'
                        }}
                        ref={hiddenFileInput}
                        data-test-id="imagem-customizada"
                    />
                    {imageBlob && <CropComponent />}
                 </ImageInputContainer>
            </Container>
        </>
    )
}