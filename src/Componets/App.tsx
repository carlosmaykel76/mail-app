import React from 'react';

import ToolBar from  '../Componets/ToolBar';
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

  return (
    <>
      <ToolBar/>

      <MailSplitter />
    </>
  );
}

export default App;
