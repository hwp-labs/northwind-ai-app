import { PropsWithChildren } from "react";
import { TerminalIcon } from "lucide-react";
import { APP } from "@/constants/APP";

export const PromptTerminal = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex-row-cs custom-mono gap-2.5 rounded-lg border px-4 py-3 text-xs">
      <TerminalIcon color={APP.colors.contrast} size={16} strokeWidth={2.5} />
      {children}
    </div>
  );
};
