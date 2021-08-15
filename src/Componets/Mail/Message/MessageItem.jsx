import React, { useState } from "react";
import { ButtonGroup, Grid, IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";

import DeleteIcon from "@material-ui/icons/Delete";
import FlagIcon from "@material-ui/icons/Flag";
import EmailIcon from "@material-ui/icons/Email";
import CheckIcon from "@material-ui/icons/Check";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import AttachFileIcon from "@material-ui/icons/AttachFile";
//import CircleOutlinedIcon from '@material-ui/icons/CircleOutlined';
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles({
  paper: {
    width: "99%",
    height: "auto",
  },
  paperOver: {
    width: "99%",
    height: "auto",
    backgroundColor: "#d1eaf3",
    cursor: "pointer",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  hidden: {
    display: "none",
  },
  show: {
    display: "block",
  },
});

const MessageItem = ({ msg, onSelect, onChecker, onSelectAll }) => {
  const styles = useStyles();

  const [showBar, setShowBar] = useState(false);
  const [selectItem, setSelectItem] = useState(false);

  const handleOverMouse = () => {
    setShowBar(true);
  };

  const handleMouseOut = () => {
    setShowBar(false);
  };

  const handleChange = (event, id) => {   

    if (event.target.checked === true) {
      onChecker(event, id);
      setSelectItem(true);     
    } else {
      setSelectItem(false);
      onChecker(event, 0);
    }
  };

  return (
    <Paper
      className={showBar || selectItem ? styles.paperOver : styles.paper}
      onMouseOver={handleOverMouse}
      onMouseOut={handleMouseOut}
    >
      <Grid container spacing={1}>
        <Grid item>
          <div className={showBar || selectItem || onSelectAll ? styles.hidden : styles.show}>
            <AccountCircleIcon fontSize="large" />
          </div>
          <div className={showBar || selectItem || onSelectAll ? styles.show : styles.hidden}>
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon />}
              checked={selectItem || onSelectAll}
              checkedIcon={<CheckCircleIcon color="primary" />}
              color="default"
              name={"chkMsg-" + msg.id}
              onChange={(event) => handleChange(event, msg.id)}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid
            item
            xs
            container
            direction="column"
            spacing={2}
            onClick={(event) => onSelect(event, msg.id)}
          >
            <Grid item xs>
              <Typography variant="subtitle1">
                {msg.read === true ? msg.personfor : <b> {msg.personfor} </b>}                
              </Typography>
              <Typography variant="body2" color="primary">
                {msg.read === true ? msg.subject.substr(0, 40) + " ..." : <b> {msg.subject.substr(0, 40) + " ..."} </b>}       
                
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <div dangerouslySetInnerHTML={{ __html: msg.body.substr(0, 60) + " ..." }} />                
              </Typography>
            </Grid>
            <Grid item></Grid>
          </Grid>
          <Grid item>
            <div className={showBar ? styles.hidden : styles.show}>
              {msg.importance === "alta" ? (
                <PriorityHighIcon fontSize="small" color="primary" />
              ) : (
                ""
              )}
              {msg.attached ? (
                <AttachFileIcon fontSize="small" color="primary" />
              ) : (
                ""
              )}
            </div>
            <div className={showBar ? styles.show : styles.hidden}>
              <ButtonGroup size="small">
                <Tooltip title="Eliminar">
                  <IconButton>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Marcar como no leído">
                  <IconButton>
                    <EmailIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Marcar este mensaje">
                  <IconButton>
                    <FlagIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Dejar este mensaje en la parte superior de la carpeta">
                  <IconButton>
                    <CheckIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </ButtonGroup>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MessageItem;
