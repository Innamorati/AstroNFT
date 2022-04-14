import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../styles/StyleAdmin.css'
import { createTheme } from '@mui/material';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

const style = (theme) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    backgroundColor:'rgb(182, 180, 180)',
    border: '2px solid #000',
    boxShadow: 24,
    [theme.breakpoints.up('md')]: {
        width: 800,
    },
    [theme.breakpoints.up('sm')]: {
        width: 600,
        height: 525,
    },
    [theme.breakpoints.up('xs')]: {
        width: 380,
        height: 525,
    },
});

export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button style={{
                backgroundColor:'gray',
                color:'black',
                borderRadius:10,
                fontWeight:500,
            }} onClick={handleOpen}>{props.buttonName}</Button>
            <Modal
                
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='boxModal'>
                    {props.children}
                </Box>
            </Modal>
        </div>
    );
}