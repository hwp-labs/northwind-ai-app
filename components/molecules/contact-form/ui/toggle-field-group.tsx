"use client";

import { Dispatch, SetStateAction } from "react";
import { IconPoint, IconPointFilled } from "@tabler/icons-react";

interface Props {
  stepper: number;
  setStepper: Dispatch<SetStateAction<number>>;
}

export const ToggleFieldGroup = ({ stepper, setStepper }: Props) => {
  return (
    <section className="text-brand flex-center-center dark:invert">
      <i
        onClick={() => setStepper(0)}
        title="Personal Details"
        className="cursor-pointer"
      >
        {stepper ? <IconPoint /> : <IconPointFilled />}
      </i>
      <span>|</span>
      <i
        onClick={() => setStepper(1)}
        title="Business Details"
        className="cursor-pointer"
      >
        {stepper ? <IconPointFilled /> : <IconPoint />}
      </i>
    </section>
  );
};
