import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import MessageData from '../../../data/MessageData';
import MessageItem from '../Message/MessageItem';

const useStyles = makeStyles({
    container: {
      maxHeight: 440, 
    },
  });

const MessageList = () => {

  const [itemSelectState, setItemSelectState] = useState(null)
  const styles = useStyles();

  return (
    <TableContainer className={styles.container}>
      <Table size="small">
        <TableHead>
          <TableRow>
                <TableCell padding="checkbox">
                <Checkbox size='small'                  
                  inputProps={{ 'aria-label': 'select all desserts' }}
                  onClick={handleOnClick}
                />
              </TableCell>
              <TableCell><PriorityHighIcon fontSize="small"/></TableCell>
              <TableCell><AttachFileIcon fontSize="small"/></TableCell>
              <TableCell>personfor</TableCell>
              <TableCell>subject</TableCell>
              <TableCell>sent</TableCell>
              <TableCell>size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>   
          {MessageData.map((item) =>(
            /*<MessageItem  {...item} />*/
            <MessageItem 
              id={item.id}
              importance = {item.importance}
              attached = {item.attached}
              personfor = {item.personfor}
              subject = {item.subject}
              sent = {item.sent}
              size = {item.size}
              read = {item.read}
            />
            
          ))}
        </TableBody>  
      </Table>
    </TableContainer>
      
  );
}

export default MessageList;
