/** @format */

import React, { useState, useEffect } from 'react';
import { Splitter } from '@progress/kendo-react-layout';
import ToolBar from './Layout/ToolBar';
import ComponseForm from './Modals/ComponseForm';
import Collapse from './Collapse/AllCollapse';
import MessagesList from '../Componets/MessagesList/MessagesList';
import MessageDetails from '../Componets/MessageDetails/MessageDetails';
import SettingMail from '../Componets/Settings/SettingMail';
import MessageData from '../data/MessageData';
import { IMessage, IContacts } from '../interfaces/mail.interface';
import '../Styles/App.css';
import ContactBook from './Modals/ContactBook';
import ContactList from '../data/ContactData';
import ForderList from '../data/FolderMail';

const Inbox = () => {
	// eslint-disable-next-line
	const [mailBox, setMailBox] = useState<IMessage[]>(MessageData);
	const [inbox, setInbox] = useState<IMessage[]>(MessageData.filter((m) => m.isdelete === false));
	const [msgFolderActive, setMsgFolderActive] = useState<IMessage[]>(
		MessageData.filter((m) => m.isdelete === true)
	);
	const [isFolder, setIsFolder] = useState('');
	const [activeFolder, setActiveFolder] = useState('');
	const [countMsgInbox, setCountMsgInbox] = useState(0);
	const [countMsgRead, setCountMsgRead] = useState(0);
	const [countMsgDelete, setCountMsgDelete] = useState(
		mailBox.filter((m) => m.isdelete === true).length
	);
	const [vSetting, setVSetting] = useState(false);
	const [vCompose, setVCompose] = useState(false);
	const [vContactBook, setVContactBook] = useState(false);
	const [tituloModal, setTituloModal] = useState('Nuevo Mensaje');
	const [responseMail, setResponseMail] = useState(false);
	const [countSelect, setCountSelect] = useState(0);
	// eslint-disable-next-line
	const [listIdSelect, setListIdSelect] = useState<number[]>([]);
	const [itemSelectState, setItemSelectState] = useState<IMessage[]>([]);
	const [contact, setContact] = useState<IContacts[]>([]);

	const [panes, setPanes] = useState([
		{ size: '17%', min: '150px', collapsible: false },
		{},
		{ size: '40%', min: '20px', collapsible: true },
	]);

	const onChange = (event: any) => {
		setPanes(event.newState);
	};

	useEffect(() => {
		setCountMsgInbox(inbox.filter((m) => m.isdelete === false).length);
		setCountMsgRead(inbox.filter((m) => m.read === false && m.isdelete === false).length);
	}, [inbox]);

	/**
	 * Funcion que realiza el filtrado de la lista Inbox
	 * @param id del filtro que se selecciono
	 */
	const filterMessagesInbox = (idFilter: number) => {
		if (isFolder === '') {
			switch (idFilter) {
				case 2:
					setInbox(mailBox.filter((m) => m.read === false && m.isdelete === false));
					break;
				case 4:
					setInbox(mailBox.filter((m) => m.marked === true && m.isdelete === false));
					break;
				case 6:
					setInbox(mailBox.filter((m) => m.attached === true && m.isdelete === false));
					break;
				default:
					setInbox(mailBox);
					break;
			}
		} else {
			switch (idFilter) {
				case 2:
					setMsgFolderActive(mailBox.filter((m) => m.read === false && m.isdelete === true));
					break;
				case 4:
					setMsgFolderActive(mailBox.filter((m) => m.marked === true && m.isdelete === true));
					break;
				case 6:
					setMsgFolderActive(mailBox.filter((m) => m.attached === true && m.isdelete === true));
					break;
				default:
					setMsgFolderActive(mailBox);
					break;
			}
		}
	};

	/**
	 * Elimina el Mensaje que corresponde con el Id
	 * @param id del mensaje que se desea eliminar
	 */
	const deleteMenssage = (id: number) => {
		const newInbox = inbox.map((m) => {
			if (m.id === id) {
				m.isdelete = true;
				return m;
			}
			return m;
		});

		setCountMsgInbox(countMsgInbox - 1);
		setCountMsgDelete(countMsgDelete + 1);

		setInbox(newInbox.filter((m) => m.isdelete === false));
	};

	/**
	 * Marca los mensajes seleccionado como Leidos
	 * @param event
	 * @param id del mensaje que sera marcado como leido
	 */
	const handleClickRead = (event: React.MouseEvent<unknown>, id: number) => {
		const msg = MessageData.filter((item) => item.id === id);

		setItemSelectState(msg);

		const contactResponse = [{ idContact: 1, nombre: msg[0].personfor, email: msg[0].email }];
		setContact(contactResponse);

		const newInbox = inbox.map((m) => {
			if (m.id === id) {
				m.read = true;
				return m;
			}
			return m;
		});

		setCountMsgRead(countMsgRead - 1);
		setInbox(newInbox);
	};

	/**
	 * Lista los mensajes de la carpeta que viene como parametro
	 * @param folder de la cual se listaran los mensajes
	 */
	const changeFolderMail = (idFolder: number) => {
		setIsFolder(ForderList.filter((f) => f.idFolder === idFolder)[0].Folder);

		switch (idFolder) {
			case 4:
				setMsgFolderActive(mailBox.filter((m) => m.isdelete === true));
				break;
			default:
				setIsFolder('');
				break;
		}
	};

	/**
	 * Abre la Ventada Modal para componer un mensaje
	 * @param isOpen indica si se abre o no la ventana Modal
	 * @param titleModal Titulo de la ventana modal
	 * @param response indica el modo Respuesta a un mensaje
	 */
	const openComposeMail = (
		isOpen: boolean,
		titleModal: string,
		response: boolean,
		contactResponse: Array<IContacts>
	) => {
		setVCompose(isOpen);
		setTituloModal(titleModal);
		setResponseMail(response);
		setContact(contactResponse);
	};

	/**
	 * Abre la Ventada Modal para Configurar la Cuenta de mail
	 * @param isOpen indica si se abre o no la ventana Modal
	 */
	const openSettingMail = (isOpen: boolean) => {
		setVSetting(isOpen);
	};

	/**
	 * Abre la agenda de contactos
	 * @param isOpen indica si se abre o no la ventana Modal
	 */
	const openContactBook = (isOpen: boolean) => {
		setVContactBook(isOpen);
	};

	/**
	 * Seleciona el Mensaje y
	 * Aumenta con contador de mensajes seleccionado
	 * @param id del mensaje seleccionado
	 */
	const marckMessageInbox = (id: number) => {
		if (id !== 0) {
			//setListIdSelect([...listIdSelect, id])

			setCountSelect(countSelect + 1);
		} else {
			setCountSelect(countSelect - 1);
		}
	};

	/**
	 * Marca todos los mensajes de inbox
	 * @param countSelect cantidad de elementos seleccionados
	 * @param listId arreglos con los id de los mensajes seleccionados
	 */
	const marckAllMessageInbox = (countSelect: number, listId: number[]) => {
		setCountSelect(countSelect);
		setListIdSelect(listId);

		console.log(listId);
	};

	return (
		<>
			<div>{vSetting && <SettingMail closeSetting={openSettingMail} />}</div>
			<ToolBar
				openCompose={openComposeMail}
				openSetting={openSettingMail}
				openContactBook={openContactBook}
			/>

			<Splitter style={{ height: 500 }} panes={panes} onChange={onChange}>
				<div className='pane-content'>
					<Collapse
						countMessage={countMsgInbox}
						countRead={countMsgRead}
						countDelete={countMsgDelete}
						showFolder={changeFolderMail}
					/>
				</div>
				<div className='pane-content'>
					<MessagesList
						dataInbox={isFolder === '' ? inbox : msgFolderActive}
						onFilterInbox={filterMessagesInbox}
						onSelectItem={marckMessageInbox}
						onClickRead={handleClickRead}
						onSelectAll={marckAllMessageInbox}
						onDeleteMsgs={deleteMenssage}
					/>
				</div>
				<div className='pane-content'>
					<>
						<MessageDetails
							countSelect={countSelect}
							msg={itemSelectState}
							openCompose={openComposeMail}
						/>
					</>
				</div>
			</Splitter>
			<div>
				{vContactBook && (
					<ContactBook
						openContactBook={openContactBook}
						ContactData={ContactList}
						openCompose={openComposeMail}
					/>
				)}
			</div>
			<div>
				{vCompose && (
					<ComponseForm
						openCompose={openComposeMail}
						titleModal={tituloModal}
						modeResponse={responseMail}
						msg={itemSelectState}
						contact={contact}
					/>
				)}
			</div>
		</>
	);
};

export default Inbox;
