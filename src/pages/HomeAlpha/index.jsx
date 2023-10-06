import {TacaDado} from "../../components/TacaDado/index.jsx";
import {SaveSlots} from "../../components/SaveSlots/index.jsx";
import {ArquetipoPainel} from "../../components/ArquetiposPainel/index.jsx";
import {Ficha} from "../../components/Ficha/index.jsx";
import {SalvarSlot} from "../../components/SalvarSlot/index.jsx";
import React from "react";
import {Topo} from "../../components/Topo/index.jsx";
import {MontaFichaAlpha} from "../../components/TacaFicha3DeTAlpha/MontaFicha/index.jsx";

export const HomeAlpha = () => {
  return(
    <>
      <TacaDado />
      <Topo />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '8px'
      }}>
        <MontaFichaAlpha />
      </div>
    </>
  )
}