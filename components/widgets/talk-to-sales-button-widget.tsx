"use client";

import { Button } from "../shadcn/ui/button";
import { APP } from "@/constants/APP";

export const TalkToSalesButtonWidget = () => {
  const handleClick = () => {
    const text = `Hi, how can ${APP.name} help automate my business?`;
    const textEncoded = encodeURIComponent(text);
    window.open(`${APP.whatsappUrl}?text=${textEncoded}`, "_blank");
  };
  //
  return (
    <Button size="lg" variant="secondary" onClick={handleClick}>
      Talk to sales
    </Button>
  );
};
