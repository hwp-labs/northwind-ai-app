import { APP } from "@/constants/APP";

export const Hero = () => {
  return (
    <section className="mt-10 space-y-4 px-6 text-center">
      <h1 className="font-[Raleway] text-5xl leading-15 font-semibold lg:text-6xl lg:leading-18">
        {APP.title}
      </h1>
      <div className="leading-8">
        <p>{APP.tagline1}</p>
        <p className="text-muted-foreground">{APP.tagline2}</p>
      </div>
    </section>
  );
};
