import React, {createContext, useContext, useState} from "react";
import {useFicha} from "./ficha.context";
import {Base64} from 'js-base64';

export const ShareContext = createContext();

export const useShare = () => useContext(ShareContext);

export const ShareProvider = ({children}) => {
  const [isShareView, setShareView] = useState(false);

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
    setFoil,
    imageUrl,
    setImageUrl,
  } = useFicha();

  const copyShareableLinkToClipboard = (slot) => {
    const shareableLink = generateShareableString(slot);
    navigator.clipboard.writeText(window.location.origin + "?share=" + shareableLink);
  }

  const generateShareableString = (slot) => {
    let dataToShare;

    //Se fui passado um slot (cenario padrao), entao montamos o link com esses dados
    if (slot) {
      dataToShare = {
        nome: slot.nome,
        detalhes: slot.detalhes,
        pericias: slot.pericias,
        vantagens: slot.vantagens,
        desvantagens: slot.desvantagens,
        arquetipo: slot.arquetipo,
        pontosTotais: slot.pontosTotais,
        atributos: slot.atributos,
        extras: slot.extras,
        imageUrl: slot.imageUrl,
        foil: slot.foil,
      };
      //Caso nenhum slot tenha sido passado, montamos o link com os dados atuais da ficha (Pode ser util no futuro)
    } else {
      dataToShare = {
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
        imageUrl: imageUrl,
        foil: foil,
      };
    }

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
    setImageUrl(dataToShare.imageUrl)
    setFoil(dataToShare.foil ?? false)

    setShareView(true);
  }

  return (
    <ShareContext.Provider
      value={{
        copyShareableLinkToClipboard,
        generateShareableString,
        loadShareableString,
        isShareView,
      }}
    >
      {children}
    </ShareContext.Provider>
  );
};
