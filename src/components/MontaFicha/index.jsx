import React, { useEffect, useState } from "react";
import { useFicha } from "../../context/ficha.context";
import { ContainerMontaFicha } from "./styles";

export const MontaFicha = () => {

    const {setAtributos, atributos, pontosTotais, setPontosTotais, detalhes, setDetalhes, setNome, nome, vantagens, setVantagens,  desvantagens, setDesvantagens, periciais, setPericias} = useFicha();

    const [errorMessage, setErrorMessage] = useState('');

    const HandleAtributos = (value, key) => {
        console.log(value, key, atributos, pontosTotais)

        let pontosAtuais = atributos[key];
        let pontosTotaisTemp = pontosTotais + pontosAtuais;

        if(pontosTotaisTemp <= 0){
            setErrorMessage(`${key} Excede os seus pontos restantes`)
            console.error(`${key} Excede os seus pontos restantes`)
            // return;
        }

        
        setPontosTotais(pontosTotaisTemp - value)
        setAtributos({...atributos, [key]: value})
    }

    return (
        <ContainerMontaFicha>
            <h1>Dados Basicos</h1>
            <div>
                <label>Nome:</label>
                <input value={nome} onChange={e => setNome(e.target.value)}></input>
            </div>
            <div>
                <label>Descrição:</label>
                <textarea value={detalhes} onChange={e => setDetalhes(e.target.value)}></textarea>
            </div>
            <h1>Atributos</h1>
            <div>
                <label>Poder:</label>
                <input value={atributos.poder} onChange={v => HandleAtributos(v.target.value, 'poder')}></input>
            </div>
            <div>
                <label>Habilidade:</label>
                <input value={atributos.habilidade} onChange={v => HandleAtributos(v.target.value, 'habilidade')}></input>
            </div>
            <div>
                <label>Resistência:</label>
                <input value={atributos.resistencia} onChange={v => HandleAtributos(v.target.value, 'resistencia')}></input>
            </div>
            <h1>Personalidade</h1>
            <div>
                <label>Perícias:</label>
                <textarea value={periciais} onChange={v => setPericias(v.target.value)}></textarea>
            </div>
            <div>
                <label>Vantagens:</label>
                <textarea value={vantagens} onChange={v => setVantagens(v.target.value)}></textarea>
            </div>
            <div>
                <label>Desvantagens:</label>
                <textarea value={desvantagens} onChange={v => setDesvantagens(v.target.value)}></textarea>
            </div>
        </ContainerMontaFicha>
    )
}