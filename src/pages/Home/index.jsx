import {TacaDado} from "../../components/TacaDado/index.jsx";
import {SaveSlots} from "../../components/SaveSlots/index.jsx";
import {ArquetipoPainel} from "../../components/ArquetiposPainel/index.jsx";
import {Ficha} from "../Ficha/index.jsx";
import {SalvarSlot} from "../../components/SalvarSlot/index.jsx";
import React from "react";
import {Topo} from "../../components/Topo/index.jsx";
import { TacaFichaPdf } from "../../components/TacaFichaPdf/index.jsx";

export const Home = () => {
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
        <SaveSlots/>
        <ArquetipoPainel/>
        <Ficha/>
        <SalvarSlot />
        <TacaFichaPdf />
      </div>
    </>
  )
}