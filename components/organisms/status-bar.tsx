import { APP } from "@/constants/APP";

export const StatusBar = () => {
  return (
    <section className="flex-center-center mt-10">
      <div className="flex-center-start gap-2 rounded-lg border px-4 py-3 font-mono text-xs font-semibold">
        <span className="text-contrast text-md leading-0 font-bold">&gt;_</span>
        How can {APP.name} help automate my business?
      </div>
    </section>
  );
};
