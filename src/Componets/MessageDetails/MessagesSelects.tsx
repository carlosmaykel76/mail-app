/** @format */

import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import svgMsgSelected from '../../imgs/messageSelected.svg';
import DeleteIcon from '@material-ui/icons/Delete';
import FlagIcon from '@material-ui/icons/Flag';
import EmailIcon from '@material-ui/icons/Email';

interface MessagesSelectsProps {
	countSelect: number;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			color: theme.palette.text.secondary,
			textAlign: 'center',
		},
		group: {
			height: '30px',
		},
		bt: {
			textTransform: 'capitalize',
		},
		list: {
			listStyle: 'none',
			padding: '0px',
		},
	})
);

const MessagesSelects: React.FC<MessagesSelectsProps> = ({ countSelect }) => {
	const styles = useStyles();
	return (
		<Grid container>
			<Grid item xs={12} className={styles.paper}>
				<img src={svgMsgSelected} alt={''} />
				<h4>{countSelect} elementos seleccionados</h4>
				<ul className={styles.list}>
					<li className={styles.list}>
						<Button startIcon={<DeleteIcon />} className={styles.bt}>
							Eliminar
						</Button>
					</li>
					<li>
						<Button startIcon={<FlagIcon />} className={styles.bt}>
							Marcar
						</Button>
					</li>
					<li>
						<Button startIcon={<EmailIcon />} className={styles.bt}>
							Marcar como leído
						</Button>
					</li>
					<li>
						<Button startIcon={<DeleteIcon />} className={styles.bt}>
							Marcar como no leído
						</Button>
					</li>
					<li>
						<Button startIcon={<DeleteIcon />} className={styles.bt}>
							Mover
						</Button>
					</li>
					<li>
						<Button startIcon={<DeleteIcon />} className={styles.bt}>
							Cancelar
						</Button>
					</li>
				</ul>
			</Grid>
		</Grid>
	);
};

export default MessagesSelects;
