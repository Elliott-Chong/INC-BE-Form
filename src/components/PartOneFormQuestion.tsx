import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HelpCircle,
  KanbanSquare,
  PlusCircle,
  StickyNote,
  Workflow,
} from "lucide-react";

type Props = {
  question: string;
  description: string;
  tooltip: string;
  value: string;
  onInputChange: (value: string) => void;
};

const ACTIVITIES_ICON_STYLE = "mr-2 h-4 w-4";

const PartOneFormQuestion = (props: Props) => {
  const { question, description, tooltip, value, onInputChange } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInputChange(event.target.value);
  };

  return (
    <>
      <div className="col-span-full">
        <label
          htmlFor="about"
          className="flex w-full space-x-2 text-sm font-medium leading-6 text-gray-900"
        >
          <span>{question}</span>
          <span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle
                    size={16}
                    className="mt-1 hover:cursor-pointer"
                    color="#94A3B8"
                  />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p className="whitespace-normal break-words">{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </span>
        </label>
        <p className="mt-3 w-[95%] text-sm leading-6 text-gray-600">
          {description}
        </p>
        <div className="mt-2 flex">
          <textarea
            id="about"
            name="about"
            rows={3}
            className="block w-[95%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={value}
            onChange={handleInputChange}
          />
          <div className="grow"></div>
          <div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PartOneFormQuestion;
