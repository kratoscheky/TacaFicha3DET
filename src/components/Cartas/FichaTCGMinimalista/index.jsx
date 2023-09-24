import React, {useState} from "react";
import {
  ArquetipoBar,
  ArquetipoText,
  AtributosIcones,
  AtributoTexto,
  Borda,
  Card,
  Container,
  ContainerAlinhamentoA,
  ContainerArquetipo,
  ContainerAtributos,
  ContainerBarras,
  ContainerDescricao,
  ContainerITAtributos,
  ContainerTextos,
  ContainerVantagensDes,
  FundoAtributos,
  Icon,
  NomeArquetipoContainer,
  NomePontoTexto,
  Nometexto,
  PDescricaoDesvantagens,
  PDescricaoVantagens,
  Pontotexto,
  RecursosIcones,
  RecursoTexto,
  SubIcon,
  TagsPericias,
  TopoNomePonto,
} from "./styles.jsx";
import ponto from "../../../images/tcgminimalista/bg_niverl.svg";
import name from "../../../images/tcgminimalista/bg_nme.svg";
import arquetipoImage from "../../../images/tcgminimalista/bg_arquetipo.svg";
import poder from "../../../images/tcgminimalista/bg_poder.svg";
import habilidade from "../../../images/tcgminimalista/bg_habilidade.svg";
import resistencia from "../../../images/tcgminimalista/bg_defesa.svg";
import borda from "../../../images/tcgminimalista/borda.svg";
import poderIcon from "../../../images/minimalista/poder.svg";
import habilidadeIcon from "../../../images/minimalista/habilidade.svg";
import resistenciaIcon from "../../../images/minimalista/resistencia.svg";
import acaoIcon from "../../../images/minimalista/acao.svg";
import manaIcon from "../../../images/minimalista/mana.svg";
import vidaIcon from "../../../images/minimalista/vida.svg";
import html2canvas from "html2canvas";
import {useFicha} from "../../../context/ficha.context.jsx";
import {useBrowserContext} from "../../../context/browser.context.jsx";
import throttle from "lodash/throttle";

export const FichaTCGMinimalista = () => {
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
    setSalvandoLoading
  } = useFicha();

  const [rotation, setRotation] = useState({x: 0, y: 0});
  const [gradientDegree, setGradientDegree] = useState(125);

  const {isFirefox} = useBrowserContext();

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
    const container = document.querySelector(
      "#container-ficha-tcg-minimalista"
    ); // Use a classe do ContainerFicha real

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
            backgroundImage: `url(${imageBlob})`,
            transform: `${isFirefox ? 'scale(0.5)' : ''} rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          }}
          gradientDegree={gradientDegree}
          id="container-ficha-tcg-minimalista"
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
            <ContainerArquetipo>
              <ArquetipoBar src={arquetipoImage}/>
              <ArquetipoText>{arquetipo}</ArquetipoText>
            </ContainerArquetipo>
          </ContainerBarras>
          <ContainerAtributos>
            <ContainerITAtributos>
              <FundoAtributos src={poder}/>
              <ContainerAlinhamentoA>
                <AtributosIcones>
                  <Icon src={poderIcon}/>
                  <AtributoTexto>{atributos.poder}</AtributoTexto>
                </AtributosIcones>
                <RecursosIcones>
                  <SubIcon src={acaoIcon}/>
                  <RecursoTexto>{recursosFinal.pontosDeAcao}</RecursoTexto>
                </RecursosIcones>
              </ContainerAlinhamentoA>
            </ContainerITAtributos>
            <ContainerITAtributos>
              <FundoAtributos src={habilidade}/>
              <ContainerAlinhamentoA>
                <AtributosIcones>
                  <Icon src={habilidadeIcon}/>
                  <AtributoTexto>{atributos.habilidade}</AtributoTexto>
                </AtributosIcones>
                <RecursosIcones>
                  <SubIcon src={manaIcon}/>
                  <RecursoTexto>{recursosFinal.pontosDeMana}</RecursoTexto>
                </RecursosIcones>
              </ContainerAlinhamentoA>
            </ContainerITAtributos>
            <ContainerITAtributos>
              <FundoAtributos src={resistencia}/>
              <ContainerAlinhamentoA>
                <AtributosIcones>
                  <Icon src={resistenciaIcon}/>
                  <AtributoTexto>{atributos.resistencia}</AtributoTexto>
                </AtributosIcones>
                <RecursosIcones>
                  <SubIcon src={vidaIcon}/>
                  <RecursoTexto>{recursosFinal.pontosDeVida}</RecursoTexto>
                </RecursosIcones>
              </ContainerAlinhamentoA>
            </ContainerITAtributos>
          </ContainerAtributos>
          <ContainerTextos>
            <ContainerVantagensDes>
              <TagsPericias>
                {pericias.map((p) => (
                  <p
                    style={{
                      backgroundColor: CoresPericias[p.Nome] ?? "#ff0068",
                    }}
                  >
                    {p.Nome}
                  </p>
                ))}
              </TagsPericias>
              {vantagens.length > 0 && (
                <div>
                  <PDescricaoVantagens>
                    {vantagens.map((v) => v.Nome + ".").join(" ")}
                  </PDescricaoVantagens>
                </div>
              )}

              {desvantagens.length > 0 && (
                <div>
                  <PDescricaoDesvantagens>
                    {desvantagens.map((v) => v.Nome + ".").join(" ")}
                  </PDescricaoDesvantagens>
                </div>
              )}
            </ContainerVantagensDes>
            <ContainerDescricao>
              <p>{detalhes}</p>
            </ContainerDescricao>
          </ContainerTextos>
        </Card>
      </div>
    </Container>
  );
};
