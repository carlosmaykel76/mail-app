import React from "react";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";

interface WarningDialogProps {
  titleDialog: string;
  BodyDialog: string;
  closeWarning: (w: boolean, title: string, body: string) => void;
}

const WarningDialog: React.FC<WarningDialogProps> = ({
  titleDialog,
  BodyDialog,
  closeWarning,
}) => {
  const toggleDialog = () => {
    closeWarning(false, "", "");
  };

  return (
    <div>
      <Dialog title={titleDialog} onClose={toggleDialog}>
        <p style={{ margin: "25px", textAlign: "center" }}>{BodyDialog}</p>
        <DialogActionsBar>
          <button className="k-button" onClick={toggleDialog}>
            No
          </button>
          <button className="k-button" onClick={toggleDialog}>
            Si
          </button>
        </DialogActionsBar>
      </Dialog>
    </div>
  );
};

export default WarningDialog;
