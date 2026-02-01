import { BotMessageSquareIcon } from "lucide-react";
import { APP } from "@/constants/APP";

export const StatusBar = () => {
  return (
    <section className="flex-center-center mt-16">
      <p className="flex-center-start gap-2.5 rounded-lg border px-4 py-3 font-medium text-sm">
        <BotMessageSquareIcon size={18} color={APP.colors.contrast} />
        Take Full Control of Verification_
      </p>
    </section>
  );
};
