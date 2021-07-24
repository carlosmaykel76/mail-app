import React from "react";
import { Window, WindowActionsBar } from "@progress/kendo-react-dialogs";
import { Button, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import KendoEditor from "../KendoEditor";
import AttachModal from "./AttachModal";
import IMessage from "../mail.interface";

interface Props {
  openCompose: (n: boolean, t: string, f: boolean) => void;
  titulo: string;
  flag: boolean;
  msg: Array<IMessage>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      width: "100%",
      height: "100%",
      padding: "16px, 24px, 24px",
    },
    TextField: {
      width: "100%",
    },
    paper: {
      padding: theme.spacing(2),
      justify: "flex-start",
      color: theme.palette.text.secondary,
    },
    bt: {
      textTransform: "capitalize",
    },
    BButton: {
      justify: "center",
    },
  })
);

const ComponseForm: React.FC<Props> = ({ openCompose, titulo, flag, msg }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [visible, setVisible] = React.useState(true);
  const [viewAttach, SetViewAttach] = React.useState(false);
  const styles = useStyles();

  const closeComposeDialog = () => {
    openCompose(!visible, "", false);
  };

  const openAttachDialog = () => {
    SetViewAttach(!viewAttach);
  };

  return (
    <>
      <Window
        title={titulo}
        onClose={closeComposeDialog}
        initialHeight={500}
        initialWidth={800}
        modal
        resizable={false}
      >
        <div className={styles.modal}>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Button className={styles.bt}>Para:</Button>
            </Grid>
            <Grid item xs={11}>
              <TextField
                id="to"
                size="small"
                className={styles.TextField}
                value={flag ? msg[0]["email"] : ""}
              />
            </Grid>
            <Grid item xs={1}>
              <label>Asunto:</label>
            </Grid>
            <Grid item xs={11}>
              <TextField
                id="subject"
                className={styles.TextField}
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <KendoEditor />
            </Grid>
          </Grid>
        </div>
        <WindowActionsBar layout="end">
          <Grid container spacing={1}>
            <Grid item xs>
              <Button
                className={styles.bt}
                variant="outlined"
                startIcon={<AttachFileIcon />}
                onClick={openAttachDialog}
              >
                Adjuntar
              </Button>
            </Grid>
            <Grid
              item
              xs
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <button
                type="button"
                className="k-button"
                onClick={closeComposeDialog}
              >
                Cerrar
              </button>
              <button
                type="button"
                className="k-button k-primary"
                onClick={closeComposeDialog}
              >
                Enviar
              </button>
            </Grid>
          </Grid>
        </WindowActionsBar>
      </Window>
      <div>{viewAttach && <AttachModal openAttach={openAttachDialog} />}</div>
    </>
  );
};

export default ComponseForm;
