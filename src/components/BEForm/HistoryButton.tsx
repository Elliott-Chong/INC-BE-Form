import React, { useState } from "react";
import Modal from "../Modal";
import { UserCircle2, Clock } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";

const HistoryButton = () => {
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowHistoryModal(true);
  };

  const closeHistoryModal = () => {
    setShowHistoryModal(false);
  };

  const historyRecord = {
    user: {
      username: "Doraemon",
      photo: <UserCircle2 className="h-6 w-6 text-gray-600" />,
    },
    text: "This issa my answer...",
    date: "2023-10-25",
  };

  return (
    <TooltipProvider>
      <div onClick={handleClick}>
        <Tooltip>
          <TooltipTrigger>
            <div className="relative inline-block">
              <Clock className="text-black-600 mt-2 h-5 w-5" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="text-xs">History</div>
          </TooltipContent>
        </Tooltip>
      </div>

      <Modal open={showHistoryModal} setOpen={closeHistoryModal}>
        <div className="p-4">
          <h2 className="p-2 text-xl font-bold">History</h2>

          <div className="m-2 mb-4 p-2 shadow-md">
            <div className="flex items-center space-x-4">
              <div>{historyRecord.user.photo}</div>
              <div>
                <span className="text-lg font-semibold">
                  {historyRecord.user.username}
                </span>
              </div>
            </div>
            <p className="text-gray-600">{historyRecord.date}</p>
            <p>{historyRecord.text}</p>
          </div>

          <div className="mt-6 flex justify-end">
            <Button onClick={closeHistoryModal}>Close</Button>
          </div>
        </div>
      </Modal>
    </TooltipProvider>
  );
};

export default HistoryButton;
