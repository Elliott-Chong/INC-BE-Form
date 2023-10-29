import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { KanbanSquare, PlusCircle, StickyNote, Workflow } from "lucide-react";
import Modal from "../Modal";
import { Button } from "../ui/button";
import { toast } from "sonner";
type Props = {};

const ACTIVITIES_ICON_STYLE = "mr-2 h-4 w-4";

const AddActivitiesButton = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <div className="relative">
          <h1>Start a new activity</h1>
          <Button
            className="bottom-0 right-0 "
            onClick={() => {
              toast("Event has been created", {
                action: {
                  label: "Join Activity",
                  onClick: () => console.log("Undo"),
                },
              });
              setOpen(false);
            }}
          >
            Start
          </Button>
        </div>
      </Modal>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="hover:cursor-pointer">
          <PlusCircle size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Activities</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <StickyNote className={ACTIVITIES_ICON_STYLE} />
            <span>Post-It</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <KanbanSquare className={ACTIVITIES_ICON_STYLE} />
            <span>Kanban</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Workflow className={ACTIVITIES_ICON_STYLE} />
            <span>Flowchart</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default AddActivitiesButton;
