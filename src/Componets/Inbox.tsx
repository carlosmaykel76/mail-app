import React, { useState, useEffect } from 'react';
import { Splitter } from "@progress/kendo-react-layout";
import ToolBar from "./Layout/ToolBar";
import ComponseForm from "./Modals/ComponseForm";
import Collapse from "./Collapse/AllCollapse";
import MessagesList from "../Componets/Mail/MessagesList/MessagesList";
import MessageDetails from "../Componets/Mail/MessageDetails/MessageDetails";
import SettingMail from "../Componets/Settings/SettingMail";
import MessageData from "../data/MessageData";
import { IMessage, IContacts } from "./mail.interface";
import WarningDialog from "./Modals/WarningDialog";
import "../Styles/App.css";

const Inbox = () => {
  const initMessageState = {
    id: 0,
    importance: "",
    attached: false,
    personfor: "",
    email: "",
    subject: "",
    sent: "",
    size: "",
    read: false,
    marked: false,
    isdelete: false,
    body: "",
  };

  const [allMessages, setAllMessages] = useState<IMessage[]>(MessageData);
  const [viewCompose, setViewCompose] = useState(false);
  const [itemSelectState, setItemSelectState] = useState<IMessage[]>([
    initMessageState,
  ]);
  const [deleteMessages, setDeleteMessages] = useState<IMessage[]>([]);
  const [tituloModal, setTituloModal] = useState("Nuevo Mensaje");
  const [response, setResponse] = useState(false);
  const [viewDialog, setViewDialog] = useState(false);
  const [warningBody, setWarningBody] = useState("");
  const [warningTitle, setWarningTitle] = useState("Confirmación");
  const [viewSetting, SetViewSetting] = useState(false);
  const [countSelect, SetCountSelect] = useState(0);
  const [listId, setListId] = useState<number[]>([]);
  const [contact, setContact] = useState<IContacts[]>([]);
  const [countMessage, setCountMessage] = useState(0)
  const [countRead, setCountRead] = useState(0)

  const [dialogTitle, setDialogTitle] = useState("Confirmacion");
  const [refenrence, setRefenrence] = useState("");
  const [dialogQuestion, setDialogQuestion] = useState("");
  const [dialogResult, setDialogResult] = useState(0);

  useEffect(() => {
    setCountMessage(allMessages.length);
    var countRead: number = 0;
    allMessages.map((m) => {
      if (m.read === false) {
        countRead = countRead + 1;
      }
    }, [allMessages]);
    setCountRead(countRead);
  }, [allMessages]);

  const openComposeDialog = (n: boolean, titulo: string, f: boolean) => {
    setViewCompose(n);
    setResponse(f);
    setTituloModal(titulo);
  };

  const openDialogForm = (w: boolean, title: string, question: string) => {
    setViewDialog(w);
    setDialogTitle(title === "" ? dialogTitle : title);
    setDialogQuestion(question)
  };

  const closeDialogForm = (cReference: string) => {
    switch (cReference) {
      case "WarningDialog":
        setViewDialog(false);
        break;
      case "SettingMail":
        SetViewSetting(false);
        break;
      default:
        break;
    }
  };

  const confirmDialog = (nResutl: number, cReference: string) => {
    setDialogResult(nResutl);
  };

  const deleteMessage = (idx: number) => {

    alert(dialogResult + " " + idx);

    let deleted: IMessage[] = [...deleteMessages];

    if (dialogResult === 1) {
      const del: IMessage[] = allMessages.map((m) => {
        if (m.id === idx) {
          m.isdelete = true;
          return m;
        }
        return m;
      });
    }

    console.log(deleted)
    // setListId([...listId, idmsg]);
    setDeleteMessages(deleted)
  }

  const openSettingModel = (s: boolean) => {
    SetViewSetting(s);
  };

  const [panes, setPanes] = useState([
    { size: "17%", min: "150px", collapsible: false },
    {},
    { size: "40%", min: "20px", collapsible: true },
  ]);

  const onChange = (event: any) => {
    setPanes(event.newState);
  };

  const handleClickSelectMsg = (
    event: React.MouseEvent<unknown>,
    id: number
  ) => {
    console.log("id del mensaje marcado " + id);

    const idmsg = id;

    setListId([...listId, idmsg]);

    if (id !== 0) {
      SetCountSelect(countSelect + 1);
    } else {
      SetCountSelect(countSelect - 1);
    }
    console.log(listId);
  };

  const handleSelectAllMsg = (
    countSelectMsg: number,
    listIdMsg: Array<number[]>
  ) => {
    SetCountSelect(countSelectMsg);
    console.log(listIdMsg);
  };

  const handleClickRead = (event: React.MouseEvent<unknown>, id: number) => {
    const msg = MessageData.filter((item) => item.id === id);

    setItemSelectState(msg);

    const contactResponse = [{ nombre: msg[0]["personfor"], email: msg[0]["email"] }]
    setContact(contactResponse)

    const newAllMessages = allMessages.map((m) => {
      if (m.id === id) {
        m.read = true;
        return m;
      }
      return m;
    });

    setAllMessages(newAllMessages);
  };

  return (
    <>
      <ToolBar
        openCompose={openComposeDialog}
        openSetting={openSettingModel}
      />

      <Splitter style={{ height: 500 }} panes={panes} onChange={onChange}>
        <div className="pane-content">
          <Collapse countMessage={countMessage} countRead={countRead} />
        </div>
        <div className="pane-content">
          <MessagesList
            dataList={allMessages}
            onSelectItem={handleClickSelectMsg}
            onClickRead={handleClickRead}
            onSelectAll={handleSelectAllMsg}
          />
        </div>
        <div className="pane-content">
          <>
            <MessageDetails
              countSelect={countSelect}
              msg={itemSelectState}
              openCompose={openComposeDialog}
              openDialog={openDialogForm}
            />
          </>
        </div>
      </Splitter>
      <div>
        {viewCompose && (
          <ComponseForm
            openCompose={openComposeDialog}
            titulo={tituloModal}
            flag={response}
            msg={itemSelectState}
            contact={contact}
          />
        )}
      </div>
      <div>
        {viewDialog && (
          <WarningDialog
            bStatus={true}
            cTitle={dialogTitle}
            cReference={refenrence}
            cQuestion={dialogQuestion}
            confirmDialog={confirmDialog}
            closeWarning={closeDialogForm}
          />
        )}
      </div>
      <div>
        {viewSetting && <SettingMail closeSetting={closeDialogForm} />}
      </div>
    </>
  );
};

export default Inbox;
