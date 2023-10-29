import React from "react";

import TooltipForQuestion from "./Tooltip";
import AddActivitiesButton from "./AddActivitiesDropDown";
import HistoryButton from "./HistoryButton";

import Comment from "./Comment";
import TextEditor from "./MDEditor";
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
          className="flex w-full space-x-2 text-base font-medium leading-6 text-gray-900"
        >
          <span className="text-lg">{question}</span>
          <span>
            <TooltipForQuestion tooltip={tooltip} />
          </span>
        </label>
        <p className="mt-3 w-[95%] text-base leading-6 text-gray-600">
          {description}
        </p>
        <div className="mt-2 flex">
          <TextEditor
            value={value}
            onInputChange={onInputChange}
            className="w-[95%]"
          />
          <div className="grow"></div>
          <div>
            <AddActivitiesButton />
            <HistoryButton />
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartOneFormQuestion;
