import React from "react";
import { useFicha } from "../../context/ficha.context";
import { ContainerAtributos, ContainerFicha, ContainerExtras, DadosPersonagem, Icon, Button } from "./styles";
import poderIcon from '../../images/poder.svg'
import habilidadeIcon from '../../images/habilidade.svg'
import resistenciaIcon from '../../images/resistencia.svg'
import acaoIcon from '../../images/acao.svg'
import manaIcon from '../../images/mana.svg'
import vidaIcon from '../../images/vida.svg'
import html2canvas from "html2canvas";


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
      <div>
        <h1>Preview:</h1>
        <ContainerFicha id="container-ficha-classica">
          <DadosPersonagem>
            <h1>{nome}</h1>
            <p>{detalhes}</p>
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
                {recursos.pontosDeVida != 0 ? recursosFinal.pontosDeAcao : recursosFinal.pontosDeAcao + 1}
              </p>
            </div>
            <div>
              <Icon src={manaIcon} />
              <b>Pontos de Mana</b>
              <p>
                {recursos.pontosDeMana != 0 ? recursosFinal.pontosDeMana : recursosFinal.pontosDeMana + 1}
              </p>
            </div>
            <div>
              <Icon src={vidaIcon} />
              <b>Pontos de Vida</b>
              <p>
                {recursos.pontosDeVida != 0 ? recursosFinal.pontosDeVida : recursosFinal.pontosDeVida + 1}
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

        <Button onClick={captureAndSaveFicha}>Salvar Ficha</Button>
      </div>
    );
}