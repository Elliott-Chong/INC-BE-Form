import BackAndNextButtons from "@/components/BEForm/BackAndNextButtons";
import PartTwoFormQuestion from "@/components/BEForm/PartTwoFormQuestion";
import React, { useState } from "react";

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
import ProgressBar from "@/components/ui/progress-bar";

const questions = [
  {
    id: 26,
    question: `Describe how the organisation defines and evaluates key and support business processes`,
    description: `Explain how the organization defines key and support business processes, emphasizing the documentation and mapping of these processes to ensure clarity and efficiency. Discuss the establishment of performance metrics and regular evaluations to measure the effectiveness and identify areas for improvement within these processes, fostering a culture of continuous optimization and operational excellence.`,
    tooltip: `Questions to Consider:  • Does the organisation’s key processes have clear objectives and targets (e.g. cycle time, quality level, cost) which are linked to organisational goals? • Does the organisation regularly review its key processes to ensure that they meet the performance standards or targets?`,
  },
  {
    id: 27,
    question: `Describe how the organisation identifies key suppliers and partners to achieve organisational goals`,
    description: `Describe the organization's recruitment and selection process, emphasizing the alignment of hiring practices with organizational requirements and goals. Discuss the use of targeted job descriptions, comprehensive candidate evaluation methods, and streamlined selection processes to ensure the acquisition of skilled and suitable personnel who can contribute to the organization's success and growth.`,
    tooltip: `Questions to Consider:  • Does the organisation proactively ensure that suppliers have the capability and capacity to meet its requirements (e.g. supplier, audits, supplier rating and certification system)?`,
  },
];

const partTwoSectionFive = (props: Props) => {
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
      <div className="pb-8">
        <ProgressBar progress={60}></ProgressBar>
      </div>
        <div className="mt-10 flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold tracking-wide">
            PART 2: ORGANISATIONAL SYSTEM ASSESSMENT
          </h1>
        </div>
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <h1 className="col-span-full text-lg">5. Processes</h1>
                <div className="col-span-full ml-10 space-y-10">
                  <Accordion type="single" collapsible className="w-full">
                    {questions.map((question, index: number) => (
                      <AccordionItem value={index.toString()} key={index}>
                        <AccordionTrigger className="w-full">
                          <h1 className="flex w-[50%] justify-start truncate">
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
            nextHref="/BEForm/partTwo/sectionSix"
            backHref="/BEForm/partTwo/sectionFour"
          />
        </form>
      </div>
    </>
  );
};

export default partTwoSectionFive;
