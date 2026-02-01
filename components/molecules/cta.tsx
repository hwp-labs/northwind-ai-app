"use client";

import { useRouter } from "next/navigation";
//
import { Button } from "@/components/shadcn/ui/button";
import { Flex } from "@/components/atoms/flex";
import { PATH } from "@/constants/PATH";
import { APP } from "@/constants/APP";

export const CTA = () => {
  const router = useRouter();
  const handleTalkToSales = () => {
    if (typeof window === "undefined") return;

    const url = process.env.NEXT_PUBLIC_CONTACT_SALES_URL;
    const text = encodeURIComponent(
      `Hi, uhm so how can ${APP.name} help automate my business exactly?`,
    );

    window.open(`${url}?text=${text}`, "_blank");
  };
  //
  return (
    <Flex.Responsive classNames="mt-10 flex gap-4 px-8">
      <Button size="lg" onClick={() => router.push(PATH.demo)}>
        Book a demo
      </Button>
      <Button size="lg" variant="secondary" onClick={handleTalkToSales}>
        Talk to sales
      </Button>
    </Flex.Responsive>
  );
};
