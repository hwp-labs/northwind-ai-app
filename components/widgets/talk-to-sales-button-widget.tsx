"use client";

import { Button } from "../shadcn/ui/button";
import { APP } from "@/constants/APP";
import { COPY } from "@/constants/LOCALE";

export const TalkToSalesButtonWidget = () => {
  const handleClick = () => {
    const text = COPY.promptWithHi;
    const textEncoded = encodeURIComponent(text);
    window.open(`${APP.whatsappUrl}?text=${textEncoded}`, "_blank");
  };
  //
  return (
    <Button size="lg" variant="default" onClick={handleClick}>
      Talk to sales
    </Button>
  );
};
