"use client";

import { useEffect, useState } from "react";
// 
import { CardBuilder } from "./card-builder";
import { MONTH } from "@/constants";

export const MonthlyPost = () => {
  const [i, setCounter] = useState(1);

  const displayMonth = MONTH[i - 1].slice(0, 3);
  const mutateCounter = () => setCounter((prev) => (prev < 12 ? prev + 1 : 1));

  useEffect(() => {
    setInterval(mutateCounter, 3000);
  }, []);
  //
  return (
    <>
      <CardBuilder.Header />
      <main className="relative flex-1 overflow-hidden bg-white">
        <CardBuilder.Backdrop />
        <figure className="flex-col-cc debug_ gap-2">
          <div className="relative">
            <img src={`/uploads/bot-${i}.png`} alt="" width={96} className="" />
            <img
              src="/uploads/hello.png"
              alt=""
              width={48}
              className="absolute top-2 -left-15"
            />
          </div>
          <figcaption className="bg-gradient-to-b from-[#90c9ca] bg-clip-text font-[Raleway] text-[360px] leading-72 font-bold text-transparent uppercase">
            {displayMonth}
          </figcaption>
        </figure>
        <CardBuilder.Description />
        <CardBuilder.CTA />
      </main>
    </>
  );
};
