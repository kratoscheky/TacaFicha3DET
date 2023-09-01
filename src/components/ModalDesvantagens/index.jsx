import * as React from "react";
import {
  ContainerItens,
  ContainerModal,
  ConteudoModal,
  AdicionarButton,
  Titulo,
} from "./styles";
import { Desvantagens } from "../../data/desvantagens";
import AddIcon from "@mui/icons-material/Add";
import FichaInput from "../FichaInput";

export default function ModalDesvantagens({
  open,
  handleClose,
  onAdicionarClick,
}) {
  const [customizada, setCustomizada] = React.useState("");

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
          <br />
          <ContainerItens>
            <Titulo>
              Customizada
              <AdicionarButton onClick={() => onAdicionarClick(customizada)}>
                <AddIcon style={{ width: "15px" }} />
                Adicionar
              </AdicionarButton>
            </Titulo>
            <p>
              Sua mesa utiliza uma desvantagem customizada ou não encontrou o
              que procurava?
              <br />
              <br />
              Sem problemas! Adicione a desvantagem que quiser no campo abaixo
            </p>
            <FichaInput
              label={"Nome da desvantagem"}
              valor={customizada}
              onEdit={(e) => setCustomizada(e.target.value)}
            />
            <hr style={{ width: "100%" }} />
            {Desvantagens.map((d) => {
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
                    <AdicionarButton onClick={() => onAdicionarClick(d.Nome)}>
                      <AddIcon style={{ width: "15px" }} />
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
                      <br />
                      {d.Tipo.map((t) => (
                        <Titulo
                          style={{
                            paddingBottom: "8px",
                          }}
                        >
                          {t.Nome} -{t.Pontos}pt
                          <AdicionarButton
                            onClick={() =>
                              onAdicionarClick(`${d.Nome} (${t.Nome})`)
                            }
                          >
                            <AddIcon style={{ width: "15px" }} />
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
