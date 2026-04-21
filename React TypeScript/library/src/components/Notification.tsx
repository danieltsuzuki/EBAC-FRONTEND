import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import type { SnackbarCloseReason } from '@mui/material/Snackbar'
import Snackbar from '@mui/material/Snackbar'
import type { SetStateAction } from 'react';

type Props = {
    message: string,
    open: boolean,
    setOpen: (value: SetStateAction<boolean>) => void
}

function Notification({message, open, setOpen}: Props) {

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    return(
        <div>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            message={message}
            action={action}
            />
        </div>
    )
}

export default Notification;