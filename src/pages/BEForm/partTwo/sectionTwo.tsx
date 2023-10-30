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

const questions = [
  {
    id: 14,
    question: `Describe how the organisation identifies and segments customers based on their different wants and needs `,
    description: `Describe the methods used to categorize customers based on their preferences and needs, highlighting the use of market research and data analysis for effective segmentation.`,
    tooltip: `Questions to Consider:  • Does the organisation conduct business and market analyses to understand customer requirements? • Does the organisation use appropriate listening channels (such as focus groups, interviews, competitive comparisons, social media, etc.) to understand its different customer segments? `,
  },
  {
    id: 15,
    question: `Describe how the organisation uses information on current and future customer wants and needs for planning and decision making `,
    description: `Explain how customer data is integrated into planning and decision-making processes, emphasizing the alignment of products and strategies with evolving customer preferences and market trends.`,
    tooltip: `Questions to Consider:  • Does the organisation translate the market and customer information, especially new requirements into the strategic plans? `,
  },
  {
    id: 16,
    question: `Describe how the organisation analyses customer feedback to drive improvements`,
    description: `Discuss the systematic review of customer feedback and its integration into quality improvement initiatives and service enhancements, ensuring continuous customer-driven satisfaction.`,
    tooltip: `Questions to Consider:  • Does the organisation understand and take steps to address the root causes of issues relating to negative feedback? • Does the organisation identify what drives positive experiences? `,
  },
  {
    id: 17,
    question: `Describe how the organisation measures and improves customer satisfaction to provide value`,
    description: `Describe the methodologies used to measure customer satisfaction, highlighting the use of metrics and strategies to improve products, services, and customer support for enhanced customer experience and value delivery.`,
    tooltip: `Questions to Consider:  • Does the organisation measure customer satisfaction and loyalty? • Does the organisation measure customer satisfaction and loyalty? `,
  },
];

const partTwoSectionTwo = (props: Props) => {
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
                <h1 className="col-span-full text-lg">2. Customers</h1>
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
            nextHref="/BEForm/partTwo/sectionThree"
            backHref="/BEForm/partTwo/sectionOne"
          />
        </form>
      </div>
    </>
  );
};

export default partTwoSectionTwo;
