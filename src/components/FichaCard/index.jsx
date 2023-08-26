import React, { useState } from "react";
import { useFicha } from "../../context/ficha.context";
import { ContainerAtributos, ContainerFicha, ContainerExtras, DadosPersonagem, Icon, Button, CamposTopo, IconSecundario, AtributoContainer, StatusContainer, SubStatusContainer, SubStatusTexto, PericiasTexto, VantagensTexto, DesvantagensTexto, Detalhes, AlinhamentoInfos, ImageInputContainer, PontosTotais } from "./styles";
import poderIcon from '../../images/tcg/poder.svg'
import habilidadeIcon from '../../images/tcg/habilidade.svg'
import resistenciaIcon from '../../images/tcg/resistencia.svg'
import acaoIcon from '../../images/tcg/acao.svg'
import manaIcon from '../../images/tcg/mana.svg'
import vidaIcon from '../../images/tcg/vida.svg'
import topoImage from '../../images/tcg/topo.svg'
import pontoBar from '../../images/tcg/ponto.svg'
import bottomBar from '../../images/tcg/bottombar.svg'
import cardrosa from '../../images/tcg/cardrosa.svg'
import barrinhapreta from '../../images/tcg/barrinhapreta.svg'
import html2canvas from "html2canvas";


export const FichaCard = () => {
    const {atributos, recursos, nome, detalhes, vantagens, desvantagens, pericias, pontosTotais} = useFicha();

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(URL.createObjectURL(event.target.files[0]));
    };

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
        <div style={{marginTop: '16px'}}>
            <h1>Preview:</h1><p style={{color: '#d11ce0'}}>BETA</p>
            <ContainerFicha style={{ backgroundImage: `url(${inputValue})` }} id="container-ficha-card">
                <DadosPersonagem>
                    <CamposTopo>
                        <h1>{nome}</h1>
                        <PontosTotais>{pontosTotais}</PontosTotais>
                        <img src={topoImage} />
                        <img src={pontoBar} />
                    </CamposTopo>
                    <img src={bottomBar} style={{
                        position: 'absolute',
                        top: '84px'
                    }} />
                </DadosPersonagem>
                <ContainerAtributos>
                    <div>
                        <StatusContainer>
                            <AtributoContainer>
                                <Icon src={poderIcon} />
                                <p>{atributos.poder}</p>
                            </AtributoContainer>
                            <img src={cardrosa} />
                        </StatusContainer>
                        <SubStatusContainer>
                            <SubStatusTexto>
                                <IconSecundario src={acaoIcon} />
                                <p>{recursos.pontosDeAcao != 0 ? recursos.pontosDeAcao : 1}</p>
                            </SubStatusTexto>
                        </SubStatusContainer>
                    </div>
                    <div>
                        <StatusContainer>
                            <AtributoContainer>
                                <Icon src={habilidadeIcon} />
                                <p>{atributos.habilidade}</p>
                            </AtributoContainer>
                            <svg width="156" height="72" viewBox="0 0 156 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_2_8)">
                                <path d="M0 0H149.5L132 65H0V0Z" fill="#EC42DA"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_2_8" x="0" y="0" width="155.5" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="6" dy="7"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_8"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_8" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </StatusContainer>
                        <StatusContainer>
                            <SubStatusTexto>
                                <IconSecundario src={manaIcon} />
                                <p>{recursos.pontosDeMana != 0 ? recursos.pontosDeMana : 1}</p>
                            </SubStatusTexto>
                        </StatusContainer>
                    </div>
                    <div>
                        <StatusContainer>
                            <AtributoContainer>
                                <Icon src={resistenciaIcon} />
                                <p>{atributos.resistencia}</p>
                            </AtributoContainer>
                            <svg width="156" height="72" viewBox="0 0 156 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_2_8)">
                                <path d="M0 0H149.5L132 65H0V0Z" fill="#EC42DA"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_2_8" x="0" y="0" width="155.5" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="6" dy="7"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_8"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_8" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </StatusContainer>
                        <StatusContainer>
                            <SubStatusTexto>
                                <IconSecundario src={vidaIcon} />
                                <p>{recursos.pontosDeVida != 0 ? recursos.pontosDeVida : 1}</p>
                            </SubStatusTexto>
                        </StatusContainer>
                    </div>
                </ContainerAtributos>
                <AlinhamentoInfos>
                    <ContainerExtras>
                        <PericiasTexto>
                            <b>{pericias}</b>
                        </PericiasTexto>
                        <VantagensTexto>
                            <p>{vantagens}</p>
                        </VantagensTexto>
                        <DesvantagensTexto>
                            <p>{desvantagens}</p>
                        </DesvantagensTexto>
                    </ContainerExtras>
                    <Detalhes>
                        <p>{detalhes}</p>
                    </Detalhes>
                </AlinhamentoInfos>
            </ContainerFicha>

            <ImageInputContainer>
                <label>Enviar Imagem Customizada:</label>
                <input
                    type="file"
                    onChange={handleInputChange}
                />
            </ImageInputContainer>

            <Button onClick={captureAndSaveFicha}>
                Salvar Ficha
            </Button>
        </div>
    )
}