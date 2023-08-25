import { display } from "@mui/system";
import "./App.css";
import { Topo } from "./components/Topo";
import { Ficha } from "./pages/Ficha";
import { ContainerPage } from "./styles";

function App() {
  return (
    <>
      <ContainerPage>
        <Topo />
        <Ficha />
      </ContainerPage>
      <div
        style={{
          background: "#000",
          width: "100%",
          height: "75px",
        }}
      >
        <p style={{
          color: '#FFF',
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
        }}>Este site foi criado por <a style={{color: '#D11CE0'}} href='https://twitter.com/Kratoscheky'>@kratoscheky</a> com colaboração de <a style={{color: '#D11CE0'}} href='https://twitter.com/OvelhaDev'>@OvelhaDev</a></p>
      </div>
    </>
  );
}

export default App;
