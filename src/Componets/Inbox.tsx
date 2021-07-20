import React, { useState } from "react";
import { Splitter } from "@progress/kendo-react-layout";

import ToolBar from "./Layout/ToolBar";
import ComponseForm from "./Modals/ComponseForm";
import Collapse from "./Collapse/Collapse";
import MessagesList from "../Componets/Mail/MessagesList/MessagesList";
import MessageDetails from "../Componets/Mail/MessageDetails/MessageDetails";
import MessageData from "../data/MessageData";
import IMessage from "./mail.interface";

import "../Styles/App.css";

const Inbox = () => {
  const initMessageState = {
    id: 0,
    importance: "",
    attached: false,
    personfor: "",
    subject: "",
    sent: "",
    size: "",
    read: false,
    isdelete: false,
    body: "",
  };

  const [allMessages, setAllMessages] = useState<IMessage[]>(MessageData);
  const [visible, setVisible] = useState(false);
  const [itemSelectState, setItemSelectState] = useState<IMessage[]>([
    initMessageState,
  ]);

  const toggleDialog = () => {
    setVisible(!visible);
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
      <ToolBar openCompose={toggleDialog} />

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
          <MessageDetails msg={itemSelectState} />
        </div>
      </Splitter>

      <div>{visible && <ComponseForm openCompose={toggleDialog} />}</div>
    </>
  );
};

export default Inbox;
