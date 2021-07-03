import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paperSubject: {
      padding: theme.spacing(1),
      justify: 'flex-start',
      color: theme.palette.text.secondary,
      background: theme.palette.text.disabled,
      
      
    },
    paperHeader: {            
        color: theme.palette.text.secondary,
        justify: 'flex-start',
        borderBottom:'2px solid',
    },
    paperBody: {
        padding: theme.spacing(2),        
        color: theme.palette.text.secondary,
        justify: 'flex-start',
    },
  }),
);

interface IData {
    id: number;
    importance: string;
    attached: boolean;
    personfor: string;
    subject: string;
    sent: string;
    size: string;
    read: boolean;
}


const MessageDetails = () => {
    const styles = useStyles(); 

    return(
        <Grid container >
            <Grid item xs={12}>
                <Paper className={styles.paperSubject}>
                    <b>Asunto del Mensaje  </b>          
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={styles.paperHeader}>
                    <div>De:<b>Humberto@telematel.com</b></div>
                    <div>Fecha:01/07/2021 13:00</div>
                    <div>Para:<b>carlos.lopez@telematel.com</b></div>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={styles.paperBody}>
                Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2
                </Paper>
            </Grid>
        </Grid>

/*
             id: number;
    importance: string;
    attached: boolean;
    personfor: string;
    subject: string;
    sent: string;
    size: string;
    read: boolean;
        </div>*/
    );
}

export default MessageDetails
