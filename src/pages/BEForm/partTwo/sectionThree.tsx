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
    id: 18,
    question: `Describe how the organisation identifies organisational challenges, opportunities and risks`,
    description: `Explain the methods for conducting comprehensive assessments, including SWOT analysis and market research, to identify opportunities for growth and development while mitigating potential risks and challenges.`,
    tooltip: `Questions to Consider:  • Does the organisation conduct a thorough scan of the external environment (e.g. customer feedback, market intelligence, industry trends)? • Does the organisation consider internal capabilities (e.g. data on operational performance, quality indicators)? • Does the organisation consider the inputs from stakeholders?`,
  },
  {
    id: 19,
    question: `Describe how the organisation develops long and short-term strategies to achieve organisational goals`,
    description: `Describe the organization's approach to formulating strategies based on market analysis and customer demands, emphasizing the alignment of goals, resource allocation, and clear milestones for effective execution and goal achievement.`,
    tooltip: `Questions to Consider:  • Does the strategy development process produce an overall business plans which goes beyond a financial or budget plan? • Does the organisation set stretch goals that are based on competitive analysis, process improvements or customer requirements? `,
  },
  {
    id: 20,
    question: `Describe how the organisation translates strategies into action plans to achieve organisational goals`,
    description: `Detail how the organization translates overarching strategies into actionable plans, emphasizing the development of specific, measurable, achievable, relevant, and time-bound (SMART) objectives. Discuss the allocation of resources, assignment of responsibilities, and establishment of clear timelines, ensuring effective execution and alignment with organizational goals.`,
    tooltip: `Questions to Consider:  • Does the organisation communicate the action plans to all levels, and translate corporate goals into department and individual goals.  • Does the organisation set relevant and well-defined indicators to track the achievement of the plans and goals?`,
  },
];

const partTwoSectionThree = (props: Props) => {
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
        <ProgressBar progress={45}></ProgressBar>
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
                <h1 className="col-span-full text-lg">3. Strategy</h1>
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
            nextHref="/BEForm/partTwo/sectionFour"
            backHref="/BEForm/partTwo/sectionTwo"
          />
        </form>
        
      </div>
    </>
  );
};

export default partTwoSectionThree;
