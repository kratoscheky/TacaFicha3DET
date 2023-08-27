import * as React from 'react';
import { ContainerItens, ContainerModal, ConteudoModal, AdicionarButton, Titulo } from './styles';
import { Pericias } from '../../data/pericias';
import AddIcon from "@mui/icons-material/Add";
import FichaInput from '../FichaInput';

export default function ModalPericias({open, handleClose, onAdicionarClick}) {
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
          <h1>Pericias</h1>
          <br />
          <ContainerItens>
            <Titulo>
              Customizada
              <AdicionarButton onClick={() => onAdicionarClick(customizada)}>
                <AddIcon
                  style={{ width: "15px" }}
                  />
                Adicionar
              </AdicionarButton>
            </Titulo>
            <p>Sua mesa utiliza uma pericia customizada ou não encontrou o que procurava?
            <br/><br/>Sem problemas! Adicione a vantagem que quiser no campo abaixo</p>
            <FichaInput
              label={"Nome da pericia"}
              valor={customizada}
              onEdit={(e) => setCustomizada(e.target.value)}
            />
            <hr style={{ width: "100%" }} />
            {
                Pericias.map(p => {
                return <div>
                    <Titulo>
                      {p.Nome}
                      <AdicionarButton onClick={() => onAdicionarClick(p.Nome)}>
                        <AddIcon
                          style={{ width: "15px" }}
                          />
                        Adicionar
                      </AdicionarButton>
                    </Titulo>
                    <p>{p.Descricao}</p>
                </div>
            })
            }
          </ContainerItens>
        </ConteudoModal>
      </ContainerModal>
    </div>
  );
}
