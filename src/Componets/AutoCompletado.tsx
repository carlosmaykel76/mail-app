/** @format */

import React from 'react';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import ContactData from '../data/ContactData';

function AutoCompletado() {
	return (
		<>
			<Autocomplete
				multiple
				id='cResponseMail'
				options={ContactData}
				getOptionLabel={(option) => option.nombre + ' (' + option.email + ')'}
				renderInput={(params) => (
					<TextField
						{...params}
						variant='standard'
						label='Multiple values'
						placeholder='Favorites'
					/>
				)}
			/>
		</>
	);
}

export default AutoCompletado;
