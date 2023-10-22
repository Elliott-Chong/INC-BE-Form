import PartOneFormQuestion from "@/components/PartOneFormQuestion";
import React, { useState } from "react";

type Props = {};

type FormData = {
  [key: number]: string;
};

const questions = [
  {
    question: "Describe the Mission, Vision, and Values",
    description:
      "Mission statement defines the purpose, vision statement outlines the ideal future, and values statement highlights the guiding principles of an organization.",
  },
  {
    question: "Describe the main products and services of the organisation",
    description: "List the main products and key services of the organisation.",
  },
  {
    question: "Describe the employee profile",
    description:
      "List the various job type of employees in the organisation, how many are there, and demographic details such as age range.",
  },
  {
    question:
      "Describe the key equipment, facilities, or technologies used to deliver your products and services ",
    description:
      "List key equipment, facilities and technologies to deliver their products and services.",
  },
];

const sectionOne = (props: Props) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange = (key: number, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted with data: ", formData);
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
                <h1 className="col-span-full">1. Organisational Environment</h1>
                <div className="col-span-full ml-10 space-y-10">
                  {questions.map((question, index: number) => (
                    <PartOneFormQuestion
                      key={index}
                      question={`${String.fromCharCode(97 + index)}. ${
                        question.question
                      }`}
                      description={question.description}
                      value={formData[index] ?? ""}
                      onInputChange={(value) => handleInputChange(index, value)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Buttons for Back and Next */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Back
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default sectionOne;
