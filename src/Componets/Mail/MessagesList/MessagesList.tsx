import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import IMessage from "../../mail.interface";
import MessageItem from "../Message/MessageItem";
import WarningDialog from "../../Modals/WarningDialog";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Tooltip from "@material-ui/core/Tooltip";

interface IMessageListProps {
  dataList: Array<IMessage>;
  onClick: (event: React.MouseEvent<unknown>, id: number) => void;
  onSelect: (event: React.MouseEvent<unknown>, id: number) => void;
  onSelectAll: (countSelect: number, listIdMsg: Array<number[]>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "99%",
      height: "auto",
      backgroundColor: "#f5f5f5",
    },
  })
);

const MessageList: React.FC<IMessageListProps> = ({
  dataList,
  onClick,
  onSelect,
  onSelectAll,
}) => {
  const styles = useStyles();
  const initListIdMsg: Array<number[]> = [];
  const [viewDialog, setViewDialog] = useState(false);
  const [warningBody, setWarningBody] = useState("");
  const [warningTitle, setWarningTitle] = useState("Confirmación");
  const [selectAllMsg, SetSelectAllMsg] = useState(false);
  const [listIdMsg, setListIdMsg] = useState(initListIdMsg);

  const openWarningDialog = (w: boolean, title: string, body: string) => {
    setViewDialog(w);
    setWarningBody(body);
    setWarningTitle(title === "" ? warningTitle : title);
  };

  const handleChange = (event: any) => {
    if (event.target.checked === true) {
      SetSelectAllMsg(true);
      onSelectAll(dataList.length, listIdMsg);
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
                  onChange={(event) => handleChange(event)}
                />
              </Tooltip>
            </div>
          </Grid>
        </Grid>
      </Paper>
      {dataList.length > 0 ? (
        dataList.map((item: IMessage) => (
          <MessageItem
            msg={item}
            onSelect={onSelect}
            onChecker={onClick}
            onSelectAll={selectAllMsg}
          />
        ))
      ) : (
        <div>No Existen mensajes</div>
      )}
      <div>
        {viewDialog && (
          <WarningDialog
            titleDialog={warningTitle}
            BodyDialog={warningBody}
            closeWarning={openWarningDialog}
          />
        )}
      </div>
    </>
  );
};

export default MessageList;
