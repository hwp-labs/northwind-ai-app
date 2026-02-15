"use client";

import { useEffect, useState } from "react";
//
import { CardBuilder } from "./card-builder";
import { MONTH } from "@/constants";

interface Props {
  page?: number;
}

export const MonthlyPost = ({ page }: Props) => {
  const [i, setCounter] = useState(page || 1);

  const displayMonth = MONTH[i - 1].slice(0, 3);
  const mutateCounter = () => setCounter((prev) => (prev < 12 ? prev + 1 : 1));

  useEffect(() => {
    if (typeof window !== "undefined" && !page) {
      const interval = setInterval(mutateCounter, 3000);
      return () => clearInterval(interval);
    }
  }, []);
  //
  return (
    <>
      <CardBuilder.Header />
      <CardBuilder.Container classNames="bg-white">
        <figure className="mt-5">
          <div className="relative mx-auto size-[120px] z-2">
            <img
              src={`/uploads/monthly/bot-${i}.png`}
              alt=""
              className="size-full object-contain"
            />
            <img
              src="/uploads/monthly/hello.png"
              alt=""
              width={48}
              className="absolute top-2 -left-11"
            />
            {renderAttachment(i)}
          </div>
          <figcaption className="from-bot bg-gradient-to-b bg-clip-text text-center font-[Raleway] text-[340px] leading-72 font-bold text-transparent uppercase">
            {displayMonth}
          </figcaption>
        </figure>
        <CardBuilder.Description centered />
        <CardBuilder.CTA />
      </CardBuilder.Container>
    </>
  );
};

const renderAttachment = (i: number) =>
  ({
    2: (
      <img
        src="/uploads/monthly/bot-2-hearts.png"
        alt=""
        width={60}
        className="absolute top-0 -right-12"
      />
    ),
    10: (
      <img
        src="/uploads/monthly/bot-10-flag.png"
        alt=""
        width={60}
        className="absolute -right-12 bottom-0"
      />
    ),
    12: (
      <img
        src="/uploads/monthly/bot-12-tree.png"
        alt=""
        width={160}
        className="absolute -right-18 bottom-0"
      />
    ),
  })[i] ?? null;
