import React from "react";
import { FichaClassica } from "../../components/FichaClassica";
import { FichaCard } from "../../components/FichaCard";
import { Container } from "./styles";
import { FichaMinimalista } from "../../components/FichaMinimalista";
import { FichaTCGMinimalista } from "../../components/FichaTCGMinimalista";
import { TacaCarta } from "../../components/TacaCarta";
import { useShare } from "../../context/share.context";

export const ShareView = () => {
    const { modeloDeFicha } = useShare();

    if (modeloDeFicha == "FichaCard")
        return (
            <Container>
                <FichaCard />
            </Container>
        );
    else if (modeloDeFicha == "FichaTCGMinimalista")
        return (
            <Container>
                <FichaTCGMinimalista />
            </Container>
        );
    else if (modeloDeFicha == "FichaClassica")
        return (
            <Container>
                <FichaClassica />
            </Container>
        );
    else if (modeloDeFicha == "FichaMinimalista")
        return (
            <Container>
                <FichaMinimalista />
            </Container>
        );
    else
        return (
            <Container>
                <TacaCarta />
            </Container>
        );
}