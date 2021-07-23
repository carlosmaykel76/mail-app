import React from "react";
import { Window, WindowActionsBar } from "@progress/kendo-react-dialogs";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import ToolBarSetting from "../Layout/ToolBarSetting";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      width: "100%",
      height: "600",
      background: "white",
      padding: "16px, 32px, 24px",
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

const Setting = () => {
  const styles = useStyles();
  return (
    <Window
      title={"Configuración de la Cuenta e-mmail"}
      //onClose=""
      initialHeight={600}
      initialWidth={800}
    >
      <div className={styles.modal}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper>
              <ToolBarSetting />
            </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper>
              <h2>Grid COn las Opciones</h2>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Window>
  );
};

export default Setting;
