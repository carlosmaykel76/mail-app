import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { IMessage } from "../../../interfaces/mail.interface";
import MessageItem from "../Message/MessageItem";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Tooltip from "@material-ui/core/Tooltip";
import FilterMessage from "../../FilterMessages";
import { IMessageListProps } from "../../../interfaces/mail.interface"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "99%",
      height: "auto",
      backgroundColor: "#f5f5f5",
    },
    paperVacio: {
      width: "99%",
      height: 50,
    },

    formControl: {
      minWidth: 120,
    },
  })
);

const MessageList: React.FC<IMessageListProps> = ({
  dataInbox,
  onFilterInbox,
  onSelectItem,
  onClickRead,
  onSelectAll,
  onDeleteMsgs,
}) => {

  const styles = useStyles();
  const [selectAllMsg, SetSelectAllMsg] = useState(false);

  /**
   * Marca todos los mensajes de Inbox y 
   * crea array con los Id de los mensajes
   * @param event 
   */
  const handleChangeAllMsg = (event: any) => {

    const aListId: number[] = [];

    if (event.target.checked === true) {
      // eslint-disable-next-line
      dataInbox.map((m) => {
        aListId.push(m.id);
      });

      onSelectAll(dataInbox.length, aListId);
      SetSelectAllMsg(true);

    } else {

      onSelectAll(0, aListId);
      SetSelectAllMsg(false);

    }

  };

  return (
    <>
      <Paper className={styles.paper}>
        <Grid container spacing={1}>
          <Grid item>
            <div>
              <Tooltip title="Selecciona todos los mensajes">
                <Checkbox
                  color="default"
                  name="chkAllMsg"
                  icon={<CheckCircleOutlineIcon />}
                  checkedIcon={<CheckCircleIcon color="primary" />}
                  onChange={(event) => handleChangeAllMsg(event)}
                />
              </Tooltip>
            </div>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}></Grid>
            <Grid item>
              <div>
                <FilterMessage onClick={onFilterInbox} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {dataInbox.length > 0 ? (

        dataInbox.map((item: IMessage) => (
          < MessageItem
            msg={item}
            onClickRead={onClickRead}
            onSelectItem={onSelectItem}
            onSelectAll={selectAllMsg}
            onDeleteMsg={onDeleteMsgs}
          />
        ))
      ) : (
        <Paper className={styles.paperVacio} >
          <Grid item xs={12} sm container>
            <Typography variant="h6" >
              No Existen Mensajes que mostrar.
            </Typography>
          </Grid>
        </Paper>
      )}
    </>
  );
};

export default MessageList;
