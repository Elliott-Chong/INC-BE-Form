import BackAndNextButtons from "@/components/BEForm/BackAndNextButtons";
import PartTwoFormQuestion from "@/components/BEForm/PartTwoFormQuestion";
import React, { useEffect, useState } from "react";

type Props = {};

type FormData = {
  [key: number]: QuestionAnswer;
};

interface QuestionAnswer {
  radio: string;
  strengths: string;
  areasForImprovement: string;
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { convertNumberToAsciiLetters } from "@/lib/utils";

const questions = [
  {
    id: 12,
    question:
      "Describe how the leaders develop the mission, vision and values to guide the organisation",
    description: `To answer the given questions, outline the process by which senior leaders formulate and communicate the organization's mission, vision, and values. Analyze their approach to assessing employee engagement with these guiding principles, including their involvement in performance appraisals, learning initiatives, and recognition programs.`,
    tooltip: `Questions to Consider:
        • Have the senior leaders developed a clear vision, mission and set of values which drive
        excellence?
        • How do the senior leaders evaluate the level of commitment and understanding that the
        employees have of the mission, vision and values?
        • Do the senior leaders personally communicate the organisation’s mission, vision and values
        through their involvement in employees’ performance appraisal, learning and development,
        and recognition?`,
  },
  {
    id: 13,
    question: `Describe how the leaders develop the culture to support the organisation's
    directions`,
    description: `To address the prompt, assess how senior leaders cultivate an organizational culture that aligns with the company's objectives. Examine their strategies for establishing a shared vision, mission, and values that promote excellence. Evaluate their methods for gauging employee commitment and comprehension of these principles and whether they actively communicate them during performance appraisals, learning initiatives, and recognition programs.`,
    tooltip: `Questions to Consider:
    • Have the senior leaders developed a clear vision, mission and set of values which drive
    excellence?
    • How do the senior leaders evaluate the level of commitment and understanding that the
    employees have of the mission, vision and values?
    • Do the senior leaders personally communicate the organisation’s mission, vision and values
    through their involvement in employees’ performance appraisal, learning and development,
    and recognition?`,
  },
];

const partTwoSectionOne = (props: Props) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange = (key: number, value: QuestionAnswer) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        radio: value.radio,
        strengths: value.strengths,
        areasForImprovement: value.areasForImprovement,
      },
    }));
  };

  return (
    <>
      <div className="mx-auto max-w-2xl">
        <div className="mt-10 flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold tracking-wide">
            PART 2: ORGANISATIONAL SYSTEM ASSESSMENT
          </h1>
        </div>
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <h1 className="col-span-full text-lg">1. Leadership</h1>
                <div className="col-span-full ml-10 space-y-10">
                  <Accordion type="single" collapsible className="w-full">
                    {questions.map((question, index: number) => (
                      <AccordionItem value={index.toString()} key={index}>
                        <AccordionTrigger className="w-full">
                          <h1 className="w-[50%] truncate">
                            {`${convertNumberToAsciiLetters(index)}. ${
                              question.question
                            }`}
                          </h1>
                        </AccordionTrigger>
                        <AccordionContent>
                          <PartTwoFormQuestion
                            question={`${convertNumberToAsciiLetters(index)}. ${
                              question.question
                            }`}
                            description={question.description}
                            tooltip={question.tooltip}
                            formDataValues={formData[question.id]}
                            onInputChange={(value) =>
                              handleInputChange(question.id, value)
                            }
                          />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons for Back and Next */}
          <BackAndNextButtons
            nextHref="/BEForm/partTwo/sectionTwo"
            backHref=""
          />
        </form>
      </div>
    </>
  );
};

export default partTwoSectionOne;
