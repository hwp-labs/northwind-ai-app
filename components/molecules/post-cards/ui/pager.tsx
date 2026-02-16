"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import useQueryParams from "@/hooks/use-query-params";

export const Pager = () => {
  const { add } = useQueryParams();
  //
  return (
    <Select onValueChange={(page) => add({ _: { page } })}>
      <SelectTrigger className="max-w-22 bg-transparent">
        <SelectValue placeholder="Page" />
      </SelectTrigger>
      <SelectContent>
        {Array.from({ length: 12 }).map((_, i) => {
          const j = i + 1;
          //
          return (
            <SelectItem key={i} value={String(j)}>
              Page {j}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
