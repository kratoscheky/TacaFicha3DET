import React from "react";
import logo from '../../images/logo.png'
import { DarkModeToggle } from "../DarkModeToggle";
import { ContainerBarraSuperior } from "./styles";

export const Topo = () => {
    return (
        <>
            <ContainerBarraSuperior>
                <img style={{height: '50px', paddingLeft: '8px', paddingTop: '8px'}} src={logo} alt="3DeT TacaFicha"/>
                <DarkModeToggle />
            </ContainerBarraSuperior>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{padding: '8px 8px', display: 'flex', flexDirection: 'column', maxWidth: '500px'}}>
                    <h1 style={{textTransform: 'uppercase'}}>3DeT tacaficha</h1>
                    <br />
                    <p style={{color: 'var(--secondary-text)'}}>Este é um site não oficial para auxiliar na criação de personagens no sistema 3DeT Victory.</p>
                    <br />
                    <p style={{color: 'var(--secondary-text)'}}>Você pode baixar o fastplay demo <a href='https://blog.jamboeditora.com.br/wp-content/uploads/2023/08/3DeT-DEMO-Kit-Introdutorio.pdf' style={{color: '#d11ce0'}}>aqui</a>.</p>
                </div>
            </div>
        </>
    )
}