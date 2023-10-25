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

type Props = {};

const ACTIVITIES_ICON_STYLE = "mr-2 h-4 w-4";

const AddActivitiesButton = (props: Props) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="hover:cursor-pointer">
          <PlusCircle size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Activities</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <StickyNote className={ACTIVITIES_ICON_STYLE} />
            <span>Post-It</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <KanbanSquare className={ACTIVITIES_ICON_STYLE} />
            <span>Kanban</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Workflow className={ACTIVITIES_ICON_STYLE} />
            <span>Flowchart</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default AddActivitiesButton;
