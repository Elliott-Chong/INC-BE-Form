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
    id: 14,
    question: `Describe how the organisation identifies and segments customers based on their different wants and needs `,
    description: ` Please provide a brief description of the methods or strategies the organization uses to identify and categorize customers based on their distinct preferences and requirements. Include any market research, data analysis, or customer feedback mechanisms used to segment the customer base effectively.`,
    tooltip: `Questions to Consider:  • Does the organisation conduct business and market analyses to understand customer requirements? • Does the organisation use appropriate listening channels (such as focus groups, interviews, competitive comparisons, social media, etc.) to understand its different customer segments? `,
  },
  {
    id: 15,
    question: `Describe how the organisation uses information on current and future customer wants and needs for planning and decision making `,
    description: `Please describe how the organization collects and utilizes information about current and anticipated customer demands and preferences to inform its strategic planning and decision-making processes. Explain how this customer-centric data is integrated into product development, marketing strategies, and overall business planning to ensure alignment with evolving customer needs and market trends.`,
    tooltip: `Questions to Consider:  • Does the organisation translate the market and customer information, especially new requirements into the strategic plans? `,
  },
  {
    id: 16,
    question: `Describe how the organisation analyses customer feedback to drive improvements`,
    description: ` please describe the organization's approach to analyzing and utilizing customer feedback to enact meaningful improvements. Explain how the organization collects and processes customer feedback, including surveys, reviews, and other channels. Detail how this feedback is systematically reviewed and integrated into the organization's quality improvement initiatives, product enhancements, and service refinements, ensuring a continuous cycle of customer-driven enhancement and satisfaction.`,
    tooltip: `Questions to Consider:  • Does the organisation understand and take steps to address the root causes of issues relating to negative feedback? • Does the organisation identify what drives positive experiences? `,
  },
  {
    id: 17,
    question: `Describe how the organisation measures and improves customer satisfaction to provide value`,
    description: `Please describe the organization's methodologies for measuring and enhancing customer satisfaction to deliver value. Explain how the organization collects and analyzes customer satisfaction data, including metrics such as Net Promoter Score (NPS), customer satisfaction surveys, and other relevant indicators. Elaborate on the strategies employed to address any identified areas for improvement, such as refining products, services, and customer support, thereby enhancing overall customer experience and delivering sustained value to the customer base.`,
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

  useEffect(() => {
    console.log("formData: ", formData);
  }, [formData]);

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
                <h1 className="col-span-full text-lg">1. Customers</h1>
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
            nextHref="/BEForm/partTwo/sectionThree"
            backHref="/BEForm/partTwo/sectionOne"
          />
        </form>
      </div>
    </>
  );
};

export default partTwoSectionTwo;
