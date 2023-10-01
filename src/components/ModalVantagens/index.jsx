import * as React from "react";
import {AdicionarButton, ContainerItens, ContainerModal, ConteudoModal, Titulo,} from "./styles";
import {Vantagens} from "../../data/vantagens";
import AddIcon from "@mui/icons-material/Add";
import FichaInput from "../FichaInput";
import {useEffect, useState} from "react";

export default function ModalVantagens({
                                         open,
                                         handleClose,
                                         onAdicionarClick,
                                       }) {
  const [customizada, setCustomizada] = React.useState("");
  const [vantagensFiltradas, setVantagensFiltradas] = useState(Vantagens);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    let filtroAplicado = Vantagens;

    if(filtro !== "")
      filtroAplicado = Vantagens.filter(p => p.Nome.includes(filtro))

    setVantagensFiltradas(filtroAplicado)
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
          <h1>Vantagens</h1>
          <br/>
          <ContainerItens>
            <Titulo>
              Customizada
              <AdicionarButton onClick={() => onAdicionarClick(customizada)} data-test-id="vantagem-adicionar-customizada">
                <AddIcon style={{width: "15px"}}/>
                Adicionar
              </AdicionarButton>
            </Titulo>
            <p>
              Sua mesa utiliza uma vantagem customizada ou não encontrou o que
              procurava?
              <br/>
              <br/>
              Sem problemas! Adicione a vantagem que quiser no campo abaixo
            </p>
            <FichaInput
              width="100%"
              label={"Nome da vantagem"}
              valor={customizada}
              onEdit={(e) => setCustomizada(e.target.value)}
              testId="vantagem-customizada"
            />
            <hr style={{width: "100%"}}/>
            <FichaInput
              width='100%'
              label={"Pesquisar Vantagem"}
              valor={filtro}
              onEdit={(e) => setFiltro(e.target.value)}
            />
            {vantagensFiltradas.map((v) => {
              return (
                <div
                  style={{
                    backgroundColor: "#44003C",
                    padding: "18px",
                    borderRadius: "8px",
                  }}
                  key={v.Nome}
                >
                  <Titulo>
                    {v.Nome} {v.Pontos}pt
                    <AdicionarButton onClick={() => onAdicionarClick(v.Nome)} data-test-id={'vantagem-' + v.Nome}>
                      <AddIcon style={{width: "15px"}}/>
                      Adicionar
                    </AdicionarButton>
                  </Titulo>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: v.Descricao.replaceAll("\n", "<br/><br/>"),
                    }}
                  ></p>
                  {v.Tipo && (
                    <>
                      <br/>
                      {v.Tipo.map((t) => (
                        <Titulo style={{
                          paddingBottom: '8px'
                        }}>
                          {t.Nome} {t.Pontos}pt
                          <AdicionarButton
                            onClick={() => onAdicionarClick(`${v.Nome} (${t.Nome})`)}
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
