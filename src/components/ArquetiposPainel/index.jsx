import React from "react";
import {arquetipos} from "../../data/arquetipos";
import {Container, Painel} from "./styles";
import {useSlots} from "../../context/slots.context";

export const ArquetipoPainel = () => {
  const {LoadSlot} = useSlots();

  return (
    <div
      style={{
        borderRadius: "8px",
        width: '100%',
        maxWidth: '1200px',
        marginBottom: '16px'
      }}
    >
      <div style={{
        background: '#6F0062',
        padding: '16px',
        borderRadius: '8px'
      }}>
        <h1
          style={{
            color: "#FFBF22",
            textTransform: 'uppercase'
          }}
        >
          Arquetipos
        </h1>
        <br/>
        <Container>
          {arquetipos.map((a) => (
            <Painel onClick={() => LoadSlot(a.slot)}>
              <img src={a.Imagem}/>
              <p>{a.Nome}</p>
            </Painel>
          ))}
        </Container>
      </div>
    </div>
  );
};
