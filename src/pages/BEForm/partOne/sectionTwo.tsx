import BackAndNextButtons from "@/components/BEForm/BackAndNextButtons";
import PartOneFormQuestion from "@/components/BEForm/PartOneFormQuestion";
import { convertNumberToAsciiLetters } from "@/lib/utils";
import React, { useState } from "react";

type Props = {};

type FormData = {
  [key: number]: string;
};

const questions = [
  {
    id: 5,
    question: "Outline the Organisational Chart/Structure",
    description: "Insert the organisational chart here",
    tooltip:
      "Insert the organisational chart here (include group structure if applicable).",
  },
  {
    id: 6,
    question: "State the major markets and the principal customer types",
    description: "List the major markets",
    tooltip:
      "List the major markets (e.g. local, regional and international) and the principal customer types (e.g. consumers, other business and government)",
  },
  {
    id: 7,
    question:
      "Describe the customers’ key requirements for the products and services",
    description:
      "List the key requirements that the customers have for the products and services.",
    tooltip:
      "List the key requirements that the customers have for the products and services. Highlight significant differences, if any, in requirements among customer groups or markets.",
  },
  {
    id: 8,
    question: "State the number and types of partners and suppliers",
    description: "List the number and types of partners and suppliers",
    tooltip:
      "List the number and types of partners and suppliers (highlight key partners and suppliers).",
  },
  {
    id: 9,
    question: "Describe the key requirements for suppliers and/or partners",
    description:
      "List the requirements/criteria that is used to select partners and suppliers.",
    tooltip:
      "List the requirements/criteria that is used to select partners and suppliers. (e.g. Are there certain standards or track records that the partners and suppliers are expected to have?",
  },
];

const partOneSectionTwo = (props: Props) => {
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
          <h1 className="text-2xl font-bold tracking-wide">
            PART 1: ORGANISATIONAL PROFILE
          </h1>
        </div>
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <h1 className="col-span-full text-lg">
                  2. Organisational Relationships
                </h1>
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
            nextHref="/BEForm/partOne/sectionThree"
            backHref="/BEForm/partOne/sectionOne"
          />
        </form>
      </div>
    </>
  );
};

export default partOneSectionTwo;
