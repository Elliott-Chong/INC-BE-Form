import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  question: string;
  description: string;
  tooltip: string;
  value: string;
  onInputChange: (value: string) => void;
};

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
          className="flex w-full text-sm font-medium leading-6 text-gray-900"
        >
          <span>{question}</span>
          <span className="grow"></span>
          <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <FontAwesomeIcon icon={faQuestion} size="xs" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p className="whitespace-normal break-words">{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </span>
        </label>
        <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
        <div className="mt-2">
          <textarea
            id="about"
            name="about"
            rows={3}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={value}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default PartOneFormQuestion;
