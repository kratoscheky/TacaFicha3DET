import {
  AtributosContainer,
  ColunaDireita,
  ColunaEsquerda,
  Colunas,
  Container,
  ContainerImagem,
  ContainerLinhas,
  ContainerTacaFicha,
  DadosBasicosTextos,
  EspacamentoTopo,
  Imagem,
  PaddingInterno,
  Texto,
  TextoAtributo,
  TriadeDeDados
} from "./styles"
import { useFicha } from "../../context/ficha.context"
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf';
import { PDFDocument } from 'pdf-lib';
import { Button } from "../TacaFicha/styles.jsx";


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
    anotacoes,
    inventario,
    tecnicas,
    conceito,
    escala,
    xp
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
    <ContainerTacaFicha>
      <Container id="tacaficha-pdf">
        <PaddingInterno>
          <EspacamentoTopo />
          <Colunas>
            <ColunaEsquerda>
              <DadosBasicosTextos>
                <Texto style={{
                  paddingLeft: '18mm',
                  marginTop: '1.5mm'
                }}>{nome}</Texto>
                <Texto style={{
                  paddingLeft: '30mm',
                  marginTop: '9.5mm'
                }}>{arquetipo}</Texto>
                <Texto style={{
                  paddingLeft: '26mm',
                  marginTop: '9.5mm'
                }}>{conceito}</Texto>

                <TriadeDeDados>
                  <Texto style={{
                  paddingLeft: '16mm'
                }}>{escala}</Texto>
                  <Texto style={{
                  paddingLeft: '10mm'
                }}>{pontosTotais}</Texto>
                  <Texto style={{
                  paddingLeft: '11.5mm'
                }}>{xp}</Texto>
                </TriadeDeDados>
              </DadosBasicosTextos>
              <AtributosContainer>
                <TextoAtributo style={{
                  paddingTop: '3mm'
                }}>
                  {atributos.poder.toString().padStart(2, '0')}
                </TextoAtributo>
                <TextoAtributo style={{
                  paddingTop: '3mm'
                }}>
                  {atributos.habilidade.toString().padStart(2, '0')}
                </TextoAtributo>
                <TextoAtributo style={{
                  paddingTop: '3mm'
                }}>
                  {atributos.resistencia.toString().padStart(2, '0')}
                </TextoAtributo>
                <TextoAtributo style={{
                  paddingTop: '2mm'
                }}>
                  {recursosFinal.pontosDeAcao.toString().padStart(2, '0')}
                </TextoAtributo>
                <TextoAtributo style={{
                  paddingTop: '2mm'
                }}>
                  {recursosFinal.pontosDeMana.toString().padStart(2, '0')}
                </TextoAtributo>
                <TextoAtributo style={{
                  paddingTop: '2mm'
                }}>
                  {recursosFinal.pontosDeVida.toString().padStart(2, '0')}
                </TextoAtributo>
              </AtributosContainer>
              <ContainerImagem>
                <Imagem src={imageBlob} />
              </ContainerImagem>
              <ContainerLinhas style={{
                marginTop: '22.5mm'
              }}>
                {inventario.map(i => i.Nome+ ".").join(" ")}
              </ContainerLinhas>
            </ColunaEsquerda>
            <ColunaDireita>
              <ContainerLinhas style={{
                paddingTop: '10mm',
                height: '72.6mm'
              }}>
                {vantagens.map(v => v.Nome + ".").join(" ")}
              </ContainerLinhas>
              <ContainerLinhas style={{
                paddingTop: '20.9mm',
                height: '50.6mm'
              }}>
                {desvantagens.map(d => d.Nome + ".").join(" ")}
              </ContainerLinhas>
              <ContainerLinhas style={{
                paddingTop: '23.2mm',
                height: '53.6mm'
              }}>
                {pericias.map(p => p.Nome + ".").join(" ")}
              </ContainerLinhas>
              <ContainerLinhas style={{
                paddingTop: '19.8mm',
                height: '60.6mm'
              }}>
                {tecnicas.map(t => t.Nome + ".").join(" ")}
              </ContainerLinhas>
            </ColunaDireita>
          </Colunas>
        </PaddingInterno>
      </Container>
      <br />
      <Button onClick={captureAndSaveFicha}>Baixar Ficha em Pdf</Button>
    </ContainerTacaFicha>
  )
}