import React, {useState} from "react";
import {
  AtributoTexto,
  Borda,
  Card,
  Container,
  ContainerAtributos,
  ContainerBarras,
  ContainerRecursos,
  ContainerRecursosTabs,
  ContainerTextos,
  ContainerVantagensDes,
  Icon,
  NomeArquetipoContainer,
  NomePontoTexto,
  Nometexto,
  Pontotexto,
  RecursoTexto,
  SubIcon,
  TagRecursoAcao,
  TagRecursoMana,
  TagRecursoVida,
  TopoNomePonto,
} from "./styles";
import ponto from "../../images/tcgminimalista/bg_niverl.svg";
import name from "../../images/tcgminimalista/bg_nme.svg";
import borda from "../../images/tcgminimalista/borda.svg";
import poderIcon from "../../images/minimalista/poder.svg";
import habilidadeIcon from "../../images/minimalista/habilidade.svg";
import resistenciaIcon from "../../images/minimalista/resistencia.svg";
import acaoIcon from "../../images/minimalista/acao.svg";
import manaIcon from "../../images/minimalista/mana.svg";
import vidaIcon from "../../images/minimalista/vida.svg";
import html2canvas from "html2canvas";
import {useFicha} from "../../context/ficha.context";
import tresdettag from "../../images/tcg/3dettag.svg";
import throttle from 'lodash/throttle';
import {useBrowserContext} from "../../context/browser.context";
import {useShare} from "../../context/share.context";

export const TacaCola = () => {
  const [rotation, setRotation] = useState({x: 0, y: 0});
  const [gradientDegree, setGradientDegree] = useState(125);

  const {isFirefox} = useBrowserContext();

  const {
    atributos,
    nome,
    detalhes,
    vantagens,
    desvantagens,
    pericias,
    pontosTotais,
    arquetipo,
    imageBlob,
    recursosFinal,
    foil,
    setFoil,
    anotacoes,
    setSalvandoLoading
  } = useFicha();

  const {isShareView} = useShare();

  const CoresPericias = {
    Animais: "#A6CEE3",
    Arte: "#1F78B4",
    Influência: "#B2DF8A",
    Esporte: "#33A02C",
    Luta: "#FB9A99",
    Manha: "#E31A1C",
    Máquinas: "#FDBF6F",
    Medicina: "#FF7F00",
    Mística: "#CAB2D6",
    Percepção: "#6A3D9A",
    Saber: "#F2C000",
    Sustento: "#B15928",
  };

  const captureAndSaveFicha = () => {
    setSalvandoLoading(true)
    const container = document.querySelector("#container-ficha-taca-cola"); // Use a classe do ContainerFicha real

    if (foil)
      container.classList.remove('foil');

    if (container) {
      html2canvas(container).then((canvas) => {
        // Convertendo o canvas para um URL de imagem
        const imgURL = canvas.toDataURL("image/png");

        // Criando um link para download
        const downloadLink = document.createElement("a");
        downloadLink.href = imgURL;
        downloadLink.download = "ficha.png";
        downloadLink.click();
        setSalvandoLoading(false)
      }).catch(e => {
        alert(`Ocorreu um erro! ${e.message}`)
        setSalvandoLoading(false);
      });
    }

    if (foil)
      container.classList.add('foil');
  };

  const handleMouseMove = throttle((e) => {
    const posX = e.nativeEvent.offsetX || (e.nativeEvent.touches && e.nativeEvent.touches[0].clientX);
    const posY = e.nativeEvent.offsetY || (e.nativeEvent.touches && e.nativeEvent.touches[0].clientY);
    const x = Math.abs(Math.floor(100 / e.target.offsetWidth * posX) - 100);
    const y = Math.abs(Math.floor(100 / e.target.offsetHeight * posY) - 100);

    const backgroundX = 50 + (x - 50) / 1.5;
    const backgroundY = 50 + (y - 50) / 1.5;

    const ty = ((backgroundY - 50) / 2) * -1;
    const tx = ((backgroundX - 50) / 1.5) * 0.5;
    setRotation({x: ty, y: tx});

    const _gradientDegree = 20 + Math.abs((50 - x) + (50 - y)) * 1.5;
    setGradientDegree(_gradientDegree);
  }, 100);

  const handleMouseLeave = () => {
    setRotation({x: 0, y: 0});
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          className={foil ? "foil" : ""}
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchEnd={handleMouseLeave}
          style={{
            backgroundImage: `url(${imageBlob ??
            "https://site.jamboeditora.com.br/wp-content/uploads/2023/07/3DeT-abertura-mobile.png"})`,
            transform: `${isFirefox ? 'scale(0.5)' : ''} rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          }}
          gradientDegree={gradientDegree}
          id="container-ficha-taca-cola"
        >
          <Borda src={borda}/>
          <ContainerBarras>
            <TopoNomePonto>
              <NomeArquetipoContainer>
                <img alt="Nome" src={name}/>
                <img alt="Ponto" src={ponto}/>
              </NomeArquetipoContainer>
              <NomePontoTexto>
                <Nometexto>{nome}</Nometexto>
                <Pontotexto>{pontosTotais}</Pontotexto>
              </NomePontoTexto>
            </TopoNomePonto>
          </ContainerBarras>
          <ContainerAtributos>

          </ContainerAtributos>
          <ContainerTextos>
            <ContainerVantagensDes>
              <div dangerouslySetInnerHTML={{__html: anotacoes}}/>
            </ContainerVantagensDes>
          </ContainerTextos>
          <ContainerRecursos>
            <ContainerRecursosTabs>
              <TagRecursoAcao>
                <div>
                  <Icon src={poderIcon}/>
                  <AtributoTexto>{atributos.poder}</AtributoTexto>
                </div>
                <div>
                  <SubIcon src={acaoIcon}/>
                  <RecursoTexto>{recursosFinal.pontosDeAcao}</RecursoTexto>
                </div>
              </TagRecursoAcao>
              <TagRecursoMana>
                <div>
                  <Icon src={habilidadeIcon}/>
                  <AtributoTexto>{atributos.habilidade}</AtributoTexto>
                </div>
                <div>
                  <SubIcon src={manaIcon}/>
                  <RecursoTexto>{recursosFinal.pontosDeMana}</RecursoTexto>
                </div>
              </TagRecursoMana>
              <TagRecursoVida>
                <div>
                  <Icon src={resistenciaIcon}/>
                  <AtributoTexto>{atributos.resistencia}</AtributoTexto>
                </div>
                <div>
                  <SubIcon src={vidaIcon}/>
                  <RecursoTexto>{recursosFinal.pontosDeVida}</RecursoTexto>
                </div>
              </TagRecursoVida>
            </ContainerRecursosTabs>
            <img alt="Três dê e tê tag" src={tresdettag}/>
          </ContainerRecursos>
        </Card>
      </div>
    </Container>
  );
};
