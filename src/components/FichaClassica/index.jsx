import React from "react";
import { useFicha } from "../../context/ficha.context";
import { ContainerAtributos, ContainerFicha, ContainerExtras, DadosPersonagem, Icon, Button, Container, Frame } from "./styles";
import poderIcon from '../../images/poder.svg'
import habilidadeIcon from '../../images/habilidade.svg'
import resistenciaIcon from '../../images/resistencia.svg'
import acaoIcon from '../../images/acao.svg'
import manaIcon from '../../images/mana.svg'
import vidaIcon from '../../images/vida.svg'
import html2canvas from "html2canvas";
import SaveIcon from '@mui/icons-material/Save';
import frame from '../../images/frame.png'


export const FichaClassica = () => {
    const {
      atributos,
      recursos,
      nome,
      detalhes,
      vantagens,
      desvantagens,
      pericias,
      extras
    } = useFicha();

    const recursosFinal = {
        pontosDeAcao: parseInt(recursos.pontosDeAcao) + parseInt(extras.pontosDeAcao),
        pontosDeMana: parseInt(recursos.pontosDeMana) + parseInt(extras.pontosDeMana),
        pontosDeVida: parseInt(recursos.pontosDeVida) + parseInt(extras.pontosDeVida)
    }

    const captureAndSaveFicha = () => {
        const container = document.querySelector('#container-ficha-classica'); // Use a classe do ContainerFicha real
    
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

    return (
      <Container>
        <h1>Clássico</h1>
        <ContainerFicha id="container-ficha-classica">
          <DadosPersonagem>
            <Frame src={frame} />
            <div>
              <h1>{nome}</h1>
              <p>{detalhes}</p>
            </div>
          </DadosPersonagem>
          <ContainerAtributos>
            <div>
              <Icon src={poderIcon} />
              <b>Poder</b>
              <p>{atributos.poder}</p>
            </div>
            <div>
              <Icon src={habilidadeIcon} />
              <b>Habilidade</b>
              <p>{atributos.habilidade}</p>
            </div>
            <div>
              <Icon src={resistenciaIcon} />
              <b>Resistência</b>
              <p>{atributos.resistencia}</p>
            </div>
          </ContainerAtributos>
          <ContainerAtributos>
            <div>
              <Icon src={acaoIcon} />
              <b>Pontos de Ação</b>
              <p>
                {recursos.pontosDeAcao != 0 ? recursosFinal.pontosDeAcao : extras.pontosDeAcao + 1}
              </p>
            </div>
            <div>
              <Icon src={manaIcon} />
              <b>Pontos de Mana</b>
              <p>
                {recursos.pontosDeMana != 0 ? recursosFinal.pontosDeMana : extras.pontosDeMana + 1}
              </p>
            </div>
            <div>
              <Icon src={vidaIcon} />
              <b>Pontos de Vida</b>
              <p>
                {recursos.pontosDeVida != 0 ? recursosFinal.pontosDeVida : extras.pontosDeVida + 1}
              </p>
            </div>
          </ContainerAtributos>
          <ContainerExtras>
            <div>
              <b>Perícias</b>
              <p>{pericias.map(v => v.Nome + '.').join(' ')}</p>
            </div>
            <div>
              <b>Vantagens</b>
              <p>{vantagens.map(v => v.Nome + '.').join(' ')}</p>
            </div>
            <div>
              <b>Desvantagens</b>
              <p>{desvantagens.map(v => v.Nome + '.').join(' ')}</p>
            </div>
          </ContainerExtras>
        </ContainerFicha>

        <Button onClick={captureAndSaveFicha}>
            <SaveIcon />
            Salvar Imagem
          </Button>
      </Container>
    );
}