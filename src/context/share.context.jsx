import React, { createContext, useContext, useState } from "react";
import { useFicha } from "./ficha.context";
import { Base64 } from 'js-base64';

export const ShareContext = createContext();

export const useShare = () => useContext(ShareContext);

export const ShareProvider = ({ children }) => {
  const [isShareView, setShareView] = useState(false);
  const [modeloDeFicha, setModeloDeFicha] = useState("");

  const {
    atributos,
    setAtributos,
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
    arquetipo,
    setArquetipo,
    extras,
    setExtras,
    foil,
    setFoil
  } = useFicha();

  const copyShareableLinkToClipboard = (_modeloDeFicha) => {
    const shareableLink = generateShareableString(_modeloDeFicha);
    navigator.clipboard.writeText(window.location.origin + "?share=" + shareableLink);
  }

  const generateShareableString = (_modeloDeFicha) => {
    const dataToShare = {
      nome: nome,
      detalhes: detalhes,
      pericias: pericias,
      vantagens: vantagens,
      desvantagens: desvantagens,
      arquetipo: arquetipo,
      pontosTotais: pontosTotais,
      atributos: {
        poder: atributos.poder,
        habilidade: atributos.habilidade,
        resistencia: atributos.resistencia,
      },
      extras: {
        pontosDeAcao: extras.pontosDeAcao,
        pontosDeMana: extras.pontosDeMana,
        pontosDeVida: extras.pontosDeVida,
      },
      foil: foil,
      modeloDeFicha: _modeloDeFicha,
    };

    return Base64.encode(JSON.stringify(dataToShare), true);
  }

  const loadShareableString = (shareableString) => {
    const dataToShare = JSON.parse(Base64.decode(shareableString));
    setNome(dataToShare.nome)
    setDetalhes(dataToShare.detalhes)
    setPericias(dataToShare.pericias)
    setVantagens(dataToShare.vantagens)
    setDesvantagens(dataToShare.desvantagens)
    setArquetipo(dataToShare.arquetipo)
    setAtributos(dataToShare.atributos)
    setExtras(dataToShare.extras)
    setPontosTotais(dataToShare.pontosTotais)
    setFoil(dataToShare.foil ?? false)

    setModeloDeFicha(modeloDeFicha);
    setShareView(true);
  }

  return (
    <ShareContext.Provider
      value={{
        copyShareableLinkToClipboard,
        generateShareableString,
        loadShareableString,
        modeloDeFicha,
        isShareView,
      }}
    >
      {children}
    </ShareContext.Provider>
  );
};
