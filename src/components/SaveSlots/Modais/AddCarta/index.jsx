import { Modal } from "@mui/material";
import { ButtonsFlex, ConfirmButton, ContainerConteudoModal, ContainerModal, DeleteButton } from "./styles";
import { useState } from "react";

export const ModalAddCarta = ({open, onClose, onAdd }) => {
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
            <h1>Adicionar uma Carta</h1>
            <label>Codigo da Carta</label>
            <input value={uuid} onChange={(e) => setUuid(e.target.value)}></input>
            <ButtonsFlex>
                <DeleteButton onClick={onClose}><p>Cancelar</p></DeleteButton>
                <ConfirmButton onClick={() => onAdd(uuid)}><p>Adicionar Carta</p></ConfirmButton>
            </ButtonsFlex>
            </ContainerConteudoModal>
        </ContainerModal>
        </Modal>
    );
};