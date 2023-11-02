import { useRouter } from "next/router";
import React from "react";
import { Button } from "../ui/button";

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
        <Button type="submit" onClick={handleNext} disabled={nextHref === ""}>
          Next
        </Button>
      </div>
    </>
  );
};

export default BackAndNextButtons;
