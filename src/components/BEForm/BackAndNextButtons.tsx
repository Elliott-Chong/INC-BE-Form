import { useRouter } from "next/router";
import React from "react";

type Props = {
  nextHref: string;
  backHref: string;
};

const BackAndNextButtons = (props: Props) => {
  const { nextHref, backHref } = props;

  const router = useRouter();

  const handleBack = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(backHref);
  };

  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(nextHref);
  };

  return (
    <>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          onClick={handleBack}
          className="text-sm font-semibold leading-6 text-gray-900"
          disabled={backHref === ""}
        >
          Back
        </button>
        <button
          type="submit"
          onClick={handleNext}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={nextHref === ""}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default BackAndNextButtons;
