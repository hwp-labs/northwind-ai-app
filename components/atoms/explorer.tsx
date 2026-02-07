"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FolderIcon, FolderOpenIcon } from "lucide-react";
import { startCase } from "lodash";
//
import { Button } from "../shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { PATH, PROTECTED_PATH } from "@/constants/PATH";

export const Explorer = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  //
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="fixed right-4 bottom-4 z-[99] shadow-md transition-colors"
          aria-label="Explore"
        >
          {open ? <FolderOpenIcon size={14} /> : <FolderIcon size={14} />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="" align="end">
        {Object.entries({ ...PATH, ...PROTECTED_PATH }).map(([name, path]) => (
          <DropdownMenuItem key={name} onClick={() => router.push(path)}>
            {startCase(name)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
