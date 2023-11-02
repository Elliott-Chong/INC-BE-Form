import React from "react";
import { Button } from "./ui/button";

type Props = {};
const navigateTo = (path: string) => {
  window.location.href = path;
};
const BEInput = (props: Props) => {
  return <div className="flex flex-col items-center justify-center h-screen">
  <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
  <p className="mb-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">The Institute of Management Consultants (Singapore) (IMCS) is a professional body representing management consultants in Singapore. We promote the skills and knowledge of management consultancy, and adoption of the highest standards of conduct by management consulting profession. We support the professional development of management consultants through our membership services, training and certification programmes.</p>
  <Button onClick={() => navigateTo("/BEForm/partOne/sectionOne")}>Learn More</Button>
</div>
;
};

export default BEInput;
