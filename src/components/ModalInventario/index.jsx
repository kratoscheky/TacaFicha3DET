import * as React from 'react';
import {AdicionarButton, ContainerItens, ContainerModal, ConteudoModal, Titulo} from './styles';
import AddIcon from "@mui/icons-material/Add";
import FichaInput from '../FichaInput';
import {useState} from "react";

export default function ModalInventario({open, handleClose, onAdicionarClick}) {
  const [customizada, setCustomizada] = useState("");

  return (
    <div>
      <ContainerModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ConteudoModal>
          <ContainerItens>
            <h1>Inventário</h1>
            <Titulo>
              Adicionar Item
              <AdicionarButton onClick={() => onAdicionarClick(customizada)} data-test-id="pericia-adicionar-customizada">
                <AddIcon
                  style={{width: "15px"}}
                />
                Adicionar
              </AdicionarButton>
            </Titulo>
            <FichaInput
              width='100%'
              label={"Nome do Item"}
              valor={customizada}
              onEdit={(e) => setCustomizada(e.target.value)}
              testId="inventario-customizada"
            />
          </ContainerItens>
        </ConteudoModal>
      </ContainerModal>
    </div>
  );
}
