import { Modal } from "@mui/material";
import { ButtonsFlex, ConfirmButton, ContainerConteudoModal, ContainerModal, DeleteButton } from "./styles";

export const ModalConfirmarDelete = ({open, onClose, onDelete}) => {
    return (
        <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <ContainerModal onClick={onClose}>
            <ContainerConteudoModal>
            <h1>TU VAI DELETA MANO!</h1>
            <p>
                Cara, tem certeza mesmo que quer deletar teu personagem?
                Tipo, cê vai perder ele, sabe? PRA SEMPRE! Ainda quer deletar ele?
            </p>
            <ButtonsFlex>
                <ConfirmButton onClick={onClose}><p>Eu desisto! Não quero mais.</p></ConfirmButton>
                <DeleteButton onClick={onDelete}><p>Deleta logo!</p></DeleteButton>
            </ButtonsFlex>
            </ContainerConteudoModal>
        </ContainerModal>
        </Modal>
    );
};