import React from "react";

type Props = {};

const Part = ({ partName, sections }: any) => {
  return (
    <div className="m-2 p-4">
      <h2 className="p-2 text-2xl font-bold">{partName}</h2>
      {sections.map((section: any, sectionIndex: number) => (
        <table key={sectionIndex} className="w-full">
          <tbody>
            <tr>
              <th className="w-1/3 border p-2 text-left">Section</th>
              <th className="w-1/3 border p-2 text-left">Question</th>
              <th className="w-1/3 border p-2 text-left">Resource</th>
            </tr>
            {section.questions.map((question: any, questionIndex: number) => (
              <tr key={questionIndex}>
                {questionIndex === 0 ? (
                  <td className="border p-2" rowSpan={section.questions.length}>{section.sectionName}</td>
                ) : (
                  null
                )}
                <td className="border p-2">{question.questionText}</td>
                <td className="border p-2">
                  <a
                    href={question.resourceLink}
                    className="text-blue-300 visited:text-purple-600"
                  >
                    {question.resourceName}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
};

const AllResources = (props: Props) => {
  const parts = [
    {
      partName: "PART 1: Organisational Profile",
      sections: [
        {
          sectionName: "1",
          questions: [
            {
              questionText: "Question 1",
              resourceLink: "https://splms.polite.edu.sg/d2l/home/6667",
              resourceName: "Resource 1",
            },
            {
              questionText: "Question 2",
              resourceLink: "https://splms.polite.edu.sg/d2l/home/6667",
              resourceName: "Resource 2",
            }
          ],
        },
      ],
    },
    {
      partName: "PART 2: Organisational System Assessment",
      sections: [
        {
          sectionName: "2",
          questions: [
            {
              questionText: "Question 1",
              resourceLink: "https://splms.polite.edu.sg/d2l/home/6667",
              resourceName: "Resource 1",
            },
            {
              questionText: "Question 2",
              resourceLink: "https://splms.polite.edu.sg/d2l/home/6667",
              resourceName: "Resource 2",
            }
          ],
        },
      ],
    },
    {
      partName: "Part 3: Organisational Results",
      sections: [
        {
          sectionName: "3",
          questions: [
            {
              questionText: "Question 1",
              resourceLink: "https://splms.polite.edu.sg/d2l/home/6667",
              resourceName: "Resource 1",
            },
            {
              questionText: "Question 2",
              resourceLink: "https://splms.polite.edu.sg/d2l/home/6667",
              resourceName: "Resource 2",
            }
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center">
      <div className="m-2 p-4">
        <h1 className="text-3xl font-bold">All Resources</h1>
      </div>
      {parts.map((part, index) => (
        <Part key={index} partName={part.partName} sections={part.sections} />
      ))}
    </div>
  );
};

export default AllResources;
