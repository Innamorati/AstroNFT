import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { connect } from "react-redux"
import { useDispatch } from 'react-redux'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CustomizedSnackbars(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        // if (reason === 'clickaway') {
        //     return;
        // }

        // setOpen(false);
        dispatch({
            type: 'user',
            payload: {
                view: false,
                message: '',
                success: null,
            }
        })
    };
    console.log(props.user)
    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={props.user.view} autoHideDuration={3000} onClose={handleClose}>
                {props.user.success ?
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        {props.user.message}
                    </Alert> :
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        {typeof props.user.message === "string" ? <p>{props.user.message}</p> : <ul style={{ listStyle: 'none' }}>{props.user.message.map(mensaje => <li>{mensaje.message}</li>)}</ul>}
                    </Alert>
                }

            </Snackbar>
        </Stack >
    );
}
const mapStateToProps = (state) => {
    return {
        user: state.UserReducer.user
    }
}
export default connect(mapStateToProps, null)(CustomizedSnackbars)