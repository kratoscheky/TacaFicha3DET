import React, { useState } from "react";
import { useFicha } from "../../context/ficha.context";
import { ContainerAtributos, ContainerFicha, ContainerExtras, DadosPersonagem, Icon, Button, CamposTopo, IconSecundario, AtributoContainer, StatusContainer, SubStatusContainer, SubStatusTexto, PericiasTexto, VantagensTexto, DesvantagensTexto, Detalhes, AlinhamentoInfos, ImageInputContainer, PontosTotais } from "./styles";
import poderIcon from '../../images/poder.svg'
import habilidadeIcon from '../../images/habilidade.svg'
import resistenciaIcon from '../../images/resistencia.svg'
import acaoIcon from '../../images/acao.svg'
import manaIcon from '../../images/mana.svg'
import vidaIcon from '../../images/vida.svg'
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
            <h1>Preview:</h1>
            <ContainerFicha style={{ backgroundImage: `url(${inputValue})` }} id="container-ficha-card">
                <DadosPersonagem>
                    <CamposTopo>
                        <h1>{nome}</h1>
                        <PontosTotais>{pontosTotais}</PontosTotais>
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
                        <StatusContainer>
                            <AtributoContainer>
                                <Icon src={poderIcon} />
                                <p>{atributos.poder}</p>
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
                        <SubStatusContainer>
                            <SubStatusTexto>
                                <IconSecundario src={acaoIcon} />
                                <p>{recursos.pontosDeAcao}</p>
                            </SubStatusTexto>
                            <svg style={{
                                position: 'absolute',
                                top: '-8px',
                                zIndex: '900'
                            }} width="119" height="47" viewBox="0 0 119 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_2_9)">
                                <path d="M0 0H113L99 40H0V0Z" fill="#151515"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_2_9" x="0" y="0" width="119" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="6" dy="7"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_9"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_9" result="shape"/>
                                </filter>
                                </defs>
                            </svg>

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
                                <p>{recursos.pontosDeMana}</p>
                            </SubStatusTexto>
                            <svg style={{
                                position: 'absolute',
                                top: '-8px',
                                zIndex: '900'
                            }} width="119" height="47" viewBox="0 0 119 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_2_9)">
                                <path d="M0 0H113L99 40H0V0Z" fill="#151515"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_2_9" x="0" y="0" width="119" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="6" dy="7"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_9"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_9" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
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
                                <p>{recursos.pontosDeVida}</p>
                            </SubStatusTexto>
                            <svg style={{
                                position: 'absolute',
                                top: '-8px',
                                zIndex: '900'
                            }} width="119" height="47" viewBox="0 0 119 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_2_9)">
                                <path d="M0 0H113L99 40H0V0Z" fill="#151515"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_2_9" x="0" y="0" width="119" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="6" dy="7"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_9"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_9" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
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