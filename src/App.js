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
