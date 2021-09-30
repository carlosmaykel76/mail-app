/** @format */

import React, { useState, useEffect } from 'react';

import { Window, WindowActionsBar } from '@progress/kendo-react-dialogs';
import { Button, TextField, IconButton } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { TableContainer, Table, TableCell, TableBody, TableRow, Tooltip } from '@material-ui/core';
import { Splitter, SplitterOnChangeEvent } from '@progress/kendo-react-layout';
import { ContactBookProps } from '../../interfaces/mail.interface';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ButtonGroup, Grid } from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import imgContact from '../../imgs/contact.png';
import imgContactos from '../../imgs/contactos.png';
import { IContacts } from '../../interfaces/mail.interface';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		Button: {
			textTransform: 'capitalize',
		},
		Content: {
			padding: '2 2 2 2',
		},
		paper: {
			padding: theme.spacing(2),
			color: theme.palette.text.secondary,
			textAlign: 'center',
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

const ContactBook: React.FC<ContactBookProps> = ({ openContactBook, ContactData, openCompose }) => {
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

	const composeMail = (rNombre: string, rEmail: string) => {
		openCompose(true, 'Nuevo Mensaje', true, [{ idContact: 1, nombre: rNombre, email: rEmail }]);
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
				<Splitter style={{ height: 410, width: 760 }} panes={panes}>
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
							<>
								<Paper style={{ margin: 'auto', maxWidth: 510, height: 400 }}>
									<Grid container spacing={1}>
										<Grid item>
											<img src={imgContact} alt={''} height='100' width='100' />
										</Grid>
										<Grid item xs={12} sm container>
											<Grid item xs container direction='column' spacing={1}>
												<Grid item xs>
													<Typography gutterBottom variant='h5' component='div'>
														<b>{contactSelect[0].nombre}</b>
													</Typography>
													<Typography variant='body2' gutterBottom>
														{contactSelect[0].empresaPuesto + ' - ' + contactSelect[0].empresaDpto}
													</Typography>
													<div>
														<ButtonGroup size='small'>
															<Tooltip title='Nuevo Mensaje'>
																<IconButton>
																	<EmailIcon
																		color='primary'
																		onClick={() =>
																			composeMail(contactSelect[0].nombre, contactSelect[0].email)
																		}
																	/>
																</IconButton>
															</Tooltip>
															<Tooltip title='Editar Contacto'>
																<IconButton>
																	<EditIcon
																		onClick={() =>
																			composeMail(contactSelect[0].nombre, contactSelect[0].email)
																		}
																	/>
																</IconButton>
															</Tooltip>
															<Tooltip title='Delete Contacto'>
																<IconButton>
																	<DeleteIcon
																		onClick={() =>
																			composeMail(contactSelect[0].nombre, contactSelect[0].email)
																		}
																	/>
																</IconButton>
															</Tooltip>
														</ButtonGroup>
													</div>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
									<Typography variant='h6'>Información del Contacto</Typography>
									<Grid container>
										<Grid
											item
											xs={6}
											direction='column'
											style={{ borderRight: 'solid 2px #727272' }}>
											<Typography variant='caption' style={{ color: '#505050' }}>
												Correo Electronico
											</Typography>
											<Typography variant='body2' gutterBottom>
												{contactSelect[0].email}
											</Typography>
											<Typography variant='caption' style={{ color: '#505050' }}>
												Chatear
											</Typography>
											<Typography variant='body2' gutterBottom>
												{contactSelect[0].email}
											</Typography>
										</Grid>
										<Grid item xs={6} direction='column'>
											<div style={{ marginLeft: 10 }}>
												<Typography variant='caption' style={{ color: '#505050' }}>
													Ubicación de la oficina
												</Typography>
												<Typography variant='body2' gutterBottom>
													{contactSelect[0].locOficina}
												</Typography>
												<Typography variant='caption' style={{ color: '#505050' }}>
													Puesto
												</Typography>
												<Typography variant='body2' gutterBottom>
													{contactSelect[0].empresaPuesto}
												</Typography>
												<Typography variant='caption' style={{ color: '#505050' }}>
													Departamento
												</Typography>
												<Typography variant='body2' gutterBottom>
													{contactSelect[0].empresaDpto}
												</Typography>
												<Typography variant='caption' style={{ color: '#505050' }}>
													Dirección de la Empresa
												</Typography>
												<Typography variant='body2' gutterBottom>
													{contactSelect[0].empresaDireccion}
												</Typography>
											</div>
										</Grid>
									</Grid>
								</Paper>
							</>
						) : (
							<Grid container>
								<Grid item xs={12} className={styles.paper}>
									<img src={imgContactos} alt={''} height='60' width='60' />
									<h4>Seleccione un contacto para visualizarlo aquí</h4>
								</Grid>
							</Grid>
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
