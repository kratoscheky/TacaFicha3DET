import React from "react";
import { useSlots } from "../../context/slots.context";
import { AvisoTexto, Card, ContainerButtons, ContainerCards, ContainerSessao, InnerCard, NomeTopo, StatusContainer } from "./styles";
import poder from '../../images/poder.svg'
import habilidade from '../../images/habilidade.svg'
import resistencia from '../../images/resistencia.svg'
import IconButton from '@mui/material/IconButton';
import SimCardDownloadRoundedIcon from '@mui/icons-material/SimCardDownloadRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

export const SaveSlots = () => {
  const { slots, DeleteSlot, LoadSlot } = useSlots();

  if(!slots.length){
    return (
      <ContainerSessao>
        <p style={{color: '#d11ce0'}}>BETA</p>
        <h1>Personagens Salvos</h1>
        <AvisoTexto>Você ainda não tem nenhum personagem salvo!</AvisoTexto>
      </ContainerSessao>
    )
  }

  return (
    <ContainerSessao>
      <p style={{color: '#d11ce0'}}>BETA</p>
      <h1>Personagens Salvos</h1>
      <br />
      <ContainerCards>
        {slots.map((s, index) => (
          <Card backgroundImage='https://site.jamboeditora.com.br/wp-content/uploads/2023/07/3DeT-abertura-mobile.png'>
            <InnerCard>
              <NomeTopo>
                <p>{s.nome}</p>
              </NomeTopo>
              <StatusContainer>
                <img src={poder} />
                <p>{s.atributos.poder}</p>
              </StatusContainer>
              <StatusContainer>
                <img src={habilidade} />
                <p>{s.atributos.habilidade}</p>
              </StatusContainer>
              <StatusContainer>
                <img src={resistencia} />
                <p>{s.atributos.resistencia}</p>
              </StatusContainer>
            </InnerCard>
            <ContainerButtons>
              <IconButton onClick={() => DeleteSlot(index)}><DeleteForeverRoundedIcon style={{color: 'Crimson'}} /></IconButton>
              <IconButton onClick={() => LoadSlot(s)}><SimCardDownloadRoundedIcon style={{color: '#FFF'}} /></IconButton>
            </ContainerButtons>
          </Card>
        ))}
      </ContainerCards>
    </ContainerSessao>
  );
};
