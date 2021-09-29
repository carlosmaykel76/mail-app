/** @format */

import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ToolbarProps } from '../../interfaces/mail.interface';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import SettingsIcon from '@material-ui/icons/Settings';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		width: '100%',
		height: '32px',
		background: 'LightGray',
		border: '1px solid #000',
		padding: '2px 0px 0px 0px',
		//padding: 'top right bottom left'
	},
	toolbarDer: {
		display: 'flex',
		//border: "1px solid black",

		justifyContent: 'space-around',
		alignItems: 'center',
		//alignItems: "center"
	},
	textfield: {
		width: '100%',
	},
	button: {
		textTransform: 'capitalize',
	},
	group: {
		height: '25px',
	},
}));

const Toolbar: React.FC<ToolbarProps> = ({ openCompose, openSetting, openContactBook }) => {
	const styles = useStyles();

	const openComposeMail = () => {
		openCompose(true, 'Nuevo Mensaje', false);
	};

	const showSetting = () => {
		openSetting(true);
	};

	const openContactList = () => {
		openContactBook(true);
	};

	return (
		<div className={styles.toolbar}>
			<Button
				startIcon={<EmailIcon />}
				onClick={openComposeMail}
				variant='contained'
				color='primary'
				className={styles.button}
				disableElevation
				size='small'>
				Mensaje nuevo
			</Button>{' '}
			<Button
				startIcon={<SettingsIcon />}
				onClick={showSetting}
				variant='outlined'
				color='default'
				className={styles.button}
				disableElevation
				size='small'>
				Configuración
			</Button>{' '}
			<Button
				startIcon={<PermContactCalendarIcon />}
				onClick={openContactList}
				variant='outlined'
				color='default'
				className={styles.button}
				disableElevation
				size='small'>
				Contactos
			</Button>
		</div>
	);
};

export default Toolbar;
