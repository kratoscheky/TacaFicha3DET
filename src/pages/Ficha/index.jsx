import React from "react";
import { MontaFicha } from "../../components/MontaFicha";
import { FichaClassica } from "../../components/FichaClassica";
import { FichaCard } from "../../components/FichaCard";

export const Ficha = () => {
    return (
        <>
            <MontaFicha />
            <div>
                <FichaClassica />
                <FichaCard />
            </div>
        </>
    )
}