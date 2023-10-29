import React from 'react';

type Props = {};

const AllResources = (props: Props) => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold">All Resources</h1>
      </div>
      <p>
        Resource 1: <a href="https://www.google.com" className="text-blue-300 visited:text-purple-600">Google</a>
      </p>
    </>
  );
};

export default AllResources;
