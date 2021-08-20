import React from "react";
import { Window, WindowActionsBar } from "@progress/kendo-react-dialogs";
import { Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      width: "100%",
      height: "600",
      background: "white",
      padding: "16px, 32px, 24px",
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
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
    input: {
      display: "none",
    },
  })
);

interface attachModalProps {
  openAttach: (n: boolean) => void;
}

const AttachModal: React.FC<attachModalProps> = ({ openAttach }) => {
  const styles = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [viewAttach, SetViewAttach] = React.useState(true);

  const closeComposeDialog = () => {
    openAttach(!viewAttach);
  };

  return (
    <Window
      title={"Adjuntar Fichero"}
      onClose={closeComposeDialog}
      initialHeight={250}
      initialWidth={600}
    >
      <div className={styles.modal}>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <div>
              <input
                accept="image/*"
                className={styles.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </label>
              <input
                accept="image/*"
                className={styles.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </div>
          </Grid>
        </Grid>
      </div>
      <WindowActionsBar layout="end">
        <Grid container spacing={1}>
          <Grid item xs></Grid>
          <Grid item xs style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              type="button"
              className="k-button"
              onClick={closeComposeDialog}
            >
              Cerrar
            </button>
          </Grid>
        </Grid>
      </WindowActionsBar>
    </Window>
  );
};

export default AttachModal;
