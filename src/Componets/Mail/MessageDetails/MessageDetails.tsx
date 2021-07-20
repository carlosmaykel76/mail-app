import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import EmailIcon from "@material-ui/icons/Email";
import IMessage from "../../mail.interface";

interface IMessageDetailsProps {
  msg: Array<IMessage>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paperSubject: {
      padding: theme.spacing(1),
      justify: "flex-start",
      color: theme.palette.text.secondary,
      background: theme.palette.text.disabled,
    },
    paperHeader: {
      color: theme.palette.text.secondary,
      justify: "flex-start",
      borderBottom: "2px solid",
    },
    paperBody: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      justify: "flex-start",
    },
    paperInit: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      textAlign: "center",
    },
  })
);

const MessageDetails: React.FC<IMessageDetailsProps> = ({ msg }) => {
  const styles = useStyles();

  return msg[0]["id"] === 0 ? (
    <Grid container>
      <Grid item xs={12} className={styles.paperInit}>
        <EmailIcon />
        <h2>Seleccione un Mensaje para visualizarlo aquí</h2>
      </Grid>
    </Grid>
  ) : (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={styles.paperSubject}>
          <b>{msg[0]["subject"]}</b>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={styles.paperHeader}>
          <div>
            De:<b> {msg[0]["personfor"]}</b>
          </div>
          <div>Fecha: {msg[0]["sent"]}</div>
          <div>
            Para:<b> carlos.lopez@telematel.com</b>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={styles.paperBody}>{msg[0]["body"]}</Paper>
      </Grid>
    </Grid>
  );
};

export default MessageDetails;
