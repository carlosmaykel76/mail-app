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

const MessagesItem = ({listMessage, onClick, onSelect}) => {

  const styles = useStyles();

  const [selected, setSelected] = useState([]);

  const handleClick = (event, id) => {
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

    console.log(newSelected)

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return(
    listMessage.map(item =>{

      const isItemSelected = isSelected(item.id);
      const labelId = `enhanced-table-checkbox-${item.id}`;

      return(     

        <TableRow key={item.id} hover >
        <TableCell padding="checkbox">
          <Checkbox size='small'                  
            checked={isItemSelected}
            inputProps={{ 'aria-labelledby': labelId }}            
            onClick={(event) => handleClick(event, item.id)}
          />
        </TableCell>
        <TableCell padding="checkbox">
          {(item.importance==='alta')?<PriorityHighIcon fontSize="small" color="primary"/>:''}
        </TableCell>
        <TableCell padding="checkbox" >
          {(item.attached)?<AttachFileIcon fontSize="small" color="primary"/>:''}
        </TableCell>
        <TableCell onClick={(event) => onSelect(event, item.id)} className={(item.read)?styles.unread:styles.read}>
          {item.personfor}
        </TableCell>
        <TableCell onClick={(event) => onSelect(event, item.id)} className={(item.read)?styles.unread:styles.read}>
          {item.subject}
        </TableCell>
        <TableCell onClick={(event) => onSelect(event, item.id)} className={(item.read)?styles.unread:styles.read}>
          {item.sent}
        </TableCell>
        <TableCell onClick={(event) => onSelect(event, item.id)} className={(item.read)?styles.unread:styles.read}>
          {item.size}
        </TableCell>              
      </TableRow>

      );
    })
    
  );
}

export default MessagesItem
