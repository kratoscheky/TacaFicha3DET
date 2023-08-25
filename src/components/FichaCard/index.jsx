import React from "react";
import { useFicha } from "../../context/ficha.context";
import { ContainerAtributos, ContainerFicha, ContainerExtras, DadosPersonagem, Icon, Button, CamposTopo } from "./styles";
import poderIcon from '../../images/poder.png'
import habilidadeIcon from '../../images/habilidade.png'
import resistenciaIcon from '../../images/resistencia.png'
import acaoIcon from '../../images/acao.png'
import manaIcon from '../../images/mana.png'
import vidaIcon from '../../images/vida.png'
import html2canvas from "html2canvas";


export const FichaCard = () => {
    const {atributos, recursos, nome, detalhes, vantagens, desvantagens, pericias} = useFicha();

    const captureAndSaveFicha = () => {
        const container = document.querySelector('#container-ficha-card'); // Use a classe do ContainerFicha real
    
        if (container) {
            html2canvas(container).then(canvas => {
                // Convertendo o canvas para um URL de imagem
                const imgURL = canvas.toDataURL('image/png');
    
                // Criando um link para download
                const downloadLink = document.createElement('a');
                downloadLink.href = imgURL;
                downloadLink.download = 'ficha.png';
                downloadLink.click();
            });
        }
    };

    return(
        <>
            <h1>Preview:</h1>
            <ContainerFicha id="container-ficha-card">
                <DadosPersonagem>
                    <CamposTopo>
                        <h1>{nome}</h1>
                        <svg width="521" height="61" viewBox="0 0 521 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_2_4)">
                            <path d="M0 0H514.5L497 54H0V0Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_2_4" x="0" y="0" width="520.5" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="6" dy="7"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_4"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_4" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                        <svg width="163" height="79" viewBox="0 0 163 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_2_6)">
                            <path d="M25.5 0H162.5V72H0L25.5 0Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_2_6" x="0" y="0" width="168.5" height="79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="6" dy="7"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_6"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_6" result="shape"/>
                            </filter>
                            </defs>
                        </svg>

                    </CamposTopo>
                    <svg style={{
                        position: 'absolute',
                        top: '74px'
                    }} width="349" height="49" viewBox="0 0 349 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_2_5)">
                        <path d="M0 0H342.5L328 42H0V0Z" fill="#151515"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_2_5" x="0" y="0" width="348.5" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="6" dy="7"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_5"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_5" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                </DadosPersonagem>
                <ContainerAtributos>
                    <div>
                        <div>
                            <Icon src={poderIcon} />
                            <p>{atributos.poder}</p>
                        </div>
                        <div>
                            <Icon src={acaoIcon} />
                            <p>{recursos.pontosDeAcao}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Icon src={habilidadeIcon} />
                            <p>{atributos.habilidade}</p>
                        </div>
                        <div>
                            <Icon src={manaIcon} />
                            <p>{recursos.pontosDeMana}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Icon src={resistenciaIcon} /><p>{atributos.resistencia}</p>
                        </div>
                        <div>
                            <Icon src={vidaIcon} /><p>{recursos.pontosDeVida}</p>
                        </div>
                    </div>
                </ContainerAtributos>
                <ContainerExtras>
                    <div>
                        <b>Perícias</b><p>{pericias}</p>
                    </div>
                    <div>
                        <b>Vantagens</b><p>{vantagens}</p>
                    </div>
                    <div>
                        <b>Desvantagens</b><p>{desvantagens}</p>
                    </div>
                </ContainerExtras>
                <p>{detalhes}</p>
            </ContainerFicha>

            <Button onClick={captureAndSaveFicha}>
                Salvar Ficha
            </Button>
        </>
    )
}