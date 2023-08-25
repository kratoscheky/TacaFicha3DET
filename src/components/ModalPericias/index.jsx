import * as React from 'react';
import Typography from '@mui/material/Typography';
import { ContainerItens, ContainerModal, ConteudoModal } from './styles';
import { useFicha } from '../../context/ficha.context';
import { Pericias } from '../../data/pericias';

export default function ModalPericias({open, handleClose}) {
    const {setPericias} = useFicha()

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
