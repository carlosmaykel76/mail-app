/** @format */

import React from 'react';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { MenuList, MenuItem, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { listFilter } from '../Componets/parameters';
import { IFilter, IFilterMessagesProps } from '../interfaces/mail.interface';

import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
		},
		paper: {
			marginRight: theme.spacing(1),
		},
		button: {
			textTransform: 'capitalize',
		},
	})
);

const FilterMessages: React.FC<IFilterMessagesProps> = ({ onClick }) => {
	const styles = useStyles();
	const [open, setOpen] = React.useState(false);

	const anchorRef = React.useRef<HTMLButtonElement>(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: React.MouseEvent<EventTarget>) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return;
		}

		setOpen(false);
	};

	const handleClickFilter = (event: React.MouseEvent<EventTarget>, id: number, filter: string) => {
		onClick(id);
		setOpen(false);
	};

	function handleListKeyDown(event: React.KeyboardEvent) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	return (
		<div className={styles.root}>
			<Button
				ref={anchorRef}
				aria-controls={open ? 'menu-list-grow' : undefined}
				aria-haspopup='true'
				onClick={handleToggle}
				className={styles.button}
				variant='outlined'
				size='small'
				color='primary'>
				Filtro
			</Button>
			<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
						}}>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown}>
									{listFilter.map((f: IFilter) => (
										<MenuItem onClick={(event) => handleClickFilter(event, f.id, f.value)}>
											{f.value}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</div>
	);
};

export default FilterMessages;
