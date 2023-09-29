import * as React from "react";
import {AdicionarButton, ContainerItens, ContainerModal, ConteudoModal, Titulo,} from "./styles";
import {Desvantagens} from "../../data/desvantagens";
import AddIcon from "@mui/icons-material/Add";
import FichaInput from "../FichaInput";
import {useEffect, useState} from "react";

export default function ModalDesvantagens({
                                            open,
                                            handleClose,
                                            onAdicionarClick,
                                          }) {
  const [customizada, setCustomizada] = React.useState("");
  const [desvantagensFiltradas, setDesvantagensFiltradas] = useState(Desvantagens);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    let filtroAplicado = Desvantagens;

    if(filtro !== "")
      filtroAplicado = Desvantagens.filter(p => p.Nome.includes(filtro))

    setDesvantagensFiltradas(filtroAplicado)
  }, [filtro]);

  return (
    <div>
      <ContainerModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ConteudoModal>
          <h1>Desvantagens</h1>
          <br/>
          <ContainerItens>
            <Titulo>
              Customizada
              <AdicionarButton onClick={() => onAdicionarClick(customizada)} data-test-id="desvantagem-adicionar-customizada">
                <AddIcon style={{width: "15px"}}/>
                Adicionar
              </AdicionarButton>
            </Titulo>
            <p>
              Sua mesa utiliza uma desvantagem customizada ou não encontrou o
              que procurava?
              <br/>
              <br/>
              Sem problemas! Adicione a desvantagem que quiser no campo abaixo
            </p>
            <FichaInput
              label={"Nome da desvantagem"}
              valor={customizada}
              onEdit={(e) => setCustomizada(e.target.value)}
              testId="desvantagem-customizada"
            />
            <hr style={{width: "100%"}}/>
            <FichaInput
              width='100%'
              label={"Pesquisar Desvantagem"}
              valor={filtro}
              onEdit={(e) => setFiltro(e.target.value)}
            />
            {desvantagensFiltradas.map((d) => {
              return (
                <div
                  style={{
                    backgroundColor: "#44003C",
                    padding: "18px",
                    borderRadius: "8px",
                  }}
                  key={d.Nome}
                >
                  <Titulo>
                    {d.Nome} {d.Pontos}pt
                    <AdicionarButton onClick={() => onAdicionarClick(d.Nome)} data-test-id={'desvantagem-' + d.Nome}>
                      <AddIcon style={{width: "15px"}}/>
                      Adicionar
                    </AdicionarButton>
                  </Titulo>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: d.Descricao.replaceAll("\n", "<br/><br/>"),
                    }}
                  ></p>
                  {d.Tipo && (
                    <>
                      <br/>
                      {d.Tipo.map((t) => (
                        <Titulo
                          style={{
                            paddingBottom: "8px",
                            paddingLeft: '8px'
                          }}
                        >
                          {t.Nome} -{t.Pontos}pt
                          <AdicionarButton
                            onClick={() =>
                              onAdicionarClick(`${d.Nome} (${t.Nome})`)
                            }
                          >
                            <AddIcon style={{width: "15px"}}/>
                            Adicionar
                          </AdicionarButton>
                        </Titulo>
                      ))}
                    </>
                  )}
                </div>
              );
            })}
          </ContainerItens>
        </ConteudoModal>
      </ContainerModal>
    </div>
  );
}
