/** @format */

import React from 'react';
import { Window, WindowActionsBar } from '@progress/kendo-react-dialogs';
import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import KendoEditor from '../KendoEditor';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AttachModal from './AttachModal';
import contactData from '../../data/ContactData';
import ContactModal from './ContactModal';
import { ComponseFormProps } from '../../interfaces/mail.interface';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			width: '100%',
			height: '100%',
			padding: '16px, 24px, 24px',
		},
		TextField: {
			width: '100%',
		},
		paper: {
			padding: theme.spacing(2),
			justify: 'flex-start',
			color: theme.palette.text.secondary,
		},
		bt: {
			textTransform: 'capitalize',
		},
		BButton: {
			justify: 'center',
		},
	})
);

const ComponseForm: React.FC<ComponseFormProps> = ({
	openCompose,
	titleModal,
	modeResponse,
	msg,
	contact,
}) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [visible, setVisible] = React.useState(true);
	const [viewAttach, setViewAttach] = React.useState(false);
	const [viewContacts, setViewContacts] = React.useState(false);
	const [showCCo, setShowCCo] = React.useState(false);
	const styles = useStyles();
	// eslint-disable-next-line
	//const contactResponse = [{ nombre: '', email: "" }];

	const closeComposeDialog = () => {
		openCompose(false, '', false);
	};

	const openAttachDialog = () => {
		setViewAttach(!viewAttach);
	};

	const openContactModel = () => {
		setViewContacts(!viewContacts);
	};

	const showTextCCo = () => {
		setShowCCo(true);
	};

	return (
		<>
			<Window
				title={titleModal}
				onClose={closeComposeDialog}
				initialHeight={600}
				initialWidth={800}
				modal
				resizable
				draggable>
				<div className={styles.modal}>
					<Grid container spacing={1}>
						<Grid item xs={1}>
							<Button className={styles.bt} onClick={openContactModel}>
								Para:
							</Button>
						</Grid>
						<Grid item xs={10}>
							<Autocomplete
								disablePortal
								multiple
								limitTags={2}
								id='to'
								options={contactData}
								getOptionLabel={(option) => option.nombre + ' (' + option.email + ')'}
								defaultValue={modeResponse ? [contact[0]] : []}
								renderInput={(params) => <TextField {...params} size='small' />}
							/>
						</Grid>
						<Grid item xs={1}>
							<Button className={styles.bt} onClick={showTextCCo}>
								CCo
							</Button>
						</Grid>
						<Grid container spacing={1}>
							<Grid item xs={1}>
								<Button className={styles.bt} onClick={openContactModel}>
									CC:
								</Button>
							</Grid>
							<Grid item xs={11}>
								<Autocomplete
									disablePortal
									multiple
									limitTags={2}
									id='cc'
									options={contactData}
									getOptionLabel={(option) => option.nombre + ' (' + option.email + ')'}
									renderInput={(params) => <TextField {...params} size='small' />}
								/>
							</Grid>
						</Grid>
						{showCCo ? (
							<Grid container spacing={1}>
								<Grid item xs={1}>
									<Button className={styles.bt} onClick={openContactModel}>
										CCo:
									</Button>
								</Grid>
								<Grid item xs={11}>
									<Autocomplete
										disablePortal
										multiple
										limitTags={2}
										id='cco'
										options={contactData}
										getOptionLabel={(option) => option.nombre + ' (' + option.email + ')'}
										renderInput={(params) => <TextField {...params} size='small' />}
									/>
								</Grid>
							</Grid>
						) : (
							''
						)}
						<Grid item xs={1}>
							<label>Asunto:</label>
						</Grid>
						<Grid item xs={11}>
							<TextField id='subject' className={styles.TextField} size='small' />
						</Grid>
						<Grid item xs={12}>
							<KendoEditor />
						</Grid>
					</Grid>
				</div>
				<WindowActionsBar layout='end'>
					<Grid container spacing={1}>
						<Grid item xs>
							<Button
								className={styles.bt}
								variant='outlined'
								startIcon={<AttachFileIcon />}
								onClick={openAttachDialog}>
								Adjuntar
							</Button>
						</Grid>
						<Grid item xs style={{ display: 'flex', justifyContent: 'flex-end' }}>
							<button type='button' className='k-button' onClick={closeComposeDialog}>
								Cerrar
							</button>
							<button type='button' className='k-button k-primary' onClick={closeComposeDialog}>
								Enviar
							</button>
						</Grid>
					</Grid>
				</WindowActionsBar>
			</Window>
			<div>{viewAttach && <AttachModal openAttach={openAttachDialog} />}</div>
			<div>{viewContacts && <ContactModal openContacts={openContactModel} />}</div>
		</>
	);
};

export default ComponseForm;
