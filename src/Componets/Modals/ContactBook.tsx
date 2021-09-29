/** @format */

import React, { useState, useEffect } from 'react';

import { Window, WindowActionsBar } from '@progress/kendo-react-dialogs';
import { Button, TextField, IconButton } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { TableContainer, Table, TableCell, TableBody, TableRow } from '@material-ui/core';
import { Splitter, SplitterOnChangeEvent } from '@progress/kendo-react-layout';
import { ContactBookProps } from '../../interfaces/mail.interface';
import { Card, CardHeader, CardContent, CardActions } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ButtonGroup, Grid } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import imgContact from '../../imgs/contact.png';
import { IContacts } from '../../interfaces/mail.interface';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		Button: {
			textTransform: 'capitalize',
		},
		Content: {
			padding: '2 2 2 2',
		},
	})
);

/**
 * Filtra la Lista de Contacto a partir del parametro filter
 * @param filter: el Nombre del contacto para filtrar
 * @returns Nueva lista de Contacto que cumplan con Filter
 */
function searching(filter: string) {
	return function (x: any) {
		return x.nombre.toLowerCase().includes(filter) || !filter;
	};
}

/**
 * Devuelve un color aleatorio para cada contacto
 * @param string
 * @returns
 */
function stringToColor(string: string) {
	let hash = 0;
	let i;

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = '#';

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.substr(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
}

/**
 * Obtiene las Iniciales de nombre del contacto
 * @param name: Nombre del Contacto
 * @returns devuelve las iniciales del Contacto
 */
function stringAvatar(name: string) {
	return {
		children: name.split(' ')[0][0] + name.split(' ')[1][0],
		//children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
	};
}

const ContactBook: React.FC<ContactBookProps> = ({ openContactBook, ContactData }) => {
	const styles = useStyles();

	const [data, setData] = useState<IContacts[]>([]);
	const [filter, setFilter] = useState('');
	const [contactSelect, setContactSelect] = useState<IContacts[]>([]);

	const [panes, setPanes] = React.useState<Array<any>>([
		{ size: '30%', min: '250px', collapsible: false },
		{},
		{},
	]);

	useEffect(() => {
		setData(ContactData);
	}, [ContactData]);

	const onChange = (event: SplitterOnChangeEvent) => {
		setPanes(event.newState);
	};

	const closeModal = () => {
		openContactBook(false);
	};

	const ContactDetails = (id: number) => {
		setContactSelect(data.filter((c) => c.idContact === id));
	};

	return (
		<Window
			title={'Contactos'}
			onClose={closeModal}
			initialHeight={560}
			initialWidth={800}
			modal
			draggable>
			<div className={styles.Content}>
				<Splitter style={{ height: 410, width: 765 }} panes={panes} onChange={onChange}>
					<div className='pane-content'>
						{data && (
							<TextField
								fullWidth
								label='Buscar Contacto'
								id='contact-search'
								variant='filled'
								size='small'
								onChange={(e) => setFilter(e.target.value)}
							/>
						)}
						<TableContainer component={Paper}>
							<Table size='small'>
								<TableBody>
									{data.filter(searching(filter)).map((row) => (
										<TableRow hover key={row.idContact}>
											<TableCell
												onClick={() => {
													ContactDetails(row.idContact);
												}}>
												{row.nombre}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
					<div className='pane-content'>
						{contactSelect.length > 0 ? (
							<Paper style={{ margin: 'auto', maxWidth: 510 }}>
								<Grid container spacing={1}>
									<Grid item>
										<img src={imgContact} alt={''} height='100' width='100' />
									</Grid>
									<Grid item xs={12} sm container>
										<Grid item xs container direction='column' spacing={1}>
											<Grid item xs>
												<Typography gutterBottom variant='h5' component='div'>
													<b>{contactSelect[0]['nombre']}</b>
												</Typography>
												<Typography variant='body2' gutterBottom>
													Full resolution 1920x1080 • JPEG
												</Typography>
												<Typography variant='body2'>ID: 1030114</Typography>
											</Grid>
											<Grid item>
												<Typography style={{ cursor: 'pointer' }} variant='body2'>
													Remove
												</Typography>
											</Grid>
										</Grid>
										<Grid item>
											<Typography variant='subtitle1' component='div'></Typography>
										</Grid>
									</Grid>
								</Grid>
							</Paper>
						) : (
							<b>Seleccione un Contacto</b>
						)}
					</div>
				</Splitter>
			</div>
			<WindowActionsBar layout='end'>
				<Button type='button' className={styles.Button} onClick={closeModal}>
					Cerrar
				</Button>
			</WindowActionsBar>
		</Window>
	);
};

export default ContactBook;
