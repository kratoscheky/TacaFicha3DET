import {LoadingSaveCard} from "../../components/LoadingSaveCard/index.jsx";
import {BarraSuperior, Topo} from "../../components/Topo/index.jsx";
import {ShareView} from "../ShareView/index.jsx";
import React from "react";
import {Analytics} from "@vercel/analytics/react";
import {Footer} from "../../components/Footer/index.jsx";
import {Outlet} from "react-router-dom";

export const Layoult = () => {
  return (
    <>
      <BarraSuperior />
      <Analytics />
      <LoadingSaveCard />
      <Outlet />
      <Footer />
    </>
  )
}