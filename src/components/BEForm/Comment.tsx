import React, { useState } from "react";
import Modal from "../Modal";
import { UserCircle2, MessageSquare } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Comment = () => {
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [activeTab, setActiveTab] = useState("addComment");
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCommentModal(true);
  };

  const closeCommentModal = () => {
    setShowCommentModal(false);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const user = {
    username: "Doraemon",
    photo: <UserCircle2 className="h-6 w-6 text-gray-600" />,
  };

  const fakePastComments = [
    {
      user: {
        photo: <UserCircle2 className="h-6 w-6 text-gray-600" />,
        username: "user1",
      },
      text: "This is a past comment 1",
    },
    {
      user: {
        photo: <UserCircle2 className="h-6 w-6 text-gray-600" />,
        username: "user2",
      },
      text: "This is a past comment 2",
    },
    {
      user: {
        photo: <UserCircle2 className="h-6 w-6 text-gray-600" />,
        username: "user3",
      },
      text: "This is a past comment 3",
    },
  ];

  return (
    <TooltipProvider>
      <div onClick={handleClick}>
        <Tooltip>
          <TooltipTrigger>
            <div className="relative inline-block">
              <MessageSquare className="mt-1 h-5 w-5" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="text-xs">Comment</div>
          </TooltipContent>
        </Tooltip>
      </div>

      <Modal open={showCommentModal} setOpen={closeCommentModal}>
        <div className="p-4 h- overflow-auto">
          <h2 className="mb-4 text-xl font-bold">Comment Section</h2>
          <div className="mb-4 max-h-64 overflow-auto">
            {activeTab === "addComment" ? (
              <>
                <h3 className="mb-2 text-lg font-semibold">Add your Comment</h3>
                <div className="flex items-center space-x-4">
                  <div className="p-2">{user.photo}</div>
                  <div>
                    <span className="text-lg font-semibold">
                      {user.username}
                    </span>
                  </div>
                </div>
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full rounded-md border p-2"
                  placeholder="Enter your comment"
                />
              </>
            ) : (
              <div>
                <h3 className="mb-2 text-lg font-semibold">Past Comments</h3>
                <ul>
                  {fakePastComments.map((comment, index) => (
                    <li key={index}>
                      <div className="m-2 flex items-center space-x-4 p-2 shadow-md">
                        <div className="p-2">{comment.user.photo}</div>
                        <div>
                          <span className="text-lg font-semibold">
                            {comment.user.username}
                          </span>
                          <p>{comment.text}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-between">
            <button
              className={`rounded-md px-4 py-2 ${
                activeTab === "addComment"
                  ? "bg-slate-500 text-white hover:bg-slate-600"
                  : "bg-gray-300 text-gray-600 hover:bg-gray-400"
              }`}
              onClick={() => handleTabChange("addComment")}
            >
              Add Comment
            </button>

            <button
              className={`rounded-md px-4 py-2 ${
                activeTab === "pastComments"
                  ? "bg-slate-500 text-white hover:bg-slate-600"
                  : "bg-gray-300 text-gray-600 hover:bg-gray-400"
              }`}
              onClick={() => handleTabChange("pastComments")}
            >
              Past Comments
            </button>
          </div>
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
