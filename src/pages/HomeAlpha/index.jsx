import {TacaDado} from "../../components/TacaDado/index.jsx";
import {SaveSlots} from "../../components/SaveSlots/index.jsx";
import {ArquetipoPainel} from "../../components/ArquetiposPainel/index.jsx";
import {Ficha} from "../../components/Ficha/index.jsx";
import {SalvarSlot} from "../../components/SalvarSlot/index.jsx";
import React from "react";
import {Topo} from "../../components/Topo/index.jsx";
import {MontaFichaAlpha} from "../../components/TacaFicha3DeTAlpha/MontaFicha/index.jsx";
import {TacaFichaTCGAlpha} from "../../components/TacaFicha3DeTAlpha/TacaFicha/index.jsx";
import {AvisoTopoAlpha} from "../../components/TacaFicha3DeTAlpha/AvisoTopo/index.jsx";

export const HomeAlpha = () => {
  return(
    <>
      <TacaDado />
        <AvisoTopoAlpha />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '8px'
      }}>
        <MontaFichaAlpha />
          <div style={{
              width: '100%',
              maxWidth: '1200px'
          }}>
              <TacaFichaTCGAlpha />
          </div>
      </div>
    </>
  )
}