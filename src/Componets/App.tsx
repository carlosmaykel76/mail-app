import React from 'react';

import ToolBar from  '../Componets/ToolBar';
import ComponseForm from './Modals/ComponseForm';
import MailSplitter from './MailSplitter'

import '../Styles/App.css'

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

const App = (Props: any) => {

  const [visible, setVisible] = React.useState(false);

  const toggleDialog = () => {
      setVisible(!visible);
  }

  return (
    <>
      <ToolBar openCompose={toggleDialog}/>
      <div>
        {visible &&
         <ComponseForm openCompose={toggleDialog} />
        }
      </div>

      <MailSplitter />
    </>
  );
}

export default App;
