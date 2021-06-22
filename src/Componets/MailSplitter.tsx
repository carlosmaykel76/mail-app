import React, {useState} from 'react'
import { Splitter } from "@progress/kendo-react-layout";


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
        <Splitter panes={panes} onChange={onChange}>
            <div className="pane-content">
                <h3>Inner splitter / left pane</h3>
            </div>
            <div className="pane-content">
                <h3>Grid Con los mensjaes</h3>
            </div>
            <div className="pane-content">
                <h3>Inner splitter / right pane</h3>
            </div>

         </Splitter>)
}

export default MailSplitter;
