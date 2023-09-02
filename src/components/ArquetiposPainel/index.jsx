import React from "react";
import { arquetipos } from "../../data/arquetipos";
import { Container, Painel } from "./styles";

export const ArquetipoPainel = () => {
  return (
    <div
      style={{
        borderRadius: "8px",
        width: '100%',
        maxWidth: '1200px'
      }}
    >
      <div style={{
        background: '#6F0062',
        padding: '16px',
        borderRadius: '16px'
      }}>
        <h1
          style={{
            color: "#FFBF22",
            textTransform: 'uppercase'
          }}
        >
          Arquetipos
        </h1>
        <br />
        <Container>
          {arquetipos.map((a) => (
            <Painel>
              <img src={a.Imagem} />
              <p style={{
                background: a.cor
              }}>{a.Nome}</p>
            </Painel>
          ))}
        </Container>
      </div>
    </div>
  );
};
