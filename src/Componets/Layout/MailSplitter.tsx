import React, {useState} from 'react'
import { Splitter } from "@progress/kendo-react-layout";

const MailSplitter = () => {

    const [panes, setPanes] = useState([
        { size: "15%", min: "150px",  collapsible: false },
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
               
            </div>
            <div className="pane-content">
               
            </div>
         </Splitter>
    );
}

export default MailSplitter;
