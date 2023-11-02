import BackAndNextButtons from "@/components/BEForm/BackAndNextButtons";
import PartOneFormQuestion from "@/components/BEForm/PartOneFormQuestion";
import { convertNumberToAsciiLetters } from "@/lib/utils";
import React, { useState } from "react";
import ProgressBar from "@/components/ui/progress-bar";
type Props = {};

type FormData = {
  [key: number]: string;
};

const questions = [
  {
    id: 1,
    question: "Describe the Mission, Vision, and Values",
    description:
      "Mission statement defines the purpose, vision statement outlines the ideal future, and values statement highlights the guiding principles of an organization.",
    tooltip:
      "A mission statement explains why the organisations exists. It describes the organisation’s purpose and its overall intention. A vision statement is forward-looking and creates a mental image of the ideal state that the organisation wishes to achieve.  A values statement lists the core principles that guide and direct the organisation and its culture. It guides decision making and establishes a standard against which actions can be assessed.",
  },
  {
    id: 2,
    question: "Describe the main products and services of the organisation",
    description: "List the main products and key services of the organisation.",
    tooltip: "List the main products and key services of the organisation. ",
  },
  {
    id: 3,
    question: "Describe the employee profile",
    description:
      "List the various job type of employees in the organisation, how many are there, and demographic details such as age range.",
    tooltip:
      "List the various job type of employees in the organisation, how many are there, and demographic details such as age range. ",
  },
  {
    id: 4,
    question:
      "Describe the key equipment, facilities, or technologies used to deliver your products and services ",
    description:
      "List key equipment, facilities and technologies to deliver their products and services.",
    tooltip:
      "List key equipment, facilities and technologies to deliver their products and services. ",
  },
];

const partOneSectionOne = (props: Props) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange = (key: number, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <>
      <div className="mx-auto max-w-2xl">
      <div className="pb-8">
        <ProgressBar progress={10}></ProgressBar>
      </div>
        <div className="mt-10 flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold tracking-wide">
            PART 1: ORGANISATIONAL PROFILE
          </h1>
        </div>
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <h1 className="col-span-full">1. Organisational Environment</h1>
                <div className="col-span-full ml-10 space-y-10">
                  {questions.map((question, index: number) => (
                    <PartOneFormQuestion
                      key={index}
                      question={`${convertNumberToAsciiLetters(index)}. ${
                        question.question
                      }`}
                      description={question.description}
                      tooltip={question.tooltip}
                      value={formData[question.id] ?? ""}
                      onInputChange={(value) =>
                        handleInputChange(question.id, value)
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
                      
          {/* Buttons for Back and Next */}
          <BackAndNextButtons
            nextHref="/BEForm/partOne/sectionTwo"
            backHref=""
          />
        </form>
        
        
      </div>
    </>
  );
};

export default partOneSectionOne;
