import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { IMessage } from "../../mail.interface";
import MessageItem from "../Message/MessageItem";
import WarningDialog from "../../Modals/WarningDialog";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Tooltip from "@material-ui/core/Tooltip";

import FilterMessage from "../../FilterMessages";

interface IMessageListProps {
  dataList: Array<IMessage>;
  onSelectItem: (event: React.MouseEvent<unknown>, id: number) => void;
  onClickRead: (event: React.MouseEvent<unknown>, id: number) => void;
  onSelectAll: (countSelect: number, listIdMsg: Array<number[]>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "99%",
      height: "auto",
      backgroundColor: "#f5f5f5",
    },
    formControl: {
      minWidth: 120,
    },
  })
);

const MessageList: React.FC<IMessageListProps> = ({
  dataList,
  onSelectItem,
  onClickRead,
  onSelectAll,
}) => {
  const styles = useStyles();
  const initListIdMsg: Array<number[]> = [];
  const [allMessages, setAllMessages] = useState<IMessage[]>(dataList);
  const [warningBody, setWarningBody] = useState("");
  const [warningTitle, setWarningTitle] = useState("Confirmación");
  const [selectAllMsg, SetSelectAllMsg] = useState(false);
  // eslint-disable-next-line
  const [listIdMsg, setListIdMsg] = useState(initListIdMsg);

  const handleClickFilter = (id: number) => {
    switch (id) {
      case 2:
        setAllMessages(dataList.filter((item) => item.read === false));
        break;
      case 4:
        setAllMessages(dataList.filter((item) => item.marked === true));
        break;
      case 6:
        setAllMessages(dataList.filter((item) => item.attached === true));
        break;

      default:
        setAllMessages(dataList);
        break;
    }
  };

  const handleChangeAllMsg = (event: any) => {
    if (event.target.checked === true) {
      SetSelectAllMsg(true);
      onSelectAll(allMessages.length, listIdMsg);
    } else {
      SetSelectAllMsg(false);
      onSelectAll(0, initListIdMsg);
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
                <FilterMessage onClick={handleClickFilter} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {dataList.length > 0 ? (
        //*const dataFilter = dataList.find()*/
        allMessages.map((item: IMessage) => (
          <MessageItem
            msg={item}
            onClickRead={onClickRead}
            onSelectItem={onSelectItem}
            onSelectAll={selectAllMsg}
          />
        ))
      ) : (
        <div>No Existen mensajes</div>
      )}
    </>
  );
};

export default MessageList;
