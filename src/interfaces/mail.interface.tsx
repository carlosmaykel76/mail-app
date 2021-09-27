/** @format */

export interface IMessage {
	id: number;
	importance: string;
	attached: boolean;
	personfor: string;
	email: string;
	subject: string;
	sent: string;
	size: string;
	read: boolean;
	marked: boolean;
	isdelete: boolean;
	body: string;
}

export interface IAccountMail {
	id: number;
	fav: boolean;
	cuenta: string;
	usuario: string;
	servidor: string;
	imapServer: string;
	imapPort: number;
	imapUser: string;
	imapPwd: string;
	imapCifrado: string;
	smtpServer: string;
	smtpPort: number;
	smtpUser: string;
	smtpPwd: string;
	smptCifrado: string;
}

export interface IFilter {
	id: number;
	value: string;
}

export interface IFilterMessagesProps {
	onClick: (id: number) => void;
}

export interface IContacts {
	idContact: number;
	Avatar?: string;
	nombre: string;
	email: string;
	empresaPuesto?: string;
	empresaDpto?: string;
	empresaDireccion?: string;
}

export interface ToolbarProps {
	openCompose: (n: boolean, t: string, f: boolean) => void;
	openSetting: (n: boolean) => void;
}

export interface IMessageDetailsProps {
	countSelect: number;
	msg: Array<IMessage>;
	openCompose: (n: boolean, t: string, f: boolean) => void;
}

export interface IMessageListProps {
	dataInbox: Array<IMessage>;
	onFilterInbox: (id: number) => void;
	onSelectItem: (id: number) => void;
	onClickRead: (event: React.MouseEvent<unknown>, id: number) => void;
	onSelectAll: (countSelect: number, listId: number[]) => void;
	onDeleteMsgs: (idMessage: number) => void;
}

export interface ComponseFormProps {
	openCompose: (n: boolean, t: string, f: boolean) => void;
	titleModal: string;
	modeResponse: boolean;
	msg: Array<IMessage>;
	contact: Array<IContacts>;
}

export interface contactModalProps {
	openContacts: (n: boolean) => void;
}

export interface DataViewProps {
	dataList: Array<IAccountMail>;
	onSelect: (id: number) => void;
}

export interface IDataView {
	id: number;
	fav: boolean;
	cuenta: string;
	usuario: string;
	servidor: string;
}

export interface ServerConfigProps {
	editConfig: boolean;
	configSelect: Array<IAccountMail>;
}

export interface SettingMailProps {
	closeSetting: (isOpen: boolean) => void;
}

export interface ToolBarSettingProps {
	closeSetting: (n: boolean) => void;
	openWarning: (w: boolean, title: string, body: string) => void;
	isSelect: boolean;
}

export interface MailAccountProps {
	countMsg: number;
	countRead: number;
	countDelete: number;
	showFolderMessage: (folder: string) => void;
}

export interface AllCollapseProps {
	countMessage: number;
	countRead: number;
	countDelete: number;
	showFolder: (folder: string) => void;
}
