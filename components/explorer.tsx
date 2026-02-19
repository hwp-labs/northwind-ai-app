"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FolderIcon, FolderOpenIcon } from "lucide-react";
//
import { Button } from "./shadcn/ui/button";
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
          title="Explore"
          aria-label="Explore"
          className="fixed left-16 bottom-5 z-[99] shadow-lg transition-colors"
        >
          {open ? <FolderOpenIcon size={14} /> : <FolderIcon size={14} />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="" align="end">
        {Object.entries({ ...PATH, ...PROTECTED_PATH }).map(([name, path]) => (
          <DropdownMenuItem key={name} onSelect={() => router.push(path)}>
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
