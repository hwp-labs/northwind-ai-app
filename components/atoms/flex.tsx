import clsx from "clsx";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  classNames?: string;
}

const Responsive = ({ children, classNames}: Props) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-center lg:flex-row lg:items-center",
        classNames
      )}
    >
      {children}
    </div>
  );
};

const Responsive2 = ({ children, classNames}: Props) => {
  return (
    <div
      className={clsx(
        "flex flex-row justify-center lg:flex-row items-center",
        classNames
      )}
    >
      {children}
    </div>
  );
};

export const Flex = {
  Responsive,
  Responsive2,
};
