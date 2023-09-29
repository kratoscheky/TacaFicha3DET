import React, {createContext, useContext, useEffect, useState} from "react";
import {useFicha} from "./ficha.context";
import {useImgur} from "./imgur.context";
import {v4} from "uuid";
import {AddCarta, DeleteCarta} from "../services/carta.service.js";


export const SlotsContext = createContext();

export const useSlots = () => useContext(SlotsContext);

const initialSlots = [];

export const SlotsProvider = ({children}) => {
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
    setExtras,
    foil,
    setFoil,
    anotacoes,
    setAnotacoes
  } = useFicha();

  const {uploadImage} = useImgur();

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

    if(!localStorage.getItem('uuid'))
      localStorage.setItem('uuid', v4())

    let localStorageVar = JSON.parse(localStorage.getItem('slots'));
    if (!localStorageVar)
      localStorageVar = []

    const slot = {
      nome: nome,
      detalhes: detalhes,
      pericias: pericias,
      vantagens: vantagens,
      desvantagens: desvantagens,
      arquetipo: arquetipo,
      pontosTotais: pontosTotais,
      anotacoes,
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
      foil: foil,
    }

    if(_imageUrl?.includes('imgur')){
      try{
        const uuid = localStorage.getItem('uuid');
        let {data} = await AddCarta({
          json: JSON.stringify(slot),
          uuidDoDono: uuid
        })

        slot.uuidDoDono = uuid;
        slot.id = data;
      } catch (e){
        console.error(e.message)
      }
    }

    localStorageVar.push(slot);

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
    setFoil(slot.foil ?? false)
    setAnotacoes(slot.anotacoes ?? '')
  }

  const LoadSlots = () => {
    let localStorageVar = JSON.parse(localStorage.getItem('slots'));
    if (!localStorageVar)
      return

    setSlots(localStorageVar);
  }

  const DeleteSlot = (index) => {
    let localStorageVar = JSON.parse(localStorage.getItem('slots'));
    const uuid = localStorage.getItem('uuid')
    let slotADeletar = localStorageVar[index];

    if(slotADeletar.uuidDoDono === uuid && slotADeletar.id)
      DeleteCarta(slotADeletar.id)

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
