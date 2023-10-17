import { Dialog } from '@mui/material';

import { useModal } from '../../contexts/ModalContext';

export default function GeneralModal() {
    const { isModalOpen, handleCloseModal, modalData } = useModal();

    return (
        <Dialog open={isModalOpen}>
            <h1>I am a modal</h1>
            <button onClick={handleCloseModal}>close</button>
            <div>{modalData.type}</div>
            <div>{modalData.message}</div>
            <div>{modalData.solution}</div>
        </Dialog>
    )
}
