import React from 'react'
import { Window, WindowActionsBar } from "@progress/kendo-react-dialogs";
import { TextField } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import contactData from "../../data/ContactData"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { contactModalProps } from "../../interfaces/mail.interface"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            width: "100%",
            height: "600",
            background: "white",
            padding: "16px, 32px, 24px",
        },
        root: {
            "& > *": {
                margin: theme.spacing(1),
            },
        },
        TextField: {
            width: "100%",
        },
        paper: {
            padding: theme.spacing(2),
            justify: "flex-start",
            color: theme.palette.text.secondary,
        },
        bt: {
            textTransform: "capitalize",
        },
        BButton: {
            justify: "center",
        },
        input: {
            display: "none",
        },
        table: {
            minWidth: 550,
        },
    })
);

const ContactModal: React.FC<contactModalProps> = ({ openContacts }) => {
    const styles = useStyles();

    // eslint-disable-next-line
    const [listContacts, setListContacts] = React.useState(contactData)

    const closeModal = () => {
        openContacts(false);
    };

    // filter(event){
    //     var text = event.target.value
    //     const data = this.state.productoBackup
    //     const newData = data.filter(function(item){
    //         const itemDataTitle = item.titulo.toUpperCase()
    //         const itemDataDescp = item.descripcion.toUpperCase()
    //         const campo = itemDataTitle+" "+itemDataDescp
    //         const textData = text.toUpperCase()
    //         return campo.indexOf(textData) > -1
    //     })
    //     this.setState({
    //         producto: newData,
    //         text: text,
    //     })
    // } 

    const handleChange = (filter: string) => {

        const resultado = contactData.find(item => item.nombre === filter);

        console.log(resultado)

    };

    return (
        <Window
            title={"Lista de Contactos"}
            onClose={closeModal}
            initialHeight={300}
            initialWidth={650}
            modal
            resizable
            draggable
        >
            <div className={styles.modal}>
                <Grid container spacing={1}>
                    <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-start" }}>
                        <TextField
                            id="outlined-basic"
                            label="Buscar por nombre"
                            variant="outlined"
                            size="small"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event.currentTarget.value) }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table className={styles.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow component="th" >
                                        <TableCell>Nombre</TableCell>
                                        <TableCell>Correo</TableCell>
                                        <TableCell>Empresa</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {listContacts.map((row: any) => (
                                        <TableRow key={row.nombre}>
                                            <TableCell component="th" scope="row">
                                                {row.nombre}
                                            </TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>{""}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                </Grid>
            </div>
            <WindowActionsBar layout="end">
                <Grid container spacing={1}>
                    <Grid item xs></Grid>
                    <Grid item xs style={{ display: "flex", justifyContent: "flex-end" }}>
                        <button
                            type="button"
                            className="k-button"
                            onClick={closeModal}
                        >
                            Cerrar
                        </button>
                    </Grid>
                </Grid>
            </WindowActionsBar>
        </Window>
    );
};

export default ContactModal;