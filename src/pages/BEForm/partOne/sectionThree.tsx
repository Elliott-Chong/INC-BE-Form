import BackAndNextButtons from "@/components/BEForm/BackAndNextButtons";
import PartOneFormQuestion from "@/components/BEForm/PartOneFormQuestion";
import React, { useState } from "react";

type Props = {};

type FormData = {
  [key: number]: string;
};

const questions = [
  {
    id: 10,
    question: "Describe the key challenges in the competitive environment",
    description: "List the key challenges faced by the organisation.",
    tooltip: "List the key challenges faced by the organisation.",
  },
  {
    id: 11,
    question:
      "Describe the organisation’s position, compared to its competitors",
    description: "List and rank competitors in the industry.",
    tooltip:
      "List and rank competitors in the industry. Are there many small competitors or are there few but big competitors?",
  },
];

const partOneSectionThree = (props: Props) => {
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
        <div className="mt-10 flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold tracking-wide">
            PART 1: ORGANISATIONAL PROFILE
          </h1>
        </div>
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <h1 className="col-span-full">3. Organisational Challenges</h1>
                <div className="col-span-full ml-10 space-y-10">
                  {questions.map((question, index: number) => (
                    <PartOneFormQuestion
                      key={index}
                      question={`${String.fromCharCode(97 + index)}. ${
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
            nextHref=""
            backHref="/BEForm/partOne/sectionTwo"
          />
        </form>
      </div>
    </>
  );
};

export default partOneSectionThree;
