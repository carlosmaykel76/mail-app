import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  '@material-ui/icons';

import {
    Toolbar,ToolbarItem,ToolbarSeparator,ToolbarSpacer, Button,
    ButtonGroup, DropDownButton, DropDownButtonItem, SplitButton, SplitButtonItem
} from '@progress/kendo-react-buttons';

const MyTools = () => {
    return (
        <Toolbar>
            <ToolbarItem>
            <ButtonGroup>
                <Button icon="EmailIcon" title="Nuevo Mensaje" togglable={true} />
                <Button icon="DeleteIcon" title="Eliminar Mensaje" togglable={true} />
                <Button icon="MarkAsUnreadIcon" title="No Leido / Leido" togglable={true} />
              </ButtonGroup>
            </ToolbarItem>
            <ToolbarSpacer />
            <ToolbarItem>
              <ButtonGroup>
                <Button icon="MailOutlineIcon" title="Responder" togglable={true} />
                <Button icon="align-center" title="Align Center" togglable={true} />
                <Button icon="align-right" title="Align Right" togglable={true} />
                <Button icon="align-justify" title="Align Justify" togglable={true} />
              </ButtonGroup>
            </ToolbarItem>
        </Toolbar>
    );
}

export default MyTools