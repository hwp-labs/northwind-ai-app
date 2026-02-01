import { APP } from "@/constants/APP";

export const Hero = () => {
  return (
    <section className="mt-10 space-y-4 px-6 text-center">
      <h1 className="font-[Raleway] text-5xl leading-15 font-semibold lg:text-6xl lg:leading-18">
        {APP.title}
      </h1>
      <div className="leading-8">
        <p>
          Automate your SME's virtual workflows and Point-of-Sale (POS) systems
          with Northwind AI
        </p>
        <p className="text-muted-foreground">
          -transform repetitive business processes into smart, autonomous AI
          agents.
        </p>
      </div>
    </section>
  );
};
