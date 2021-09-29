/** @format */

import React from 'react';
import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import contactData from '../../data/ContactData';
import KendoEditor from '../KendoEditor';
import SearchContact from '../Modals/SearchContacts';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			width: '99%',
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

const Compose = () => {
	const styles = useStyles();
	const [showCC, setShowCC] = React.useState(true);
	const [viewContacts, setViewContacts] = React.useState(false);

	const openContactModel = () => {
		setViewContacts(!viewContacts);
	};

	return (
		<div className={styles.modal}>
			<Grid container spacing={1}>
				<Grid item xs={1}>
					<Button className={styles.bt} onClick={openContactModel}>
						Para:
					</Button>
				</Grid>
				<Grid item xs={11}>
					<Autocomplete
						disablePortal
						multiple
						limitTags={2}
						id='to'
						options={contactData}
						getOptionLabel={(option) => option.nombre + ' (' + option.email + ')'}
						//defaultValue={flag ? [contact[0]] : []}
						renderInput={(params) => <TextField {...params} size='small' />}
					/>
				</Grid>
				{showCC ? (
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
								//defaultValue={flag ? [contact[0]] : []}
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
	);
};

export default Compose;
