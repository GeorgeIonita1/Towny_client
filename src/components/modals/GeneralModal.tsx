import { Dialog, DialogTitle, IconButton, DialogContent, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useModal } from '../../contexts/ModalContext';

export default function GeneralModal() {
    const { isModalOpen, handleCloseModal, modalData } = useModal();
    const { type, message, solution } = modalData;

    return (
        <Dialog open={isModalOpen}>
            <DialogTitle>{ type }</DialogTitle>
            <IconButton 
                aria-label='close'
                onClick={handleCloseModal}
                sx={{ position: 'absolute', top: 8, right: 8 }}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent dividers>
                <Typography>{message}</Typography>
                <Typography>{solution}</Typography>
            </DialogContent>
        </Dialog>
    )
}
