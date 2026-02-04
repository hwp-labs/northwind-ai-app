import { TerminalIcon } from "lucide-react";
import { APP } from "@/constants/APP";

export const ThemedTerminalIcon = () => {
  return (
    <TerminalIcon color={APP.colors.contrast} size={16} strokeWidth={2.5} />
  );
};
