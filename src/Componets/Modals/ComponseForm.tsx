import React from 'react';
import { Window, WindowActionsBar }  from '@progress/kendo-react-dialogs';
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@progress/kendo-react-buttons";

import { Input } from "@progress/kendo-react-inputs";

import TinyMceEditor from '../../Componets/TinyMceEditor'

interface Props {
    openCompose: (n: boolean) => void
}

const useStyles = makeStyles((theme) => ({
    modal:{
        width:'100%',
        height:'499',
        background:'white',
       // border:'1px solid #000',
        padding:"16px, 32px, 24px",
    },
    textfield:{
        width: '100%'
    },
    bt:{
        textTransform:'capitalize',
    }
}))

const ComponseForm:React.FC<Props> = ({openCompose}) => {

    const [visible, setVisible] = React.useState(true);

    const toggleDialog = () => {
        openCompose(!visible);
    }

    const styles = useStyles();

    return (
        <Window title={"Nuevo Mensaje"} onClose={toggleDialog} initialHeight={500} initialWidth={800}>
            <div className={styles.modal}>
                <div>
                    <Button primary={true} look="flat">Para</Button>
                    <Input
                        name="email"
                        type="email"
                        style={{ width: "90%" }}
                        required={true}
                    />
                </div>                
                <label>Subject</label>
                <Input
                    name="subject"
                    type="text"
                    style={{ width: "90%" }}
                    required={true}
                />

                <TinyMceEditor />
            </div>
            <WindowActionsBar layout='end'>
                <button type="button" className="k-button" onClick={toggleDialog}>
                    Cerrar
                </button>
                <button
                    type="button"
                    className="k-button k-primary"
                    onClick={toggleDialog}
                >
                    Enviar
                </button>
          </WindowActionsBar>
        </Window>
    );
}

export default ComponseForm;

/**
<div className={styles.modal}>
<h2>Nuevo Mensaje </h2>
<TextField label="Para" className={styles.textfield} />
<br/>
<TextField label="Asunto" className={styles.textfield} />
<br/>

<br/>
<br/>
</div>
*/