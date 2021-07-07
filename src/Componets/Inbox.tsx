import React, {useState} from 'react';
import { Splitter } from "@progress/kendo-react-layout";

import ToolBar from  './Layout/ToolBar';
import ComponseForm from './Modals/ComponseForm';
import MessagesList from '../Componets/Mail/MessagesList/MessagesList';
import MessageDetails from '../Componets/Mail/MessageDetails/MessageDetails';
import MessageData from '../data/MessageData'

import '../Styles/App.css'

interface IMessage {
  id: number;
  importance: string;
  attached: boolean;
  personfor: string;
  subject: string;
  sent: string;
  size: string;
  read: boolean
}

/*const split = {[
   collapsed?: boolean,
   collapsible?: boolean,
   keepMounted?: boolean,
   max?: string,
   min?: string,
   resizable?: boolean,
   scrollable?: boolean,
   size?: string
]},*/

const Inbox = (Props: any) => {
  const [visible, setVisible] = React.useState(false);
  const [itemSelectState, setItemSelectState] = useState<IMessage[]>([]);

  const toggleDialog = () => {
      setVisible(!visible);
  }
  
  //const CountMsg = MessageData.length;

  const [panes, setPanes] = useState([
    { size: "15%", min: "150px",  collapsible: false },
    {},
    { size: "30%", min: "20px", collapsible: true },
  ]); 

  const onChange = (event:any) => {
    setPanes(event.newState);
  };

  const handleClickSelectMsg = (event: React.MouseEvent<unknown>, id:number) => {
    //const isItemSelected = true;
    alert('Esto id del msg '+ id);
  }; 

  const handleSelect = (event: React.MouseEvent<unknown>, id:number) => {

    let data = MessageData.find(msg => msg.id = id);

    setItemSelectState(data)

    alert(data?.subject);
  }

  return (
    <>
      <ToolBar openCompose={toggleDialog}/>  

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
            <MessageDetails />
        </div>
      </Splitter>  

       <div>
        {visible &&
         <ComponseForm openCompose={toggleDialog} />
        }
      </div>   

      
    </>
  );
}

export default Inbox;
