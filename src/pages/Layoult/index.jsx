import {LoadingSaveCard} from "../../components/LoadingSaveCard/index.jsx";
import {BarraSuperior, Topo} from "../../components/Topo/index.jsx";
import {ShareView} from "../ShareView/index.jsx";
import React from "react";
import {Analytics} from "@vercel/analytics/react";
import {Footer} from "../../components/Footer/index.jsx";

export const Layoult = ({children}) => {
  return (
    <>
      <BarraSuperior />
      <Analytics />
      <LoadingSaveCard />
      {children}
      <Footer />
    </>
  )
}