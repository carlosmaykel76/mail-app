import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, makeStyles, IconButton, Button } from '@material-ui/core'
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';

const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(2)
    },
    dialogTitle: {
        textAlign: 'center'
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogAction: {
        justifyContent: 'center'
    },
    titleIcon: {      
        color: theme.palette.primary.main,
        '&:hover': {          
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '4rem',
        }
    }
}))

const ConfirmDialog = (props) => {

    const { confirmDialog, setConfirmDialog } = props;
    const classes = useStyles()

    return (
        <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
        <DialogTitle className={classes.dialogTitle}>
            <IconButton disableRipple className={classes.titleIcon}>
                <NotListedLocationIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
            <Typography variant="h6">
                {confirmDialog.title}
            </Typography>
            <Typography variant="subtitle2">
                {confirmDialog.subTitle}
            </Typography>
        </DialogContent>
        <DialogActions className={classes.dialogAction}>
            <Button
                variant="contained"
                size="small"
                color="default"
                onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
            >No</Button>

            <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={confirmDialog.onConfirm}
            >Si</Button>
        </DialogActions>
    </Dialog>
    );
};

export default ConfirmDialog;
