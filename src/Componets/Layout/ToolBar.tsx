import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import DeleteIcon from "@material-ui/icons/Delete";
import MarkAsUnreadIcon from "@material-ui/icons/MarkunreadMailbox";
//import MarkAsUnreadIcon from '@material-ui/icons/MarkAsUnread';
import SettingsIcon from "@material-ui/icons/Settings";
import { Button, ButtonGroup, IconButton, Box } from "@material-ui/core";
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
    height: "32px",
    background: "LightGray",
    border: "1px solid #000",
    padding: "2px 0px 0px 0px",
    //padding: 'top right bottom left'
  },
  toolbarDer: {
    display: "flex",
    //border: "1px solid black",

    justifyContent: "space-around",
    alignItems: "center"
    //alignItems: "center"
  },
  textfield: {
    width: "100%",
  },
  button: {
    textTransform: "capitalize",
  },
  group: {
    height: "25px",
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
      <Button
        onClick={openModal}
        variant="contained"
        color="primary"
        className={styles.button}
        disableElevation
        size="small"
      >
        Mensaje nuevo
      </Button>{" "}
      <Button
        onClick={showSetting}
        variant="contained"
        color="default"
        className={styles.button}
        disableElevation
        size="small"
      >
        Configuración
      </Button>
    </div>
  );
};

export default Toolbar;
