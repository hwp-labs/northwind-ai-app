import { TerminalIcon } from "lucide-react";
// 
import { APP } from "@/constants/APP";

export const StatusBar = () => {
  return (
    <section className="flex-center-center mt-10 px-4">
      <div className="flex-center-start gap-4 rounded-lg border px-4 py-3 font-mono text-xs font-semibold leading-4">
        <TerminalIcon color={APP.colors.contrast} size={16} strokeWidth={2.5} />
        {APP.tagline3}
      </div>
    </section>
  );
};
