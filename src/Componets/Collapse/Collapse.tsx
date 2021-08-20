import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

import PersonIcon from "@material-ui/icons/Person";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import EmailIcon from "@material-ui/icons/Email";
import FolderIcon from "@material-ui/icons/Folder";
import Terceros from "./Terceros";
import ListDocuments from "./ListDocuments";
import MailAccount from "./MailAccount";
import FilesExplorer from "./FilesExplorer";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    height: 25,
    minHeight: 36,
    "&$expanded": {
      minHeight: 36,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        square
        expanded={expanded === "pnTerceros"}
        onChange={handleChange("pnTerceros")}
      >
        <AccordionSummary id="pnTerceros-header">
          <PersonIcon fontSize="small" color="primary" />
          <Typography>Terceros</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Terceros />
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "pnDocuments"}
        onChange={handleChange("pnDocuments")}
      >
        <AccordionSummary id="ppnDocuments-header">
          <InsertDriveFileIcon fontSize="small" />
          <Typography>Documentos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListDocuments />
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "pnAccountMail"}
        onChange={handleChange("pnAccountMail")}
      >
        <AccordionSummary id="pnAccountMail-header">
          <EmailIcon fontSize="small" />
          <Typography>Cuenta de Correo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MailAccount />
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "pnFilesExplorer"}
        onChange={handleChange("pnFilesExplorer")}
      >
        <AccordionSummary id="pnFilesExplorer-header">
          <FolderIcon fontSize="small" />
          <Typography>Árbol de Carpetas </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FilesExplorer />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
