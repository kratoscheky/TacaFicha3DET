import React, { createContext, useContext, useEffect, useState } from 'react';

export const FichaContext = createContext();

export const useFicha = () => useContext(FichaContext);

const initialAtributos = {
    poder: 0,
    habilidade: 0,
    resistencia: 0
}

const initialRecursos = {
    pontosDeAcao: 0,
    pontosDeMana: 0,
    pontosDeVida: 0
}

export const FichaProvider = ({ children }) => {
  const [atributos, setAtributos] = useState(initialAtributos);
  const [recursos, setRecursos] = useState(initialRecursos);
  const [nome, setNome] = useState("");
  const [detalhes, setDetalhes] = useState("")
  const [pericias, setPericias] = useState("")
  const [vantagens, setVantagens] = useState("")
  const [desvantagens, setDesvantagens] = useState("")

  const [pontosTotais, setPontosTotais] = useState(10);

  useEffect(() => {
    setRecursos({
        pontosDeAcao: atributos.poder,
        pontosDeMana: atributos.habilidade * 5,
        pontosDeVida: atributos.resistencia * 5
    })
  }, [atributos])

  return (
    <FichaContext.Provider value={{ atributos, setAtributos, recursos, setRecursos, pontosTotais, setPontosTotais, nome, setNome, detalhes, setDetalhes, vantagens, setVantagens,  desvantagens, setDesvantagens, pericias, setPericias}}>
      {children}
    </FichaContext.Provider>
  );
};
