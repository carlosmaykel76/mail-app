/** @format */

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { relative } from 'path';
import { Grid, TextField, MenuItem, InputLabel, Select } from '@material-ui/core';
import { ServerConfigProps } from '../../interfaces/mail.interface';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			width: '100%',
			height: '700',
			background: 'white',
			padding: '2px, 4px, 24px, 4px',
			//padding: 'top right bottom left'
		},
		textfield: {
			padding: '0pt 0pt 5pt 0pt',
			width: '100%',
		},
		CardHeader: {
			padding: '0pt 0pt 5pt 0pt',
		},
		menuitem: {
			zIndex: theme.zIndex.modal + 102,
		},
	})
);

const cifrados = [
	{
		value: 'auto',
		label: 'Automatico',
	},
	{
		value: 'SSL/TLS',
		label: 'SSL',
	},
	{
		value: 'STARTTLS',
		label: 'STARTTLS',
	},
];

const ServerConfig: React.FC<ServerConfigProps> = (editConfig, configSelect) => {
	const styles = useStyles();
	const [imapCifrado, setImapCifrado] = React.useState('auto');
	const [smtpCifrado, setSmtpCifrado] = React.useState('auto');
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [newEdit, setNewEdit] = React.useState(true);

	const handleChangeImap = (event: React.ChangeEvent<HTMLInputElement>) => {
		setImapCifrado(event.target.value);
	};

	const handleChangeSmtp = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSmtpCifrado(event.target.value);
	};

	return (
		<>
			<Grid item xs={6}>
				<Card variant='outlined'>
					<CardContent>
						<label>
							<b>IMAP (Recepción)</b>
						</label>
						<TextField
							label='Servidor'
							id='imap_server'
							variant='outlined'
							size='small'
							//value={editConfig ? configSelect["imapServer"] : ""}
							className={styles.textfield}
							disabled={newEdit}
						/>
						<TextField
							label='Puerto'
							id='imap_port'
							variant='outlined'
							size='small'
							className={styles.textfield}
							disabled={newEdit}
						/>
						<TextField
							label='Usuario'
							id='imap_user'
							variant='outlined'
							size='small'
							className={styles.textfield}
							disabled={newEdit}
						/>
						<TextField
							label='Contraseña'
							id='imap_pwd'
							variant='outlined'
							size='small'
							className={styles.textfield}
							disabled={newEdit}
						/>
						<TextField
							id='imap_cifrado'
							select
							label='Cifrado'
							value={imapCifrado}
							onChange={handleChangeImap}
							variant='outlined'
							size='small'
							className={styles.textfield}>
							{cifrados.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={6}>
				<Card variant='outlined'>
					<CardContent>
						<label>
							<b>SMTP (Envío)</b>
						</label>
						<TextField
							label='Servidor'
							id='smtp_server'
							variant='outlined'
							size='small'
							className={styles.textfield}
							disabled={editConfig === false ? true : false}
						/>
						<TextField
							label='Puerto'
							id='smtp_port'
							variant='outlined'
							size='small'
							className={styles.textfield}
							disabled={editConfig ? true : false}
						/>
						<TextField
							label='Usuario'
							id='smtp_user'
							variant='outlined'
							size='small'
							className={styles.textfield}
							disabled={editConfig ? true : false}
						/>
						<TextField
							label='Contraseña'
							id='smtp_pwd'
							variant='outlined'
							size='small'
							className={styles.textfield}
							disabled={editConfig ? true : false}
						/>
						<TextField
							id='smtp_cifrado'
							select
							label='Cifrado'
							value={smtpCifrado}
							onChange={handleChangeSmtp}
							variant='outlined'
							size='small'
							className={styles.textfield}
							style={{
								zIndex: 99999999999999,
							}}>
							{cifrados.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</CardContent>
				</Card>
			</Grid>
		</>
	);
};

export default ServerConfig;
