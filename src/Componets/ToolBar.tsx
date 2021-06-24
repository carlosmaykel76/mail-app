import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import DeleteIcon from '@material-ui/icons/Delete';
import MarkAsUnreadIcon from '@material-ui/icons/MarkunreadMailbox';
import { ButtonGroup, Button } from '@material-ui/core';
import {  makeStyles } from '@material-ui/core/styles';

interface Props {
  openCompose: (n: boolean) => void
}

const useStyles = makeStyles((theme) => ({
  toolbar:{
    width:'100%',
    height: '50px',
    background:'LightGray',
    border:'1px solid #000',
    padding: '16px 0px 0px 0px',
    //padding: 'top right bottom left'
  },
  textfield:{
      width: '100%'
  },
  bt:{
    textTransform:'capitalize',
  }
}))

const Toolbar:React.FC<Props> = ({openCompose}) => {
  const styles = useStyles();

  const openModal = () => {
    openCompose(true);
  }

  return (
    <div className={styles.toolbar}>
      <ButtonGroup>
        <Button
            className={styles.bt}
            variant="outlined"
            startIcon={<EmailIcon fontSize="large" />}
            onClick={ openModal }
        >
          Nuevo Mensaje
        </Button>
        <Button
          className={styles.bt}
          variant="outlined"
          disabled
          startIcon={<DeleteIcon/>}
        >
          Eliminar
        </Button>
         <Button
          className={styles.bt}
          variant="outlined"
          startIcon={<MarkAsUnreadIcon/>}
        >
          No Leido/Leido
        </Button>
      </ButtonGroup>
    </div>
  );


}

export default Toolbar;
