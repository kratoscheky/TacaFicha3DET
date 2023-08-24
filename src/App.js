import './App.css';
import { Topo } from './components/Topo';
import { Ficha } from './pages/Ficha';
import { ContainerPage } from './styles';

function App() {
  return (
    <ContainerPage>
      <Topo />
      <Ficha />
    </ContainerPage>
  );
}

export default App;
