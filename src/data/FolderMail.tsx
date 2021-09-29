/** @format */
import { IFolderMail } from '../interfaces/mail.interface';
import EditIcon from '@material-ui/icons/Edit';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';

const FolderMail: Array<IFolderMail> = [
	{
		idFolder: 1,
		Folder: 'Bandeja de Entrada',
		isFavorita: false,
		icons: MailIcon,
	},
	{
		idFolder: 2,
		Folder: 'Borradores',
		isFavorita: false,
		icons: EditIcon,
	},
	{
		idFolder: 3,
		Folder: 'Enviado',
		isFavorita: false,
		icons: SendIcon,
	},
	{
		idFolder: 4,
		Folder: 'Elementos Eliminados',
		isFavorita: false,
		icons: DeleteIcon,
	},
];

export default FolderMail;
