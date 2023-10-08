import * as React from 'react';
import {AdicionarButton, ContainerItens, ContainerModal, ConteudoModal, Titulo} from './styles';
import {Pericias} from '../../data/pericias';
import AddIcon from "@mui/icons-material/Add";
import FichaInput from '../FichaInput';
import {useEffect, useState} from "react";

export default function ModalPericias({open, handleClose, onAdicionarClick}) {
  const [customizada, setCustomizada] = useState("");
  const [periciasFiltradas, setPericiasFiltradas] = useState(Pericias);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    let filtroAplicado = Pericias;

    if(filtro !== "")
      filtroAplicado = Pericias.filter(p => p.Nome.toLowerCase().includes(filtro.toLowerCase()))

    setPericiasFiltradas(filtroAplicado)
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
          <ContainerItens>
            <h1>Perícias</h1>
            <br/>
            <Titulo>
              Customizada
              <AdicionarButton onClick={() => onAdicionarClick(customizada)} data-test-id="pericia-adicionar-customizada">
                <AddIcon
                  style={{width: "15px"}}
                />
                Adicionar
              </AdicionarButton>
            </Titulo>
            <p>Sua mesa utiliza uma perícia customizada ou não encontrou o que procurava?
              <br/><br/>Sem problemas! Adicione a perícia que quiser no campo abaixo</p>
            <FichaInput
              width='100%'
              label={"Nome da perícia"}
              valor={customizada}
              onEdit={(e) => setCustomizada(e.target.value)}
              testId="pericia-customizada"
            />
            <hr style={{width: "100%"}}/>
            <FichaInput
              width='100%'
              label={"Pesquisar Pericia"}
              valor={filtro}
              onEdit={(e) => setFiltro(e.target.value)}
            />
            {
              periciasFiltradas.map(p => {
                return <div style={{
                  backgroundColor: '#44003C',
                  padding: '18px',
                  borderRadius: '8px'
                }} key={p.Nome}>
                  <Titulo>
                    {p.Nome}
                    <AdicionarButton onClick={() => onAdicionarClick(p.Nome)} data-test-id={'pericia-' + p.Nome}>
                      <AddIcon
                        style={{width: "15px"}}
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
