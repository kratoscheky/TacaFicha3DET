import react, { useState, useEffect } from "react";
import { display } from "@mui/system";
import "./App.css";
import { Topo } from "./components/Topo";
import { Ficha } from "./pages/Ficha";
import { ShareView } from "./pages/ShareView";
import { ContainerPage } from "./styles";
import { SaveSlots } from "./components/SaveSlots";
import { FichaTCGMinimalista } from "./components/FichaTCGMinimalista";
import { Analytics } from '@vercel/analytics/react';
import { TacaCarta } from "./components/TacaCarta";
import { useShare } from "./context/share.context";

function App() {
  const [page, setPage] = useState("");

  const { loadShareableString } = useShare();

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
  }, [])

  return (
    <>
      <Analytics />
      <Topo />
      <ContainerPage>
        {page == "MontaFicha" && (
          <>
            <SaveSlots />
            <Ficha />
          </>
        )}
        {page == "ShareView" && (<ShareView />)}
      </ContainerPage>
      <div
          style={{
            background: "#000",
            width: "100%",
            display: 'flex',
            padding: '16px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <p style={{
            color: '#FFF',
            textAlign: 'center'
          }}>Este site foi criado por <a style={{color: '#D11CE0'}} href='https://twitter.com/Kratoscheky'>@kratoscheky</a> com colaboração de <a style={{color: '#D11CE0'}} href='https://twitter.com/OvelhaDev'>@OvelhaDev</a> e <a style={{color: '#D11CE0'}} href='https://twitter.com/kpoper_cansada'>@kpoper_cansada</a></p>
      </div>
    </>
  );
}

export default App;
