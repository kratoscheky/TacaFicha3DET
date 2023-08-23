import logo from './logo.svg';
import './App.css';
import { Ficha } from './pages/Ficha';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Ficha />
    </div>
  );
}

export default App;
