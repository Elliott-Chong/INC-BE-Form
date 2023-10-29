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
    id: 21,
    question: `Describe how the organisation develops its HR strategy to support organisation's directions`,
    description: `Explain how the organization formulates its human resources (HR) strategy in alignment with the overall organizational direction, highlighting the emphasis on talent acquisition, development, and retention. Discuss the integration of HR practices that foster a conducive work environment, employee engagement, and continuous learning, ensuring the fulfillment of the organization's objectives and long-term success.`,
    tooltip: `Questions to Consider:  • Does the organisation identify important external factors such as changes in operating environment and internal factors such as employee demographics when developing its HR strategy? • HR strategy would include plans that cover areas such as talent management and retention, recruitment, engagement, satisfaction and development.`,
  },
  {
    id: 22,
    question: `Describe how the organisation adopts a recruitment and selection process to meet organisational needs`,
    description: `Describe the organization's recruitment and selection process, emphasizing the alignment of hiring practices with organizational requirements and goals. Discuss the use of targeted job descriptions, comprehensive candidate evaluation methods, and streamlined selection processes to ensure the acquisition of skilled and suitable personnel who can contribute to the organization's success and growth.`,
    tooltip: `Questions to Consider:  • Does the organisation leverage on appropriate testing methods such as assessments and simulations that measure job knowledge and abilities?`,
  },
  {
    id: 23,
    question: `Describe how the organisation provides learning and development opportunities for employee growth`,
    description: `Explain how the organization facilitates learning and development opportunities for employee growth, emphasizing the implementation of training programs, mentorship initiatives, and skill enhancement workshops. Discuss the promotion of a culture of continuous learning and personal development, ensuring that employees have the resources and support to expand their knowledge and skills, thereby contributing to their professional growth and the organization's overall success.`,
    tooltip: `Questions to Consider:  • Does the organisation ensure that the learning and development programmes take into account job analysis (e.g. the types and level of skills required), organisational direction and timeliness of trainings? • Does the organisation review the effectiveness of the learning and development programmes by verifying the knowledge and skills acquired by the employees, the impact on the individual’s performance, and the impact on the performance of the organisation?`,
  },
  {
    id: 24,
    question: `Describe how the organisation engages and seeks feedback from employees to make improvements`,
    description: `Detail how the organization fosters employee engagement and actively seeks feedback, emphasizing open communication channels, regular employee surveys, and feedback mechanisms. Discuss how this feedback is carefully considered and integrated into the organization's policies, processes, and work environment to drive continuous improvement and enhance employee satisfaction and well-being.`,
    tooltip: `Questions to Consider:  • Does the organisation use different ways to encourage employees to contribute to the organisation’s strategic goals and enhance a sense of belonging, such as through suggestions schemes and task forces? • Does the organisation track the effectiveness of these methods used to engage employees?`,
  },
  {
    id: 25,
    question: `Describe how the organisation provides compensation and rewards to motivate and retain employees`,
    description: `Explain how the organization designs its compensation and rewards system to motivate and retain employees, emphasizing the use of competitive salary structures, performance-based incentives, and recognition programs. Discuss the alignment of rewards with employee contributions and organizational objectives, ensuring that the compensation package reflects the value of employees' efforts and fosters a culture of retention and high performance.`,
    tooltip: `Questions to Consider:  • Does the organisation have a performance management system that effectively measures, recognises and rewards high performance and desired behaviours? (e.g. being innovative) • Does the organisation communicate the performance and recognition processes to all employees? `,
  },
];

const partTwoSectionFour = (props: Props) => {
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
                <h1 className="col-span-full text-lg">4. People</h1>
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
            nextHref="/BEForm/partTwo/sectionFive"
            backHref="/BEForm/partTwo/sectionThree"
          />
        </form>
      </div>
    </>
  );
};

export default partTwoSectionFour;
