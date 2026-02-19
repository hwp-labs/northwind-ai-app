"use client";

import { useState, useEffect } from "react";
import { ChevronUpIcon } from "lucide-react";
import { IconChevronsUp } from "@tabler/icons-react";
import clsx from "clsx";
// 
import { Button } from "../shadcn/ui/button";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // show after 300px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //
  return (
    <Button
      onClick={handleScroll}
      size="icon"
      title="Scroll to top"
      aria-label="Scroll to top"
      className={clsx(
        "fixed right-8 bottom-8 z-[99] shadow-lg transition-colors hover:scale-110 hover:bg-gray-800",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <IconChevronsUp size={24} />
    </Button>
  );
};
