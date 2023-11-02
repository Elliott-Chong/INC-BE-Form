import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

type Props = {
  tooltip: string;
};

const TooltipForQuestion = (props: Props) => {
  const { tooltip } = props;

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <HelpCircle
              className="mt-[2px] h-5 w-5 hover:cursor-pointer"
              color="#94A3B8"
            />
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p className="whitespace-normal break-words text-lg">{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default TooltipForQuestion;
