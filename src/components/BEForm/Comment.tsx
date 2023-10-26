import React, { useState } from "react";
import Modal from "../Modal";
import { UserCircleIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Comment = () => {
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [commentText, setCommentText] = useState("");
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCommentModal(true);
  };

  const closeCommentModal = () => {
    setShowCommentModal(false);
  };

  const user = {
    username: "Doraemon",
    photo: <UserCircleIcon className="h-6 w-6 text-gray-600" />,
  };

  return (
    <TooltipProvider>
      <div onClick={handleClick}>
        <Tooltip>
          <TooltipTrigger>
            <div className="relative inline-block">
              <ChatBubbleBottomCenterTextIcon className="mt-2 h-5 w-5" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="text-xs">Comment</div>
          </TooltipContent>
        </Tooltip>
      </div>

      <Modal open={showCommentModal} setOpen={closeCommentModal}>
        <div className="p-4">
          <h2 className="mb-4 text-xl font-bold">Comment Something now</h2>

          <div className="flex items-center space-x-4">
            <div className="p-2">{user.photo}</div>
            <div>
              <span className="text-lg font-semibold">{user.username}</span>
            </div>
          </div>

          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your comment"
          />
          <div className="mt-6 flex justify-end">
            <button
              className="rounded-md bg-slate-500 px-4 py-2 text-white hover:bg-slate-600"
              onClick={closeCommentModal}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </TooltipProvider>
  );
};

export default Comment;
