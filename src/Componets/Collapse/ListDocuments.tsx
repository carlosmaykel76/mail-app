/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
	root: {
		height: 100,
		flexGrow: 1,
		maxWidth: 300,
	},
});

const ListDocuments = () => {
	const styles = useStyles();

	return (
		<TreeView
			className={styles.root}
			defaultCollapseIcon={<ExpandMoreIcon />}
			defaultExpandIcon={<ChevronRightIcon />}
			multiSelect>
			<TreeItem nodeId='1' label='Personal'>
				<TreeItem nodeId='2' label='Documentos' />
			</TreeItem>
		</TreeView>
	);
};

export default ListDocuments;
