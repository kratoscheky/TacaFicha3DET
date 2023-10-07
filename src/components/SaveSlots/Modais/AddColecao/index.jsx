import { Modal } from "@mui/material";
import { ButtonsFlex, ConfirmButton, ContainerConteudoModal, ContainerModal, DeleteButton } from "./styles";
import { useState } from "react";

export const ModalAddColecao = ({ open, onClose, onAdd }) => {
    const [uuid, setUuid] = useState('');

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ContainerModal onClick={onClose}>
                <ContainerConteudoModal onClick={e => e.stopPropagation()}>
                    <h1>Adicionar uma coleção</h1>
                    <label>Codigo da Coleção</label>
                    <input value={uuid} onChange={(e) => setUuid(e.target.value)}></input>
                    <ButtonsFlex>
                        <DeleteButton onClick={onClose}><p>Cancelar</p></DeleteButton>
                        <ConfirmButton ConfirmButton onClick={() => onAdd(uuid)}><p>Importar</p></ConfirmButton>
                    </ButtonsFlex>
                </ContainerConteudoModal>
            </ContainerModal>
        </Modal>
    );
};