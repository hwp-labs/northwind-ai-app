import { PropsWithChildren } from "react";
import clsx from "clsx";
//
import { ThemedTerminalIcon } from "../icons/themed-terminal-icon";

interface Props extends PropsWithChildren {
  rounded?: boolean;
}

export const PromptTerminal = ({ children, rounded = true }: Props) => {
  return (
    <div
      className={clsx(
        "flex-row-cs custom-mono bg-background text-foreground gap-2.5 border px-4 py-3 text-xs",
        rounded && "rounded-lg",
      )}
    >
      <ThemedTerminalIcon />
      {children}
    </div>
  );
};
