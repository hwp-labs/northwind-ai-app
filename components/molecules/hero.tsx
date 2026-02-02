import { APP } from "@/constants/APP";

export const Hero = () => {
  return (
    <section className="mt-10 space-y-4 px-6 text-center">
      <h1 className="mx-auto w-[320px] _border font-[Raleway] text-[38px] leading-12 font-semibold lg:w-full lg:text-6xl lg:leading-18">
        {APP.title}
      </h1>
      <div className="lg:text-md text-sm leading-7 lg:leading-8">
        <p>{APP.tagline1}</p>
        <p className="text-muted-foreground">
          -transform repetitive business processes into smart, autonomous{" "}
          <a href="https://agent.ai/" target="_blank" className="font-medium underline underline-offset-2 text-brand">
            AI agents.
          </a>
        </p>
      </div>
    </section>
  );
};
