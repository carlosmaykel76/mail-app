import React from "react";
import { ButtonGroup, IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

import NoteAddIcon from "@material-ui/icons/NoteAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EditIcon from "@material-ui/icons/Edit";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import SaveIcon from "@material-ui/icons/Save";
import UndoIcon from "@material-ui/icons/Undo";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { ToolBarSettingProps } from "../../interfaces/mail.interface"

const useStyles = makeStyles((theme) => ({
  toolbar: {
    width: "100%",
    height: "30px",
    border: "1px solid #c0c0c0",
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

const ToolBarSetting: React.FC<ToolBarSettingProps> = ({
  closeSetting,
  openWarning,
  isSelect,
}) => {
  const styles = useStyles();

  const close = () => {
    closeSetting(false);
  };

  const handleClick = () => {
    openWarning(
      true,
      "Confirmación",
      "Desea Realizar la Operación Seleccionada."
    );
  };

  return (
    <div className={styles.toolbar}>
      <ButtonGroup
        variant="text"
        color="primary"
        className={styles.group}
        aria-label="text primary button group"
      >
        <Tooltip title="Editar">
          <IconButton
            aria-label="editar"
            onClick={handleClick}
            disabled={!isSelect ? true : false}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Nuevo">
          <IconButton aria-label="nuevo" onClick={handleClick}>
            <NoteAddIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Copiar">
          <IconButton
            aria-label="copiar"
            onClick={handleClick}
            disabled={!isSelect ? true : false}
          >
            <FileCopyIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Eliminar">
          <IconButton
            aria-label="eliminar"
            onClick={handleClick}
            disabled={!isSelect ? true : false}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Salvar">
          <IconButton aria-label="salvar" onClick={handleClick}>
            <SaveIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Deshacer">
          <IconButton aria-label="deshacer" onClick={handleClick}>
            <UndoIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Favorito">
          <IconButton
            aria-label="favorito"
            onClick={handleClick}
            disabled={!isSelect ? true : false}
          >
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Salir">
          <IconButton aria-label="salir" onClick={close}>
            <ExitToAppIcon />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
};

export default ToolBarSetting;
