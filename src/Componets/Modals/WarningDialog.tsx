import React from "react";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";

interface WarningDialogProps {
  bStatus: boolean;
  cTitle: string;
  cReference: string;
  cQuestion: string;

  confirmDialog: (nResult: number, cReferencia: string) => void;
  closeWarning: (cReference: string) => void;
}

const WarningDialog: React.FC<WarningDialogProps> = ({
  cTitle,
  cReference,
  cQuestion,
  confirmDialog,
  closeWarning,
}) => {


  const closeDialog = () => {
    closeWarning("WarningDialog");
  };

  const confirm = () => {
    confirmDialog(1, cReference)
    closeWarning("WarningDialog");
  };

  return (
    <div>
      <Dialog title={cTitle} onClose={closeDialog}>
        <p style={{ margin: "25px", textAlign: "center" }}>{cQuestion}</p>
        <DialogActionsBar>
          <button className="k-button" onClick={closeDialog}>
            No
          </button>
          <button className="k-button" onClick={confirm}>
            Si
          </button>
        </DialogActionsBar>
      </Dialog>
    </div>
  );
};

export default WarningDialog;
