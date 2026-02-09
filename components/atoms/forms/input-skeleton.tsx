import { Skeleton } from "@/components/shadcn/ui/skeleton";

export const InputSkeleton = () => {
  return (
    <Skeleton className="border-input h-9 w-full rounded-md border shadow-sm transition-colors" />
  );
};
