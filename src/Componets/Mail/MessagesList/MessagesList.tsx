import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, Table, TableBody, TableCell } from "@material-ui/core";
import { TableContainer, TableHead, TableRow } from "@material-ui/core";

import AttachFileIcon from "@material-ui/icons/AttachFile";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";

import MessageItem from "../Message/MessageItem";
import IMessage from "../../mail.interface";

interface IMessageListProps {
  dataList: Array<IMessage>;
  onClick: (event: React.MouseEvent<unknown>, id: number) => void;
  onSelect: (event: React.MouseEvent<unknown>, id: number) => void;
}

const useStyles = makeStyles({
  container: {
    maxHeight: 440,
  },
  cellIcon: {
    width: "1%",
  },
});

const MessageList: React.FC<IMessageListProps> = ({
  dataList,
  onClick,
  onSelect,
}) => {
  const styles = useStyles();

  return (
    <>
      <TableContainer className={styles.container}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  size="small"
                  inputProps={{ "aria-label": "select all desserts" }}
                  onClick={(event) => onClick(event, 0)}
                />
              </TableCell>
              <TableCell padding="checkbox">
                <PriorityHighIcon fontSize="small" />
              </TableCell>
              <TableCell padding="checkbox">
                <AttachFileIcon fontSize="small" />
              </TableCell>
              <TableCell>
                <b>De</b>
              </TableCell>
              <TableCell>
                <b>Asunto</b>
              </TableCell>
              <TableCell>
                <b>Recibido</b>
              </TableCell>
              <TableCell>
                <b>Tamaño</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList.length > 0 ? (
              dataList.map((item: IMessage) => (
                <MessageItem
                  key={item.id}
                  Msg={item}
                  onClick={onClick}
                  onSelect={onSelect}
                />
              ))
            ) : (
              <TableRow>
                <TableCell padding="checkbox"></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MessageList;
