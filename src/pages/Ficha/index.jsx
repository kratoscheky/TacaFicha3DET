import React from "react";
import { MontaFicha } from "../../components/MontaFicha";
import { FichaClassica } from "../../components/FichaClassica";
import { FichaCard } from "../../components/FichaCard";
import { Container, ContainerFichas, ImageInputContainer } from "./styles";
import { useFicha } from "../../context/ficha.context";
import { FichaMinimalista } from "../../components/FichaMinimalista";

export const Ficha = () => {
    const {handleInputChange} = useFicha();

    return (
        <>
            <MontaFicha />
            <Container>
                <h1>Fichas:</h1>
                <ContainerFichas>
                    <FichaClassica />
                    <FichaCard />
                    <FichaMinimalista />
                </ContainerFichas>
                <ImageInputContainer>
                    <label>Enviar Imagem Customizada:</label>
                    <input
                        type="file"
                        onChange={handleInputChange}
                    />
                 </ImageInputContainer>
            </Container>
        </>
    )
}