import React, { useRef } from "react";
import { MontaFicha } from "../../components/MontaFicha";
import { FichaClassica } from "../../components/FichaClassica";
import { FichaCard } from "../../components/FichaCard";
import { Container, ContainerFichas, ImageInputContainer, ButtonUpload } from "./styles";
import { useFicha } from "../../context/ficha.context";
import { FichaMinimalista } from "../../components/FichaMinimalista";

export const Ficha = () => {
    const {handleInputChange} = useFicha();

    const hiddenFileInput = useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    return (
        <>
            <MontaFicha />
            <Container>
                <h1 style={{color: '#D11CE0'}}>Fichas:</h1>
                <ContainerFichas>
                    <FichaClassica />
                    <FichaCard />
                    <FichaMinimalista />
                </ContainerFichas>
                <ImageInputContainer>
                    <label>Enviar Imagem Customizada:</label>
                    <ButtonUpload onClick={handleClick}>
                        Enviar Uma Imagem
                    </ButtonUpload>
                    <input
                        type="file"
                        onChange={handleInputChange}
                        style={{
                            display: 'none'
                        }}
                        ref={hiddenFileInput}
                    />
                 </ImageInputContainer>
            </Container>
        </>
    )
}