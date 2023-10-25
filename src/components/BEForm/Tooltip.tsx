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
    </>
  );
};

export default TooltipForQuestion;
