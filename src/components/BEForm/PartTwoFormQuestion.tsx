import React, { useEffect } from "react";

import TooltipForQuestion from "./Tooltip";
import AddActivitiesButton from "./AddActivitiesDropDown";
import HistoryButton from "./HistoryButton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import Comment from "./Comment";
import { Label } from "../ui/label";
import TextEditor from "./MDEditor";
type Props = {
  question: string;
  description: string;
  tooltip: string;
  formDataValues: QuestionAnswer | undefined;
  onInputChange: (value: QuestionAnswer) => void;
};

interface QuestionAnswer {
  radio: string;
  strengths: string;
  areasForImprovement: string;
}

const PartTwoFormQuestion = (props: Props) => {
  const { question, description, formDataValues, tooltip, onInputChange } =
    props;

  const [value, setValue] = React.useState<QuestionAnswer>(
    formDataValues || {
      radio: "",
      strengths: "",
      areasForImprovement: "",
    },
  );

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevValue) => ({
      ...prevValue,
      radio: event.target.value,
    }));
  };

  const handleStrengthsChange = (text: string) => {
    setValue((prevValue) => ({
      ...prevValue,
      strengths: text,
    }));
  };

  const handleAreasForImprovementChange = (text: string) => {
    setValue((prevValue) => ({
      ...prevValue,
      areasForImprovement: text,
    }));
  };

  useEffect(() => {
    onInputChange(value);
  }, [value]);

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
          <RadioGroup defaultValue="notStarted" onChange={handleRadioChange}>
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
          <div className="flex w-full flex-col">
            <div className="w-full">
              <Label>Strengths</Label>
              <TextEditor
                value={value.strengths}
                onInputChange={handleStrengthsChange}
                className="w-[95%]"
              />
            </div>
            <div className="w-full">
              <Label>Areas for improvement</Label>
              <TextEditor
                value={value.areasForImprovement}
                onInputChange={handleAreasForImprovementChange}
                className="w-[95%]"
              />
            </div>
          </div>
          <div className="grow"></div>
          <div className="mt-7 flex flex-col">
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
