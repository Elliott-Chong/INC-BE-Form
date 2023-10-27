import React from "react";

import TooltipForQuestion from "./Tooltip";
import AddActivitiesButton from "./AddActivitiesDropDown";
import HistoryButton from "./HistoryButton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import Comment from "./Comment";
import { Label } from "../ui/label";
type Props = {
  question: string;
  description: string;
  tooltip: string;
  formData: FormData;
  onInputChange: (value: QuestionAnswer) => void;
};

type FormData = {
  [key: number]: QuestionAnswer;
};

interface QuestionAnswer {
  radio: string;
  strengths: string;
  areasForImprovement: string;
}

const PartTwoFormQuestion = (props: Props) => {
  const { question, description, tooltip, formData, onInputChange } = props;

  const [value, setValue] = React.useState<QuestionAnswer>(
    {} as QuestionAnswer,
  );

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevValue) => ({
      ...prevValue,
      radio: event.target.value,
    }));
  };

  const handleStrengthsChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValue((prevValue) => ({
      ...prevValue,
      strengths: event.target.value,
    }));
  };

  const handleAreasForImprovementChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValue((prevValue) => ({
      ...prevValue,
      areasForImprovement: event.target.value,
    }));
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

        <div className="my-5">
          <Label>Progress</Label>
          <RadioGroup
            defaultValue="comfortable"
            onValueChange={() => {
              handleRadioChange;
            }}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="notStarted" id="r1" />
              <Label htmlFor="r1">Not Started</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="started" id="r2" />
              <Label htmlFor="r2">Started</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="improved" id="r3" />
              <Label htmlFor="r3">Improved</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="effective" id="r4" />
              <Label htmlFor="r4">Effective</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="mt-2 flex space-x-1">
          <div className="w-full">
            <Label>Strengths</Label>
            <textarea
              id="about"
              name="about"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={value.strengths}
              onChange={handleStrengthsChange}
            />
          </div>
          <div className="w-full">
            <Label>Areas for improvement</Label>
            <textarea
              id="about"
              name="about"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={value.areasForImprovement}
              onChange={handleAreasForImprovementChange}
            />
          </div>
          <div className="grow"></div>
          <div className="mt-7">
            <AddActivitiesButton />
            <HistoryButton />
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartTwoFormQuestion;
