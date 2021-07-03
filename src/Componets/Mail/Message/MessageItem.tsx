import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TableRow, TableCell, Checkbox} from '@material-ui/core';

import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import AttachFileIcon from '@material-ui/icons/AttachFile';

interface IData {
  id: number;
  importance: string;
  attached: boolean;
  personfor: string;
  subject: string;
  sent: string;
  size: string;
  read: boolean;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    
  },
  unread: {   
    fontWeight:'bold',
  },
  read: {   
    fontWeight:'normal',
  },

});
//:React.FC<IData>
const MessagesItem = (msg:IData) => {
  
  const styles = useStyles();

    return(        
      <TableRow key={msg.id} hover >
          <TableCell padding="checkbox">
            <Checkbox size='small'                    
              inputProps={{ 'aria-label': 'select all desserts' }}      
              id={msg.id}              
            />
          </TableCell>
          <TableCell>{(msg.importance==='alta')?<PriorityHighIcon fontSize="small" color="primary"/>:''}</TableCell>
          <TableCell>{(msg.attached)?<AttachFileIcon fontSize="small" color="primary"/>:''}</TableCell>
          <TableCell className={(msg.read)?styles.unread:styles.read}>{msg.personfor}</TableCell>
          <TableCell className={(msg.read)?styles.unread:styles.read}>{msg.subject}</TableCell>
          <TableCell className={(msg.read)?styles.unread:styles.read}>{msg.sent}</TableCell>
          <TableCell className={(msg.read)?styles.unread:styles.read}>{msg.size}</TableCell>              
      </TableRow>
    );
}

export default MessagesItem
