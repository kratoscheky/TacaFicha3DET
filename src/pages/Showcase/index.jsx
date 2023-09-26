import {useEffect, useState} from "react";
import {Comunidade} from "../../services/carta.service.js";
import {TacaFichaShowcase} from "../../components/Cartas/TacaFichaTCG_ShowCase/index.jsx";

export const Showcase = () => {
  const [cartas, setCartas] = useState(null);

  const CarregarCartas = async () => {
    const listaCartas = await Comunidade()
    const cartasFinal = listaCartas.data.map(c => JSON.parse(c.json))

    console.log(cartasFinal)
    setCartas(cartasFinal)
  }

  useEffect(() => {
    CarregarCartas();
  }, []);

  if(!cartas)
    return null

  return (
    <>
      <h1 style={{
        background: '#000',
        padding: '20px',
        width: '100%',
        color: '#FFBF22'
      }}>SHOWCASE DE CRIAÇÕES</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        padding: '20px',
        gap: '18px'
      }}>
        {
          cartas.map(c => <TacaFichaShowcase carta={c} />)
        }
      </div>
    </>
  )
}