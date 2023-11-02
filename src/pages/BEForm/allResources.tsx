import React from "react";

type Props = {};

const Part1 = () => {
  return (
    <div className="m-2 p-4">
      <h2 className="p-2 text-2xl font-bold">PART 1: Organisational Profile</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <th className="w-1/2 border p-2 text-left">Section</th>
            <th className="w-1/2 border p-2 text-left">Resource</th>
          </tr>
          <tr>
            <td className="border p-2">Section 1</td>
            <td className="border p-2">
              <a
                href="https://docs.google.com/presentation/d/1qjyVG1uPRYfRmnvL50Zbs13yXqKuWd2Dm4Gtn20NBO8/edit?usp=sharing"
                className="text-blue-300 visited:text-purple-600"
              >
                Presentation
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Part2 = () => {
  return (
    <div className="m-2 p-4">
      <h2 className="p-2 text-2xl font-bold">
        PART 2: Organisational System Assessment
      </h2>
      <table className="w-full">
        <tbody>
          <tr>
            <th className="w-1/2 border p-2 text-left">Section</th>
            <th className="w-1/2 border p-2 text-left">Resource</th>
          </tr>
          <tr>
            <td className="border p-2">Section 1</td>
            <td className="border p-2">
              <a
                href="https://docs.google.com/document/d/1XULffhUj-zpFtRFF9UJ2h5vzY1_QH0kj6coAu67ihbs/edit?usp=sharing"
                className="text-blue-300 visited:text-purple-600"
              >
                Ideation
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Part3 = () => {
  return (
    <div className="m-2 p-4">
      <h2 className="p-2 text-2xl font-bold">Part 3: Organisational Results</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <th className="w-1/2 border p-2 text-left">Section</th>
            <th className="w-1/2 border p-2 text-left">Resource</th>
          </tr>
          <tr>
            <td className="border p-2">Section 7</td>
            <td className="border p-2">
              <a
                href="https://media.tenor.com/jUMex_rdqPwAAAAM/among-us-twerk.gif"
                className="text-blue-300 visited:text-purple-600"
              >
                Mascot
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const AllResources = (props: Props) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="m-2 p-4">
        <h1 className="text-3xl font-bold">All Resources</h1>
      </div>
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  );
};

export default AllResources;
