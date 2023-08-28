import React, { createContext, useContext, useEffect, useState } from "react";

export const FichaContext = createContext();

export const useFicha = () => useContext(FichaContext);

const initialAtributos = {
  poder: 0,
  habilidade: 0,
  resistencia: 0,
};

const initialRecursos = {
  pontosDeAcao: 0,
  pontosDeMana: 0,
  pontosDeVida: 0,
};

const initialExtras = {
  pontosDeAcao: 0,
  pontosDeMana: 0,
  pontosDeVida: 0,
}

export const FichaProvider = ({ children }) => {
  const [atributos, setAtributos] = useState(initialAtributos);
  const [recursos, setRecursos] = useState(initialRecursos);
  const [extras, setExtras] = useState(initialExtras);

  const [nome, setNome] = useState("");
  const [detalhes, setDetalhes] = useState("");
  const [pericias, setPericias] = useState([]);
  const [vantagens, setVantagens] = useState([]);
  const [desvantagens, setDesvantagens] = useState([]);
  const [arquetipo, setArquetipo] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [pontosTotais, setPontosTotais] = useState(10);

  const HandleAtributos = (value, key) => {
    console.log(value, key, atributos, pontosTotais);

    let pontosAtuais = atributos[key];
    let pontosTotaisTemp = pontosTotais + pontosAtuais;

    if (pontosTotaisTemp <= 0) {
      console.error(`${key} Excede os seus pontos restantes`);
      // return;
    }

    // setPontosTotais(pontosTotaisTemp - value);
    setAtributos({ ...atributos, [key]: value });
  };

  const handleInputChange = (event) => {
    setInputValue(URL.createObjectURL(event.target.files[0]));
  };

  const LimparCampos = () => {
    setNome('')
    setDetalhes('')
    setPericias([])
    setVantagens([])
    setDesvantagens([])
    setArquetipo('')
    setAtributos(initialAtributos)
    setExtras(initialExtras)
    setPontosTotais(10)
  }

  useEffect(() => {
    setRecursos({
      pontosDeAcao: atributos.poder,
      pontosDeMana: atributos.habilidade * 5,
      pontosDeVida: atributos.resistencia * 5,
    });
  }, [atributos]);

  return (
    <FichaContext.Provider
      value={{
        atributos,
        setAtributos,
        recursos,
        setRecursos,
        pontosTotais,
        setPontosTotais,
        nome,
        setNome,
        detalhes,
        setDetalhes,
        vantagens,
        setVantagens,
        desvantagens,
        setDesvantagens,
        pericias,
        setPericias,
        HandleAtributos,
        arquetipo,
        setArquetipo,
        extras,
        setExtras,
        inputValue,
        setInputValue,
        handleInputChange,
        LimparCampos
      }}
    >
      {children}
    </FichaContext.Provider>
  );
};
