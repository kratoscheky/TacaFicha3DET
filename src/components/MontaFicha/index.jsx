import React, { useEffect, useState } from "react";
import { useFicha } from "../../context/ficha.context";

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
            return;
        }

        
        setPontosTotais(pontosTotaisTemp - value)
        setAtributos({...atributos, [key]: value})
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', maxWidth: '500px', padding: '8px'}}>
            <h1>Dados basicos</h1>
            <label>Nome:</label>
            <input value={nome} onChange={e => setNome(e.target.value)}></input>
            <label>Descrição</label>
            <textarea value={detalhes} onChange={e => setDetalhes(e.target.value)}></textarea>
            <h1>Atributos</h1>
            <label>Poder</label>
            <input value={atributos.poder} onChange={v => HandleAtributos(v.target.value, 'poder')}></input>
            <label>Habilidade</label>
            <input value={atributos.habilidade} onChange={v => HandleAtributos(v.target.value, 'habilidade')}></input>
            <label>Resistência</label>
            <input value={atributos.resistencia} onChange={v => HandleAtributos(v.target.value, 'resistencia')}></input>
            <label>Perícias</label>
            <textarea value={periciais} onChange={v => setPericias(v.target.value)}></textarea>
            <label>Vantagens</label>
            <textarea value={vantagens} onChange={v => setVantagens(v.target.value)}></textarea>
            <label>Desvantagens</label>
            <textarea value={desvantagens} onChange={v => setDesvantagens(v.target.value)}></textarea>
        </div>
    )
}