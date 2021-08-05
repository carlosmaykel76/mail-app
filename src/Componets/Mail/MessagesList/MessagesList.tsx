import React, { useState } from "react";

import IMessage from "../../mail.interface";
import MessageItem from "../Message/MessageItem";
import WarningDialog from "../../Modals/WarningDialog";

interface IMessageListProps {
  dataList: Array<IMessage>;
  onClick: (event: React.MouseEvent<unknown>, id: number) => void;
  onSelect: (event: React.MouseEvent<unknown>, id: number) => void;
}

const MessageList: React.FC<IMessageListProps> = ({
  dataList,
  onClick,
  onSelect,
}) => {
  const [viewDialog, setViewDialog] = useState(false);
  const [warningBody, setWarningBody] = useState("");
  const [warningTitle, setWarningTitle] = useState("Confirmación");

  const openWarningDialog = (w: boolean, title: string, body: string) => {
    setViewDialog(w);
    setWarningBody(body);
    setWarningTitle(title === "" ? warningTitle : title);
  };

  return (
    <>
      {dataList.length > 0 ? (
        dataList.map((item: IMessage) => (
          <MessageItem
            key={item.id}
            msg={item}
            onSelect={onSelect}
            openWarning={openWarningDialog}
          />
        ))
      ) : (
        <div>dfcsdfsdjcnbsjdkbh</div>
      )}
      <div>
        {viewDialog && (
          <WarningDialog
            titleDialog={warningTitle}
            BodyDialog={warningBody}
            closeWarning={openWarningDialog}
          />
        )}
      </div>
    </>
  );
};

export default MessageList;
