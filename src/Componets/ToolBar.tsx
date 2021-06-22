import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Send } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  
    title: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Send />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Send />}
          > Send
          </Button>
       </Toolbar>
      </AppBar>
    </div>
  );
}
