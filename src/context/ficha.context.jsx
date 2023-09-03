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

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageBlob, setImageBlob] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [pontosTotais, setPontosTotais] = useState(10);

  const [recursosFinal, setRecursosFinal] = useState(initialRecursos);

  useEffect(() => {
    let acaoFinal = atributos.poder === 0 ? 1 : atributos.poder;
    let manaFinal = atributos.habilidade === 0 ? 1 : atributos.habilidade * 5;
    let vidaFinal = atributos.resistencia === 0 ? 1 : atributos.resistencia * 5;

    console.log({
      acaoFinal,
      manaFinal,
      vidaFinal
    })

    let resultadoFinal = {
      pontosDeAcao: acaoFinal + extras.pontosDeAcao,
      pontosDeMana: manaFinal + extras.pontosDeMana,
      pontosDeVida: vidaFinal + extras.pontosDeVida,
    }

    console.log(resultadoFinal)

    setRecursosFinal(resultadoFinal);
  }, [atributos, extras])

  const HandleAtributos = (value, key) => {
    console.log(value, key, atributos, pontosTotais);

    let pontosAtuais = atributos[key];
    let pontosTotaisTemp = pontosTotais + pontosAtuais;

    if (pontosTotaisTemp <= 0) {
      console.error(`${key} Excede os seus pontos restantes`);
      // return;
    }

    // setPontosTotais(pontosTotaisTemp - value);
    setAtributos({ ...atributos, [key]: parseInt(value) });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setImageBlob(URL.createObjectURL(event.target.files[0]));
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

  useEffect(() => {
    fetch(imageUrl ?? "https://site.jamboeditora.com.br/wp-content/uploads/2023/07/3DeT-abertura-mobile.png", {referrer:""})
      .then(response => response.blob())
      .then(blob => {
        setImageBlob(URL.createObjectURL(blob));
    });
  }, [imageUrl]);

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
        imageBlob,
        setImageBlob,
        handleFileChange,
        selectedFile,
        setSelectedFile,
        imageUrl,
        setImageUrl,
        LimparCampos,
        recursosFinal
      }}
    >
      {children}
    </FichaContext.Provider>
  );
};
