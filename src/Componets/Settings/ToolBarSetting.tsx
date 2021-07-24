import React from "react";
import { ButtonGroup, IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

import EmailIcon from "@material-ui/icons/Email";
import DeleteIcon from "@material-ui/icons/Delete";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import editIcon from "@material-ui/icons/ExitToApp";

interface ToolBarSettingProps {
  closeSetting: (n: boolean) => void;
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    width: "100%",
    height: "30px",
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

const ToolBarSetting: React.FC<ToolBarSettingProps> = ({ closeSetting }) => {
  const styles = useStyles();

  const close = () => {
    closeSetting(false);
  };

  return (
    <div className={styles.toolbar}>
      <ButtonGroup
        variant="text"
        color="primary"
        className={styles.group}
        aria-label="text primary button group"
      >
        <Tooltip title="Salir">
          <IconButton aria-label="exit">
            <EmailIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Salir">
          <IconButton aria-label="exit">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Salir">
          <IconButton aria-label="exit" onClick={close}>
            <ExitToAppIcon />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
};

export default ToolBarSetting;
