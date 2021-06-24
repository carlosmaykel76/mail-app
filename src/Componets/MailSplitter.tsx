import React, {useState} from 'react'
import { Splitter } from "@progress/kendo-react-layout";

import MessageList from './MessageList'


const MailSplitter = (Props: any) => {

    const [panes, setPanes] = useState([
        { size: "20%", min: "200px",  collapsible: false },
        {},
        { size: "30%", min: "20px", collapsible: true },
    ]);

    const onChange = (event:any) => {
        setPanes(event.newState);
    };

    return (
        <Splitter style={{ height: 500 }} panes={panes} onChange={onChange}>
            <div className="pane-content">
                <h3>Inner splitter / left pane</h3>
            </div>
            <div className="pane-content">
                <MessageList />
            </div>
            <div className="pane-content">
              <h2>Detalles de los mensajes</h2>
            </div>

         </Splitter>)
}

export default MailSplitter;
