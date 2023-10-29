import React from 'react';

type Props = {};

const Part1 = () => {
  return (
    <div className="p-4 m-2">
      <h2 className="text-2xl font-bold p-2">Part 1</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <th className="text-left p-2 border">Section</th>
            <th className="text-left p-2 border">Resource</th>
          </tr>
          <tr>
            <td className="p-2 border">Section 1</td>
            <td className="p-2 border">
              <a href="https://www.google.com" className="text-blue-300 visited:text-purple-600">Google</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Part2 = () => {
  return (
    <div className="p-4 m-2">
      <h2 className="text-2xl font-bold p-2">Part 2</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <th className="text-left p-2 border">Section</th>
            <th className="text-left p-2 border">Resource</th>
          </tr>
          <tr>
            <td className="p-2 border">Section 1</td>
            <td className="p-2 border">
              <a href="https://www.google.com" className="text-blue-300 visited:text-purple-600">Google</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Part3 = () => {
  return (
    <div className="p-4 m-2">
      <h2 className="text-2xl font-bold p-2">Part 3</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <th className="text-left p-2 border">Section</th>
            <th className="text-left p-2 border">Resource</th>
          </tr>
          <tr>
            <td className="p-2 border">Section 7</td>
            <td className="p-2 border">
              <a href="https://www.google.com" className="text-blue-300 visited:text-purple-600">Google</a>
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
      <div className="p-4 m-2">
        <h1 className="text-3xl font-bold">All Resources</h1>
      </div>
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  );
};

export default AllResources;
