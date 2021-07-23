import React, { useState } from "react";
import { Splitter } from "@progress/kendo-react-layout";
import ToolBar from "./Layout/ToolBar";
import ComponseForm from "./Modals/ComponseForm";
import Collapse from "./Collapse/Collapse";
import MessagesList from "../Componets/Mail/MessagesList/MessagesList";
import MessageDetails from "../Componets/Mail/MessageDetails/MessageDetails";
import Setting from "./SettingMail/Setting";
import MessageData from "../data/MessageData";
import IMessage from "./mail.interface";

import "../Styles/App.css";
import WarningDialog from "./Modals/WarningDialog";

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
    isdelete: false,
    body: "",
  };

  const [allMessages, setAllMessages] = useState<IMessage[]>(MessageData);
  const [viewCompose, setViewCompose] = useState(false);
  const [itemSelectState, setItemSelectState] = useState<IMessage[]>([
    initMessageState,
  ]);
  const [tituloModal, setTituloModal] = useState("Nuevo Mensaje");
  const [response, setResponse] = useState(false);
  const [viewDialog, setViewDialog] = useState(false);
  const [warningBody, setWarningBody] = useState("");
  const [titleDialog, setTitleDialog] = useState("");

  const openComposeDialog = (n: boolean, titulo: string, f: boolean) => {
    setViewCompose(n);
    setResponse(f);
    setTituloModal(titulo);
  };

  const openWarningDialog = (w: boolean, title: string, body: string) => {
    setViewDialog(w);
    setWarningBody(body);
    setTitleDialog(title);
  };

  //const CountMsg = MessageData.length;

  const [panes, setPanes] = useState([
    { size: "15%", min: "150px", collapsible: false },
    {},
    { size: "30%", min: "20px", collapsible: true },
  ]);

  const onChange = (event: any) => {
    setPanes(event.newState);
  };

  const handleClickSelectMsg = (
    event: React.MouseEvent<unknown>,
    id: number
  ) => {
    //const isItemSelected = true;
    alert("Esto id del msg " + id);
  };

  const handleSelect = (event: React.MouseEvent<unknown>, id: number) => {
    const msg = MessageData.filter((item) => item.id === id);

    setItemSelectState(msg);

    const newAllMessages = allMessages.map((m) => {
      if (m.id === id) {
        m.read = false;
        return m;
      }
      return m;
    });

    setAllMessages(newAllMessages);
  };

  return (
    <>
      <ToolBar openCompose={openComposeDialog} />

      <Splitter style={{ height: 500 }} panes={panes} onChange={onChange}>
        <div className="pane-content">
          <Collapse />
        </div>
        <div className="pane-content">
          <MessagesList
            dataList={allMessages}
            onClick={handleClickSelectMsg}
            onSelect={handleSelect}
          />
        </div>
        <div className="pane-content">
          <MessageDetails
            msg={itemSelectState}
            openCompose={openComposeDialog}
            openWarning={openWarningDialog}
          />
        </div>
      </Splitter>

      <div>
        {viewCompose && (
          <ComponseForm
            openCompose={openComposeDialog}
            titulo={tituloModal}
            flag={response}
            msg={itemSelectState}
          />
        )}
      </div>
      <div>
        {viewDialog && (
          <WarningDialog
            titleDialog={titleDialog}
            BodyDialog={warningBody}
            closeWarning={openWarningDialog}
          />
        )}
      </div>
    </>
  );
};

export default Inbox;
