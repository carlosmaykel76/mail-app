import React from 'react'

const Notification = () => {
    return (
        <div>
            Notification

        </div>
    )
}

export default Notification

/*import React from 'react'
import { Snackbar, makeStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

interface INotificacionProps {
    isOpen: boolean;
    setNotify: any;
    notify: any;
}

const useStyles = makeStyles(theme => ({
    root: {
        top: theme.spacing(9)
    }
}))


const Notification = () => {

    //const { notify, setNotify } = props;
    const classes = useStyles()

    /*  const handleClose = (event: any, reason: string) => {
          if (reason === 'clickaway') {
              return;
          }
          setNotify({
              ...notify,
              isOpen: false
          })
      }

    return (
        /*<Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}>
            <Alert
                severity={notify.type}
                onClose={handleClose}>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}
*/