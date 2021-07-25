import React, { useState } from "react";
import { Window } from "@progress/kendo-react-dialogs";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Paper, TextField, Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ToolBarSetting from "./ToolBarSetting";
import DataView from "./DataView";
import WarningDialog from "../Modals/WarningDialog";

import ServerConfig from "./ServerConfig";

interface SettingMailProps {
  closeSetting: (n: boolean) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      width: "100%",
      height: "700",
      background: "white",
      padding: "2px, 4px, 4px, 4px",
      //padding: 'top right bottom left'
    },
    TextField: {
      padding: "0pt 0pt 1pt 0pt",
      width: "100%",
    },
    CardHeader: {
      padding: "0pt 0pt 1pt 0pt",
    },
  })
);

const SettingMail: React.FC<SettingMailProps> = ({ closeSetting }) => {
  const styles = useStyles();

  const [viewDialog, setViewDialog] = useState(false);
  const [warningBody, setWarningBody] = useState("");
  const [warningTitle, setWarningTitle] = useState("Confirmación");

  const closeSettingModel = () => {
    closeSetting(false);
  };

  const openWarningDialog = (w: boolean, title: string, body: string) => {
    setViewDialog(w);
    setWarningBody(body);
    setWarningTitle(title === "" ? warningTitle : title);
  };

  return (
    <Window
      title={"Configuración de la Cuenta e-mail"}
      onClose={closeSettingModel}
      initialHeight={700}
      initialWidth={700}
      modal
      resizable={false}
    >
      <div className={styles.modal}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ToolBarSetting
              closeSetting={closeSettingModel}
              openWarning={openWarningDialog}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Código de empresa"
              id="cod_empr"
              defaultValue="1"
              variant="outlined"
              size="small"
              disabled
              className={styles.TextField}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Código de Empleado"
              id="cod_empl"
              defaultValue="1505"
              disabled
              variant="outlined"
              size="small"
              className={styles.TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <DataView />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Dirección de E-mail"
              id="dir_email"
              variant="outlined"
              size="small"
              className={styles.TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Su nombre"
              id="name_empl"
              variant="outlined"
              size="small"
              className={styles.TextField}
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <FormControlLabel
              control={<Checkbox name="sin_Coreo" color="primary" />}
              label="Sincronizar correo"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Tiempo de refresco"
              id="tpo_account"
              variant="outlined"
              size="small"
              defaultValue="0"
              className={styles.TextField}
            />
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <b>Notificaciones</b>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox name="sin_Coreo" color="primary" />}
              label="Envío Correcto"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox name="sin_Coreo" color="primary" checked />}
              label="Envío erroneo"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox name="recepcion" color="primary" checked />}
              label="Recepción"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Tipo de Cuenta"
              id="tpo_account"
              variant="outlined"
              size="small"
              className={styles.TextField}
            />
          </Grid>
          <ServerConfig />
        </Grid>
      </div>
      <div>
        {viewDialog && (
          <WarningDialog
            titleDialog={warningTitle}
            BodyDialog={warningBody}
            closeWarning={openWarningDialog}
          />
        )}
      </div>
    </Window>
  );
};

export default SettingMail;
