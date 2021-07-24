import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import DeleteIcon from "@material-ui/icons/Delete";
import MarkAsUnreadIcon from "@material-ui/icons/MarkunreadMailbox";
//import MarkAsUnreadIcon from '@material-ui/icons/MarkAsUnread';
import SettingsIcon from "@material-ui/icons/Settings";
import { ButtonGroup, IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

interface ToolbarProps {
  openCompose: (n: boolean, t: string, f: boolean) => void;
  openSetting: (n: boolean) => void;
  openWarning: (w: boolean, title: string, body: string) => void;
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    width: "100%",
    height: "30px",
    background: "LightGray",
    border: "1px solid #000",
    padding: "2px 0px 0px 0px",
    //padding: 'top right bottom left'
  },
  textfield: {
    width: "100%",
  },
  bt: {
    textTransform: "capitalize",
  },
  group: {
    height: "30px",
  },
}));

const Toolbar: React.FC<ToolbarProps> = ({
  openCompose,
  openSetting,
  openWarning,
}) => {
  const styles = useStyles();

  const openModal = () => {
    openCompose(true, "Nuevo Mensaje", false);
  };

  const showSetting = () => {
    openSetting(true);
  };

  return (
    <div className={styles.toolbar}>
      <ButtonGroup
        variant="text"
        color="primary"
        className={styles.group}
        aria-label="text primary button group"
      >
        <Tooltip title="Nuevo Mensaje">
          <IconButton aria-label="newmensaje" onClick={openModal}>
            <EmailIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Nuevo Mensaje">
          <IconButton aria-label="delete" disabled>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Configura Cuenta">
          <IconButton
            aria-label="setting"
            onClick={() => {
              openWarning(
                true,
                "",
                "Esta seguro de Marcar todos los Mensajes como Leidos"
              );
            }}
          >
            <MarkAsUnreadIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Configura Cuenta">
          <IconButton aria-label="setting" onClick={showSetting}>
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
};

export default Toolbar;
