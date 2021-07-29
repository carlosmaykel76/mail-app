import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TableRow, TableCell, Checkbox} from '@material-ui/core';

import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import AttachFileIcon from '@material-ui/icons/AttachFile';

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
  cellIcon:{
    width: '1%',
  }

});

const MessagesItem = ({key, Msg, onClick, onSelect}) => {

  const styles = useStyles();

  const [selected, setSelected] = useState([]);

  const handleClick = (event, id) => {

    alert('click en el elemento');
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;
  const isItemSelected = isSelected(Msg.id);
  const labelId = `enhanced-table-checkbox-${Msg.id}`;

  return(
   
    <TableRow key={key} hover >
      <TableCell padding="checkbox">
        <Checkbox size='small'                  
          checked={isItemSelected}
          inputProps={{ 'aria-labelledby': labelId }}            
          onClick={(event) => handleClick(event, Msg.id)}
        />
      </TableCell>
      <TableCell padding="checkbox">
        {(Msg.importance==='alta')?<PriorityHighIcon fontSize="small" color="primary"/>:''}
      </TableCell>
      <TableCell padding="checkbox" >
        {(Msg.attached)?<AttachFileIcon fontSize="small" color="primary"/>:''}
      </TableCell>
      <TableCell onClick={(event) => onSelect(event, Msg.id)} className={(Msg.read)?styles.unread:styles.read}>
        {Msg.personfor}
      </TableCell>
      <TableCell onClick={(event) => onSelect(event, Msg.id)} className={(Msg.read)?styles.unread:styles.read}>
        {Msg.subject}
      </TableCell>
      <TableCell onClick={(event) => onSelect(event, Msg.id)} className={(Msg.read)?styles.unread:styles.read}>
        {Msg.sent}
      </TableCell>
      <TableCell onClick={(event) => onSelect(event, Msg.id)} className={(Msg.read)?styles.unread:styles.read}>
        {Msg.size}
      </TableCell>              
    </TableRow>
  );
}

export default MessagesItem
