import React from 'react';
import { Window, WindowActionsBar }  from '@progress/kendo-react-dialogs';
import {Button, TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import KendoEditor from '../KendoEditor';

interface Props {
    openCompose: (n: boolean) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal:{
        width:'100%',
        height:'600',
        background:'white',
        padding:"16px, 32px, 24px",
    },
    TextField:{
        width:'100%',
    },
    paper: {
      padding: theme.spacing(2),
      justify: 'flex-start',
      color: theme.palette.text.secondary,
    },
    bt:{
        textTransform:'capitalize',
    },
    BButton:{
        justify: 'center',
    }
  }),
);

const ComponseForm:React.FC<Props> = ({openCompose}) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [visible, setVisible] = React.useState(true);

    const toggleDialog = () => {
        openCompose(!visible);
    }

    const styles = useStyles();

    return (
        <Window title={"Nuevo Mensaje"} onClose={toggleDialog} initialHeight={600} initialWidth={800}>
            <div className={styles.modal}>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Button className={styles.bt} >Para:</Button>
                </Grid>
                <Grid item xs={11}>
                <TextField id="to" className={styles.TextField} />
                </Grid>
                <Grid item xs={1}>
                    <label>Asunto:</label>
                </Grid>
                <Grid item xs={11}>
                 <TextField id="subject" className={styles.TextField} />
                </Grid>
                <Grid item xs={12}>
                    <KendoEditor />
                </Grid>
            </Grid>

            </div>
            <WindowActionsBar layout='end'>
                <Grid container spacing={1} >
                    <Grid item xs>
                        <Button
                            className={styles.bt}
                            variant="outlined"
                            startIcon={<AttachFileIcon />}
                        >Adjuntar</Button>
                    </Grid>
                    <Grid item xs style={{ display: "flex", justifyContent: "flex-end"}}>
                    <button type="button" className="k-button" onClick={toggleDialog}>
                            Cerrar
                        </button>
                        <button
                            type="button"
                            className="k-button k-primary"
                            onClick={toggleDialog}
                        >
                            Enviar
                        </button>
                    </Grid>
                </Grid>
          </WindowActionsBar>
        </Window>
    );
}

export default ComponseForm;