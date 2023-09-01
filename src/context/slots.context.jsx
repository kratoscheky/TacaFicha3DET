import React, { createContext, useContext, useEffect, useState } from "react";
import { useFicha } from "./ficha.context";
import { useImgur } from "./imgur.context";


export const SlotsContext = createContext();

export const useSlots = () => useContext(SlotsContext);

const initialSlots = [];

export const SlotsProvider = ({ children }) => {
  const [slots, setSlots] = useState(initialSlots);

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
    selectedFile,
    setSelectedFile,
    imageUrl,
    setImageUrl,
    extras,
    setExtras
  } = useFicha();

  const { uploadImage } = useImgur();

  const SaveSlot = async () => {
    let _imageUrl = imageUrl;

    //Se tem arquivo de imagem no input, entao faremos o upload
    if (selectedFile) {
      try {
        if (selectedFile) {
          _imageUrl = await uploadImage(selectedFile);
          console.log("Uploaded image URL:", _imageUrl);
          setSelectedFile(null);
          setImageUrl(_imageUrl);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    let localStorageVar = JSON.parse(localStorage.getItem('slots'));
    if(!localStorageVar)
      localStorageVar = []

      localStorageVar.push({
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
      imageUrl: _imageUrl,
    })

    localStorage.setItem('slots', JSON.stringify(localStorageVar))
    LoadSlots()
  }

  const LoadSlot = (slot) => {
    setNome(slot.nome)
    setDetalhes(slot.detalhes)
    setPericias(slot.pericias)
    setVantagens(slot.vantagens)
    setDesvantagens(slot.desvantagens)
    setArquetipo(slot.arquetipo)
    setAtributos(slot.atributos)
    setExtras(slot.extras)
    setPontosTotais(slot.pontosTotais)
    setImageUrl(slot.imageUrl)
  }

  const LoadSlots = () => {
    let localStorageVar = JSON.parse(localStorage.getItem('slots'));
    if(!localStorageVar)
      return

    setSlots(localStorageVar);
  }

  const DeleteSlot = (index) => {
    let localStorageVar = JSON.parse(localStorage.getItem('slots'));
    localStorageVar.splice(index, 1)
    localStorage.setItem('slots', JSON.stringify(localStorageVar))
    LoadSlots();
  }

  useEffect(() => {
    LoadSlots();
  }, [])

  return (
    <SlotsContext.Provider
      value={{
        slots,
        setSlots,
        SaveSlot,
        LoadSlot,
        DeleteSlot
      }}
    >
      {children}
    </SlotsContext.Provider>
  );
};
