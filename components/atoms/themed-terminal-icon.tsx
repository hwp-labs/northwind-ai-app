import clsx from "clsx";
import { TerminalIcon } from "lucide-react";
import { APP } from "@/constants/APP";

interface Props {
  alt?: boolean;
}

export const ThemedTerminalIcon = ({ alt }: Props) => (
  <TerminalIcon
    size={16}
    strokeWidth={3}
    color={alt ? APP.colors.contrast : APP.colors.white}
  />
);
