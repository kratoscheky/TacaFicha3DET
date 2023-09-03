import "./App.css";
import { Topo } from "./components/Topo";
import { Ficha } from "./pages/Ficha";
import { ContainerPage } from "./styles";
import { SaveSlots } from "./components/SaveSlots";
import { Analytics } from "@vercel/analytics/react";
import { AvisoTopo } from "./components/AvisoTopo";
import { ArquetipoPainel } from "./components/ArquetiposPainel";

function App() {
  return (
    <>
      <Analytics />
      <Topo />
      <AvisoTopo />
      <ContainerPage>
        <SaveSlots />
        <ArquetipoPainel />
        <Ficha />
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
            style={{ color: "#D11CE0" }}
            href="https://twitter.com/Kratoscheky"
          >
            @kratoscheky
          </a>{" "}
          com colaboração de{" "}
          <a style={{ color: "#D11CE0" }} href="https://twitter.com/OvelhaDev">
            @OvelhaDev
          </a>{" "}
          e{" "}
          <a
            style={{ color: "#D11CE0" }}
            href="https://twitter.com/kpoper_cansada"
          >
            @kpoper_cansada
          </a>
        </p>
        <br />
        <p style={{
          color: '#FFF'
        }}>
          Design feito por
          <a style={{ color: "#D11CE0", paddingLeft: '8px', paddingRight: '8px' }} href="https://www.facebook.com/groups/161485003862799/user/100086200497493/">
            Lungas Neto
          </a>
          e
          <a style={{ color: "#D11CE0", paddingLeft: '8px' }} href="https://twitter.com/Kratoscheky">
            Mauricio Soares
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
