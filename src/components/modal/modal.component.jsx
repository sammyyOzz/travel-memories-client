import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Box, CloseBox }from './modal.styles';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';


export default function TransitionsModal({ children, open, handleClose }) {

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box>
                        <CloseBox>
                            <CancelPresentationIcon onClick={handleClose} />
                        </CloseBox>
                        {children}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
