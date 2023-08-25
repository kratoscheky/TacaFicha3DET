import * as React from 'react';
import { ContainerItens, ContainerModal, ConteudoModal } from './styles';
import { Pericias } from '../../data/pericias';

export default function ModalPericias({open, handleClose}) {
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
            {
                Pericias.map(p => {
                return <div>
                    <h3>{p.Nome}</h3>
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
