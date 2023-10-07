import {useRef, useEffect} from "react";
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
  InnerContainer,
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
import {useFicha} from "../../../context/ficha.context.jsx";
import {useBrowserContext} from "../../../context/browser.context.jsx";
import {ContadorPericiaVantagemDesvantagem} from "../../../utils/contador.js";

export const FichaTCGMinimalista = (props) => {
  const { disableMovement = false, disableFoilAnimation = false } = props;

  const animatedTimeout = useRef(null);

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
    foil
  } = useFicha();

  const {isFirefox} = useBrowserContext();

  const handleMove = (e) => {
    if (disableMovement) return;

    // normalise touch/mouse
    var pos = [
      e.nativeEvent.offsetX || (e.nativeEvent.touches && e.nativeEvent.touches[0].clientX),
      e.nativeEvent.offsetY || (e.nativeEvent.touches && e.nativeEvent.touches[0].clientY)
    ];

    e.preventDefault();

    var card = e.target;

    // math for mouse position
    var l = pos[0] * 2.5;
    var t = pos[1] * 2.5;
    var h = card.offsetHeight;
    var w = card.offsetWidth;
    var px = Math.abs(Math.floor(100 / w * l)-100);
    var py = Math.abs(Math.floor(100 / h * t)-100);
    var pa = (50-px)+(50-py);

    // math for gradient / background positions
    var lp = (50+(px - 50)/1.5);
    var tp = (50+(py - 50)/1.5);
    var px_spark = (50+(px - 50)/7);
    var py_spark = (50+(py - 50)/7);
    var p_opc = 20+(Math.abs(pa)*1.5);
    var ty = ((tp - 50)/2) * -1;
    var tx = ((lp - 50)/1.5) * .5;

    // css to apply for active card
    var grad_pos = `background-position: ${lp}% ${tp}% !important;`
    var sprk_pos = `background-position: ${px_spark}% ${py_spark}% !important;`
    var opc = `opacity: ${p_opc/100};`
    var tf = `${isFirefox ? 'scale(0.5)' : ''} rotateX(${ty}deg) rotateY(${tx}deg)`

    // need to use a <style> tag for psuedo elements
    var style = `
      .foil:hover:before { ${grad_pos} }  /* gradient */
      .foil:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
    `
  
    // set styles
    card.style.transform = tf;
    document.getElementById("card-foil-hover").innerHTML = style;
    
    card.classList.remove('animated');

    if ( e.type === "touchmove" ) {
      return false; 
    }

    clearTimeout(animatedTimeout.current)
  }

  const handleEnd = (e) => {
    if (disableMovement) return;

    // remove css, apply custom animation on end
    var card = e.target;
    card.style.transform = `${isFirefox ? 'scale(0.5)' : ''}`;
    document.getElementById("card-foil-hover").innerHTML = '';
    animatedTimeout.current = setTimeout(function() {
      card.classList.add('animated');
    },2500);
  };

  useEffect(() => {
    if (disableFoilAnimation)
      clearTimeout(animatedTimeout.current);
  }, [disableFoilAnimation]);

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

  return (
    <Container>
      <InnerContainer>
        <Card
          className={foil ? `foil ${!disableFoilAnimation ? 'animated' : ''}` : ''}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseLeave={handleEnd}
          onTouchEnd={handleEnd}
          style={{ backgroundImage: `url(${imageBlob})` }}
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
                    {ContadorPericiaVantagemDesvantagem(vantagens).map((v) => v.Nome + (v.Total === 1 ? '' :  ` (${v.Total}x)`) + ".").join(" ")}
                  </PDescricaoVantagens>
                </div>
              )}

              {desvantagens.length > 0 && (
                <div>
                  <PDescricaoDesvantagens>
                    {ContadorPericiaVantagemDesvantagem(desvantagens).map((v) => v.Nome + (v.Total === 1 ? '' :  ` (${v.Total}x)`) + ".").join(" ")}
                  </PDescricaoDesvantagens>
                </div>
              )}
            </ContainerVantagensDes>
            <ContainerDescricao>
              <p>{detalhes}</p>
            </ContainerDescricao>
          </ContainerTextos>
        </Card>
      </InnerContainer>
    </Container>
  );
};
