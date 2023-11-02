import BackAndNextButtons from "@/components/BEForm/BackAndNextButtons";
import React, { useState } from "react";

type Props = {};

type FormData = {
  [key: number]: QuestionAnswer;
};

interface QuestionAnswer {
  radio: string;
  currentKeyIndicators: string;
  recommendedIndicators: string;
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { convertNumberToAsciiLetters } from "@/lib/utils";
import PartThreeFormQuestion from "@/components/BEForm/PartThreeFromQuestion";
import ProgressBar from "@/components/ui/progress-bar";

const questions = [
  {
    id: 29,
    question: `Customer Indicators`,
    description: ``,
    tooltip: `Suggestions can include: - Customer satisfaction, loyalty and overall experience - Customer feedback  - Customer’s overall assessment of product/services - Net Promoter Score/Mystery Audit results`,
  },
  {
    id: 30,
    question: `Financial Indicators`,
    description: ``,
    tooltip: `Suggestions can include: - Revenue growth - Profitability - Liquidity - Debt-to-equity ratio - Return on investment - Asset utilisation - Market share`,
  },
  {
    id: 31,
    question: `People Indicators`,
    description: ``,
    tooltip: `Suggestions can include: - Recruitment programme (e.g. cost per hire, revenue per employee) - Engagement levels - Training and development expenditure - Talent retention rates - Generic factors such as safety, turnover, and overall satisfaction`,
  },
  {
    id: 31,
    question: `Operational Indicators`,
    description: ``,
    tooltip: `Suggestions can include: - Relevant indicators on productivity, efficiency and inventory management (e.g. delivery performance)  - Specific indicators on process performance`,
  },
];

const partThreeSectionSeven = (props: Props) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange = (key: number, value: QuestionAnswer) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        radio: value.radio,
        currentKeyIndicators: value.currentKeyIndicators,
        recommendedIndicators: value.recommendedIndicators,
      },
    }));
  };

  return (
    <>
      <div className="mx-auto max-w-2xl">
      <div className="pb-8">
        <ProgressBar progress={90}></ProgressBar>
      </div>
        <div className="mt-10 flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold tracking-wide">
            PART 3: ORGANISATIONAL RESULTS
          </h1>
        </div>
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <h1 className="col-span-full text-lg">
                  7. Performance Indicators
                </h1>
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
                          <PartThreeFormQuestion
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
            nextHref=""
            backHref="/BEForm/partTwo/sectionSix"
          />
        </form>
      </div>
    </>
  );
};

export default partThreeSectionSeven;
