import "./App.css";
import { Topo } from "./components/Topo";
import { Ficha } from "./pages/Ficha";
import { ContainerPage } from "./styles";
import { SaveSlots } from "./components/SaveSlots";
import { Analytics } from '@vercel/analytics/react';
import { AvisoTopo } from "./components/AvisoTopo";

function App() {
  return (
    <>
      <Analytics />
      <Topo />
      <AvisoTopo />
      <ContainerPage>
        <SaveSlots />
        <Ficha />
      </ContainerPage>
      <div
          style={{
            background: "#000",
            width: "100%",
            display: 'flex',
            padding: '16px',
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
