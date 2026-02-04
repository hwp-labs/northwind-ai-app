"use client";

import { useRouter } from "next/navigation";
//
import { Button } from "../shadcn/ui/button";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";

export const CTAButtons = () => {
  const router = useRouter();
  const handleTalkToSales = () => {
    if (typeof window === "undefined") return;

    const text = encodeURIComponent(
      `Hi, how can ${APP.name} help automate my business?`,
    );

    window.open(`${APP.whatsappUrl}?text=${text}`, "_blank");
  };
  //
  return (
    <>
      <Button size="lg" onClick={() => router.push(PATH.demo)}>
        Book a demo
      </Button>
      <Button size="lg" variant="secondary" onClick={handleTalkToSales}>
        Talk to sales
      </Button>
    </>
  );
};

export const GetStartedButton = () => {
  const router = useRouter();
  //
  return (
    <Button size="lg" onClick={() => router.push(PATH.demo)}>
      Get started
    </Button>
  );
};
