"use client";

import { useRouter } from "next/navigation";
import { Button } from "../shadcn/ui/button";
import { PATH } from "@/constants/PATH";

export const BookADemoButton = () => {
  const router = useRouter();
  //
  return (
    <Button
      size="lg"
      onClick={() => router.push(PATH.getStarted)}
      className="bg-white"
    >
      Book a demo
    </Button>
  );
};
