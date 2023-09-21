import React, {useEffect, useState} from "react";
import "./App.css";
import {Topo} from "./components/Topo";
import {Ficha} from "./pages/Ficha";
import {ShareView} from "./pages/ShareView";
import {ContainerPage} from "./styles";
import {SaveSlots} from "./components/SaveSlots";
import {Analytics} from "@vercel/analytics/react";
import {AvisoTopo} from "./components/AvisoTopo";
import {ArquetipoPainel} from "./components/ArquetiposPainel";
import {useShare} from "./context/share.context";
import {SalvarSlot} from "./components/SalvarSlot";
import {TacaDado} from "./components/TacaDado";

function App() {
  const [page, setPage] = useState("");

  const {loadShareableString} = useShare();

  useEffect(() => {
    //Checa se o link de compartilhamento foi passado via URL
    const urlSearchParams = new URLSearchParams(window.location.search);
    const shareableData = urlSearchParams.get("share");

    if (shareableData) {
      try {
        loadShareableString(shareableData)
        setPage("ShareView");
      } catch (error) {
        //Redireciona para a homepage sem o link na url
        window.location.href = window.location.origin
      }
    } else {
      setPage("MontaFicha");
    }
  }, [loadShareableString]);

  return (
    <>
      <Analytics/>
      <Topo showSwiper={page !== "ShareView"}/>
      {page !== "ShareView" && (<AvisoTopo/>)}
      <ContainerPage>
        {page === "MontaFicha" && (
          <>
            <TacaDado />
            <SaveSlots/>
            <ArquetipoPainel/>
            <Ficha/>
            <SalvarSlot/>
          </>
        )}
        {page === "ShareView" && (<ShareView/>)}
      </ContainerPage>
      <div
        style={{
          background: "#000",
          width: "100%",
          display: "flex",
          flexDirection: 'column',
          padding: "16px",
          justifyContent: "center",
          alignItems: 'center'
        }}
      >
        <p
          style={{
            color: "#FFF",
            textAlign: "center",
          }}
        >
          Este site foi criado por{" "}
          <a
            style={{color: "#D11CE0"}}
            href="https://twitter.com/Kratoscheky"
          >
            @kratoscheky
          </a>{" "}
          com colaboração de{" "}
          <a style={{color: "#D11CE0"}} href="https://twitter.com/OvelhaDev">
            @OvelhaDev
          </a>{" "}
          e{" "}
          <a
            style={{color: "#D11CE0"}}
            href="https://twitter.com/kpoper_cansada"
          >
            @kpoper_cansada
          </a>
        </p>
        <br/>
        <p style={{
          color: '#FFF'
        }}>
          Design feito por
          <a style={{color: "#D11CE0", paddingLeft: '8px', paddingRight: '8px'}}
             href="https://www.facebook.com/groups/161485003862799/user/100086200497493/">
            Lungas Neto
          </a>
          e
          <a style={{color: "#D11CE0", paddingLeft: '8px'}} href="https://twitter.com/Kratoscheky">
            Mauricio Soares
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
