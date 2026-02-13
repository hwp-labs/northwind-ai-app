"use client";

import { DownloadIcon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { useHtmlToImage } from "@/hooks/use-html-to-image";
import { Nav } from "./nav";

export const Header = () => {
  const { loading, convertToPng } = useHtmlToImage({});
  //
  return (
    <header className="flex-row-cb border_ p-6">
      <Nav />
      <Button
        variant="secondary"
        size="icon"
        onClick={() => convertToPng("post-card")}
      >
        {loading ? <Spinner /> : <DownloadIcon size={14} />}
      </Button>
    </header>
  );
};
