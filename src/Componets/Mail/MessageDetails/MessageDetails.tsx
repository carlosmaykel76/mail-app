import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  ButtonGroup,
  IconButton,
  Button,
} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import ReplyIcon from "@material-ui/icons/Reply";
import ReplyAllIcon from "@material-ui/icons/ReplyAll";
import DeleteIcon from "@material-ui/icons/Delete";
import FlagIcon from "@material-ui/icons/Flag";
import EmailIcon from "@material-ui/icons/Email";
import svgMsgDetails from "../../../imgs/MessageDetails.svg";
import svgMsgSelected from "../../../imgs/messageSelected.svg";
import { IMessageDetailsProps } from "../../../interfaces/mail.interface"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paperSubject: {
      padding: theme.spacing(1),
      justify: "flex-start",
      color: theme.palette.text.secondary,
      background: theme.palette.text.disabled,
    },
    paperHeader: {
      color: theme.palette.text.secondary,
      justify: "flex-start",
      borderBottom: "2px solid",
    },
    paperBody: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      justify: "flex-start",
    },
    paperInit: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      textAlign: "center",
    },
    toolbar: {
      textAling: "right",
      backgroundColor: "rgba(0, 0, 0, .03)",
      border: "1px solid rgba(0, 0, 0, .125)",
    },
    group: {
      height: "30px",
    },
    bt: {
      textTransform: "capitalize",
    },
    list: {
      listStyle: "none",
      padding: "0px",
    },
  })
);

const MessageDetails: React.FC<IMessageDetailsProps> = ({
  countSelect,
  msg,
  openCompose,
}) => {
  const styles = useStyles();

  const openModal = () => {
    openCompose(true, "Respuesta al Mensaje", true);
  };

  return msg[0]["id"] === 0 ? (
    <Grid container>
      <Grid item xs={12} className={styles.paperInit}>
        {countSelect === 0 ? (
          <>
            <img src={svgMsgDetails} alt={""} />
            <h4>Seleccione un Mensaje para visualizarlo aquí</h4>
          </>
        ) : (
          <>
            <img src={svgMsgSelected} alt={""} />
            <h4>{countSelect} elementos seleccionados</h4>
            <ul className={styles.list}>
              <li>
                <Button startIcon={<DeleteIcon />} className={styles.bt}>
                  Eliminar
                </Button>
              </li>
              <li>
                <Button startIcon={<FlagIcon />} className={styles.bt}>
                  Marcar
                </Button>
              </li>
              <li>
                <Button startIcon={<DeleteIcon />} className={styles.bt}>
                  Marcar como leído
                </Button>
              </li>
              <li>
                <Button startIcon={<DeleteIcon />} className={styles.bt}>
                  Marcar como no leído
                </Button>
              </li>
              <li>
                <Button startIcon={<DeleteIcon />} className={styles.bt}>
                  Mover
                </Button>
              </li>
              <li>
                <Button startIcon={<DeleteIcon />} className={styles.bt}>
                  Cancelar
                </Button>
              </li>
            </ul>
          </>
        )}
      </Grid>
    </Grid>
  ) : (
    <>
      {countSelect > 1 ? (
        <>
          <Grid container>
            <Grid item xs={12} className={styles.paperInit}>
              <img src={svgMsgSelected} alt={""} />
              <h4>{countSelect} elementos seleccionados</h4>
              <ul className={styles.list}>
                <li className={styles.list}>
                  <Button startIcon={<DeleteIcon />} className={styles.bt}>
                    Eliminar
                  </Button>
                </li>
                <li>
                  <Button startIcon={<FlagIcon />} className={styles.bt}>
                    Marcar
                  </Button>
                </li>
                <li>
                  <Button startIcon={<EmailIcon />} className={styles.bt}>
                    Marcar como leído
                  </Button>
                </li>
                <li>
                  <Button startIcon={<DeleteIcon />} className={styles.bt}>
                    Marcar como no leído
                  </Button>
                </li>
                <li>
                  <Button startIcon={<DeleteIcon />} className={styles.bt}>
                    Mover
                  </Button>
                </li>
                <li>
                  <Button startIcon={<DeleteIcon />} className={styles.bt}>
                    Cancelar
                  </Button>
                </li>
              </ul>
            </Grid>
          </Grid>
        </>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <Paper className={styles.toolbar}>
              <ButtonGroup
                className={styles.group}
                variant="text"
                color="primary"
                aria-label="text primary button group"
              >
                <Tooltip title="Responder">
                  <IconButton aria-label="delete" onClick={openModal}>
                    <ReplyIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Responder a todos">
                  <IconButton aria-label="delete">
                    <ReplyAllIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton aria-label="delete" >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </ButtonGroup>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={styles.paperSubject}>
              <b>{msg[0]["subject"]}</b>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={styles.paperHeader}>
              <div>
                De:{" "}
                <b>
                  {msg[0]["personfor"]} ({msg[0]["email"]})
                </b>
              </div>
              <div>Fecha: {msg[0]["sent"]}</div>
              <div>
                Para:<b> carlos.lopez@telematel.com</b>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={styles.paperBody}>
              <div dangerouslySetInnerHTML={{ __html: msg[0]["body"] }} />
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default MessageDetails;
