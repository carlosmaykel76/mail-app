import React from "react";
import { Window, WindowActionsBar } from "@progress/kendo-react-dialogs";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Paper, TextField } from "@material-ui/core";
import ToolBarSetting from "./ToolBarSetting";
import DataView from "./DataView";

interface SettingMailProps {
  closeSetting: (n: boolean) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    modal: {
      width: "100%",
      height: "600",
      background: "white",
      padding: "2px, 4px, 24px, 4px",
      //padding: 'top right bottom left'
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

const SettingMail: React.FC<SettingMailProps> = ({ closeSetting }) => {
  const styles = useStyles();

  const closeSettingModel = () => {
    closeSetting(false);
  };

  return (
    <Window
      title={"Configuración de la Cuenta e-mail"}
      onClose={closeSettingModel}
      initialHeight={500}
      initialWidth={600}
      modal
    >
      <div className={styles.modal}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ToolBarSetting closeSetting={closeSettingModel} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Código de empresa"
              id="codePymes"
              defaultValue="1"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Código de Empleado"
              id="codeEmploye"
              defaultValue="1505"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <DataView />
          </Grid>
        </Grid>
      </div>
    </Window>
  );
};

export default SettingMail;
