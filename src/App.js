import './App.css';
import { Ficha } from './pages/Ficha';
import logo from './images/logo.png'

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px'}}>
      <div style={{width: '100%', backgroundColor: '#000'}}>
        <img style={{height: '50px', paddingLeft: '16px'}} src={logo} />
      </div>
      <div style={{padding: '8px', display: 'flex', flexDirection: 'column', maxWidth: '500px'}}>
        <h1 style={{textTransform: 'uppercase'}}>3DeT tacaficha</h1>
        <p>Este é um site não oficial para auxiliar na criação de personagens no sistema 3DeT Victory.</p>
        <p>Você pode baixar o fastplay demo <a href='https://blog.jamboeditora.com.br/wp-content/uploads/2023/08/3DeT-DEMO-Kit-Introdutorio.pdf'>Aqui</a>.</p>
      </div>
      <Ficha />
    </div>
  );
}

export default App;
