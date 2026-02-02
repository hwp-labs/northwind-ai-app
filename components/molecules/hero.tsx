import { APP } from "@/constants/APP";

export const Hero = () => {
  return (
    <section className="mt-10 space-y-4 px-6 text-center">
      <h1 className="font-[Raleway] text-4xl leading-12 font-semibold lg:text-6xl lg:leading-18" dangerouslySetInnerHTML={{__html:APP.titleRichText}} />
      <div className="lg:leading-8 text-sm lg:text-md leading-7">
        <p>{APP.tagline1}</p>
        <p className="text-muted-foreground">{APP.tagline2}</p>
      </div>
    </section>
  );
};
