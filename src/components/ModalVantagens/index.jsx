import * as React from 'react';
import { ContainerItens, ContainerModal, ConteudoModal } from './styles';
import { Vantagens } from '../../data/vantagens';

export default function ModalVantagens({open, handleClose}) {
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
          <br />
          <ContainerItens>
            {
                Vantagens.map(v => {
                return <div>
                    <h3>{v.Nome} {v.Pontos}pt</h3>
                    <p dangerouslySetInnerHTML={{ __html: v.Descricao.replaceAll('\n', '<br/><br/>') }}></p>
                </div>
            })
            }
          </ContainerItens>
        </ConteudoModal>
      </ContainerModal>
    </div>
  );
}
