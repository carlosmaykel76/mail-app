import React, { useState } from "react";
import { Splitter } from "@progress/kendo-react-layout";

import ToolBar from "./Layout/ToolBar";
import ComponseForm from "./Modals/ComponseForm";
import MessagesList from "../Componets/Mail/MessagesList/MessagesList";
import MessageDetails from "../Componets/Mail/MessageDetails/MessageDetails";
import MessageData from "../data/MessageData";

import "../Styles/App.css";

interface IMessage {
  id: number;
  importance: string;
  attached: boolean;
  personfor: string;
  subject: string;
  sent: string;
  size: string;
  read: boolean;
  body: string;
}

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
    body: "",
  };

  const [allMessages, setAllMessages] = useState(false);
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
    const filter = MessageData.filter((item) => item.id === id);

    //console.log(`filter => ${JSON.stringify(filter)}`);

    setItemSelectState(filter);
  };

  return (
    <>
      <ToolBar openCompose={toggleDialog} />

      <Splitter style={{ height: 500 }} panes={panes} onChange={onChange}>
        <div className="pane-content">
          <h3>Inner splitter / left pane</h3>
        </div>
        <div className="pane-content">
          <MessagesList
            dataList={MessageData}
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
