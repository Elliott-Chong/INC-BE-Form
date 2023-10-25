import React from "react";

import TooltipForQuestion from "./Tooltip";
import AddActivitiesButton from "./AddActivitiesDropDown";
import HistoryButton from "./HistoryButton";

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
          className="flex w-full space-x-2 text-sm font-medium leading-6 text-gray-900"
        >
          <span>{question}</span>
          <span>
            <TooltipForQuestion tooltip={tooltip} />
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
            <AddActivitiesButton />
            <HistoryButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartOneFormQuestion;
