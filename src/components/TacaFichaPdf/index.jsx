import { CamposDadosBasicos, CantoDireito, CantoEsquerdo, Container, ContainerAnotacoes, ContainerAtributos, ContainerCampoAtributo, ContainerCamposDadosBasicos, ContainerCamposExtras, ContainerColunas, ContainerDadosExp, ContainerExp, ContainerExtrasDireito, ContainerTopo, ExpExpacamento, Frame, LogoTresDeETe, PaddingInterno, TituloCampo } from "./styles"
import frame from '../../images/pdf/frame.png'
import cantoDireito from '../../images/pdf/cantoDireito.png'
import cantoEsquerdo from '../../images/pdf/cantoEsquerdo.png'
import habilidade from '../../images/pdf/habilidade.png'
import poder from '../../images/pdf/poder.png'
import pontosdeacao from '../../images/pdf/pontosdeacao.png'
import pontosdevida from '../../images/pdf/pontosdevida.png'
import resistencia from '../../images/pdf/resistencia.png'
import pontosdemana from '../../images/pdf/pontosdemana.png'
import logo from '../../images/pdf/logo.png'
import xp from '../../images/pdf/xp.png'
import logotresdeete from '../../images/pdf/logotresdeete.png'
import { useFicha } from "../../context/ficha.context"
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf';
import { PDFDocument } from 'pdf-lib';


export const TacaFichaPdf = () => {

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
    anotacoes
  } = useFicha()

  const captureAndSaveFicha = async () => {
    const container = document.querySelector('#tacaficha-pdf');

    if (container) {
      const canvas = await html2canvas(container);

      const imgData = canvas.toDataURL('image/png');

      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage();
      const { width, height } = page.getSize();

      const image = await pdfDoc.embedPng(imgData);
      const scaleFactor = Math.min(width / canvas.width, height / canvas.height);
      const imageWidth = canvas.width * scaleFactor;
      const imageHeight = canvas.height * scaleFactor;

      page.drawImage(image, {
        x: 0,
        y: 0,
        width: imageWidth,
        height: imageHeight,
      });

      const pdfBytes = await pdfDoc.save();

      // Save the PDF
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ficha.pdf';
      link.click();
    }
  };

  return (
    <>
      <button onClick={captureAndSaveFicha}>Salvar</button>
      <Container id="tacaficha-pdf">
        <PaddingInterno>
          <CantoEsquerdo src={cantoEsquerdo} />
          <CantoDireito src={cantoDireito} />
          <ContainerTopo>
            <LogoTresDeETe src={logotresdeete} alt="logo" />
            <h1>Ficha de Personagem</h1>
          </ContainerTopo>
          <ContainerColunas>
            <div>
              <Frame style={{
                backgroundImage: `url(${imageBlob})`
              }}>
                <img src={frame} alt="logo" />
              </Frame>
              <ContainerCamposDadosBasicos>
                <CamposDadosBasicos>
                  <h6>Nome:</h6>
                  <p>{nome}</p>
                </CamposDadosBasicos>
                <CamposDadosBasicos>
                  <h6>Conceito:</h6>
                  <p>{detalhes}</p>
                </CamposDadosBasicos>
                <CamposDadosBasicos>
                  <h6>Arquétipo:</h6>
                  <p>{arquetipo}</p>
                </CamposDadosBasicos>
              </ContainerCamposDadosBasicos>
              <ContainerAtributos>
                <ContainerCampoAtributo style={{
                  backgroundImage: `url(${poder})`
                }}>
                  <h6>{atributos.poder.toString().padStart(2, '0')}</h6>
                </ContainerCampoAtributo>
                <ContainerCampoAtributo style={{
                  backgroundImage: `url(${habilidade})`
                }}>
                  <h6>{atributos.habilidade.toString().padStart(2, '0')}</h6>
                </ContainerCampoAtributo>
                <ContainerCampoAtributo style={{
                  backgroundImage: `url(${resistencia})`
                }}>
                  <h6>{atributos.resistencia.toString().padStart(2, '0')}</h6>
                </ContainerCampoAtributo>
                <ContainerCampoAtributo style={{
                  backgroundImage: `url(${pontosdeacao})`
                }}>
                  <h6>{recursosFinal.pontosDeAcao.toString().padStart(2, '0')}</h6>
                </ContainerCampoAtributo>
                <ContainerCampoAtributo style={{
                  backgroundImage: `url(${pontosdemana})`
                }}>
                  <h6>{recursosFinal.pontosDeMana.toString().padStart(2, '0')}</h6>
                </ContainerCampoAtributo>
                <ContainerCampoAtributo style={{
                  backgroundImage: `url(${pontosdevida})`
                }}>
                  <h6>{recursosFinal.pontosDeVida.toString().padStart(2, '0')}</h6>
                </ContainerCampoAtributo>
              </ContainerAtributos>
              <ContainerCamposExtras>
                <TituloCampo>Anotações</TituloCampo>
                <ContainerAnotacoes dangerouslySetInnerHTML={{__html: anotacoes}} />
              </ContainerCamposExtras>
            </div>
            <div>
              <ContainerExtrasDireito>
                <ContainerCamposExtras>
                  <TituloCampo>Vantagens</TituloCampo>
                  <div>
                    {vantagens.map((v) => v.Nome + ".").join(" ")}
                  </div>
                </ContainerCamposExtras>

                <ContainerCamposExtras>
                  <TituloCampo>Desvantagens</TituloCampo>
                  <div>
                    {desvantagens.map((d) => d.Nome + ".").join(" ")}
                  </div>
                </ContainerCamposExtras>


                <ContainerCamposExtras>
                  <TituloCampo>Perícias</TituloCampo>
                  <div>
                    {pericias.map((v) => v.Nome + ".").join(" ")}
                  </div>
                </ContainerCamposExtras>


                <ContainerCamposExtras>
                  <TituloCampo>Técnicas</TituloCampo>
                  <div>

                  </div>
                </ContainerCamposExtras>


                <ContainerCamposExtras>
                  <TituloCampo>Equipamento</TituloCampo>
                  <div>

                  </div>
                </ContainerCamposExtras>
                <ContainerDadosExp>
                  <ExpExpacamento>
                    <h1>EXP</h1>
                    <ContainerExp style={{
                      backgroundImage: `url(${xp})`
                    }}>
                      <h6>{pontosTotais}</h6>
                    </ContainerExp>
                  </ExpExpacamento>
                  <div style={{
                    alignSelf: 'flex-end',
                    paddingBottom: '44px'
                  }}>
                    <img src={logo} />
                  </div>
                </ContainerDadosExp>
              </ContainerExtrasDireito>
            </div>
          </ContainerColunas>
        </PaddingInterno>
      </Container>
    </>
  )
}