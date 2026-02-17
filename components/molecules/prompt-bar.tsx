import { ThemedTerminalIcon } from "../atoms/themed-terminal-icon";
import { COPY } from "@/constants/LOCALE";

export const PromptBar = () => {
  return (
    <section className="flex-row-cc mt-2 px-6 lg:mt-6 lg:px-0">
      <div className="flex-row-cs custom-mono from-contrast/20 to-brand/5 gap-2.5 rounded-lg border bg-gradient-to-t px-4 py-3 text-xs leading-[18px] lg:text-sm">
        <ThemedTerminalIcon alt />
        {COPY.prompt}
      </div>
    </section>
  );
};
