import * as React from 'react';
import { ContainerItens, ContainerModal, ConteudoModal } from './styles';
import { Desvantagens } from '../../data/desvantagens';

export default function ModalDesvantagens({open, handleClose}) {
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
            {
                Desvantagens.map(d => {
                return <div>
                    <h3>{d.Nome} {d.Pontos}pt</h3>
                    <p dangerouslySetInnerHTML={{ __html: d.Descricao.replaceAll('\n', '<br/><br/>') }}></p>
                </div>
            })
            }
          </ContainerItens>
        </ConteudoModal>
      </ContainerModal>
    </div>
  );
}
