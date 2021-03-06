/** @format */

import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { MailAccountProps } from '../../interfaces/mail.interface';
import FolderList from '../../data/FolderMail';

declare module 'csstype' {
	interface Properties {
		'--tree-view-color'?: string;
		'--tree-view-bg-color'?: string;
	}
}

type StyledTreeItemProps = TreeItemProps & {
	bgColor?: string;
	color?: string;
	labelIcon: React.ElementType<SvgIconProps>;
	labelInfo: string;
	labelText: string;
};

const useTreeItemStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			color: theme.palette.text.secondary,
			'&:hover > $content': {
				backgroundColor: theme.palette.action.hover,
			},
			'&:focus > $content, &$selected > $content': {
				backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
				color: 'var(--tree-view-color)',
			},
			'&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
				backgroundColor: 'transparent',
			},
		},
		content: {
			color: theme.palette.text.secondary,
			borderTopRightRadius: theme.spacing(1),
			borderBottomRightRadius: theme.spacing(1),
			paddingRight: theme.spacing(1),
			fontWeight: theme.typography.fontWeightMedium,
			'$expanded > &': {
				fontWeight: theme.typography.fontWeightRegular,
			},
		},
		group: {
			marginLeft: 0,
			'& $content': {
				paddingLeft: theme.spacing(1),
			},
		},
		expanded: {},
		selected: {},
		label: {
			fontWeight: 'inherit',
			color: 'inherit',
		},
		labelRoot: {
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(0.5, 0),
		},
		labelIcon: {
			marginRight: theme.spacing(1),
		},
		labelText: {
			fontWeight: 'inherit',
			flexGrow: 1,
		},
	})
);

function StyledTreeItem(props: StyledTreeItemProps) {
	const classes = useTreeItemStyles();
	const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

	return (
		<TreeItem
			label={
				<div className={classes.labelRoot}>
					<LabelIcon color='inherit' className={classes.labelIcon} />
					<Typography variant='body2' className={classes.labelText}>
						{labelText}
					</Typography>
					<Typography variant='caption' color='inherit'>
						{labelInfo}
					</Typography>
				</div>
			}
			style={{
				'--tree-view-color': color,
				'--tree-view-bg-color': bgColor,
			}}
			classes={{
				root: classes.root,
				content: classes.content,
				expanded: classes.expanded,
				selected: classes.selected,
				group: classes.group,
				label: classes.label,
			}}
			{...other}
		/>
	);
}

const useStyles = makeStyles(
	createStyles({
		root: {
			height: '100%',
			flexGrow: 1,
			maxWidth: '100%',
		},
	})
);

const MailAccount: React.FC<MailAccountProps> = ({
	countMsg,
	countRead,
	countDelete,
	showFolderMessage,
}) => {
	const styles = useStyles();

	const handleClick = (idFolder: number) => {
		showFolderMessage(idFolder);
	};

	return (
		<TreeView
			className={styles.root}
			defaultExpanded={['3']}
			defaultCollapseIcon={<ArrowDropDownIcon />}
			defaultExpandIcon={<ArrowRightIcon />}
			defaultEndIcon={<div style={{ width: 24 }} />}>
			{FolderList.map((f) => (
				<StyledTreeItem
					nodeId={f.idFolder.toString()}
					labelText={f.Folder}
					labelIcon={f.icons}
					labelInfo={
						f.Folder.includes('Entrada') ? countRead.toString() + '/' + countMsg.toString() : ''
					}
					onClick={() => {
						handleClick(f.idFolder);
					}}
				/>
			))}
		</TreeView>
	);
};

export default MailAccount;
