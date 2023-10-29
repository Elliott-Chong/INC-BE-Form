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
  currentKeyIndicators: string;
  recommendedIndicators: string;
}

const PartThreeFormQuestion = (props: Props) => {
  const { question, description, formDataValues, tooltip, onInputChange } =
    props;

  const [value, setValue] = React.useState<QuestionAnswer>(
    formDataValues || {
      radio: "",
      currentKeyIndicators: "",
      recommendedIndicators: "",
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
      currentKeyIndicators: text,
    }));
  };

  const handleAreasForImprovementChange = (text: string) => {
    setValue((prevValue) => ({
      ...prevValue,
      recommendedIndicators: text,
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
          <Label>Indicators</Label>
          <RadioGroup defaultValue="noIndicators" onChange={handleRadioChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="noIndicators" id="r1" />
              <Label htmlFor="r1">NO INDICATORS (0)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fewIndicators" id="r2" />
              <Label htmlFor="r2">FEW INDICATORS (1)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="keyIndicators" id="r3" />
              <Label htmlFor="r3">KEY INDICATORS (2)</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="mt-2 flex space-x-1">
          <div className="flex w-full flex-col">
            <div className="w-full">
              <Label>Current Key Indicators</Label>
              <TextEditor
                value={value.currentKeyIndicators}
                onInputChange={handleStrengthsChange}
                className="w-[95%]"
              />
            </div>
            <div className="w-full">
              <Label>Recommended Indicators</Label>
              <TextEditor
                value={value.recommendedIndicators}
                onInputChange={handleAreasForImprovementChange}
                className="w-[95%]"
              />
            </div>
          </div>
          <div className="grow"></div>
          <div className="mt-7 flex flex-col justify-evenly">
            <AddActivitiesButton />
            <HistoryButton />
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartThreeFormQuestion;
